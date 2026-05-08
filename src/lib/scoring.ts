import type { AnswerMap, Job, Question, Recommendation, RiasecDimension, RiasecVector, UserProfile, ValueVector, WorkStyleVector } from "@/types";

const RIASEC_KEYS: RiasecDimension[] = ["R", "I", "A", "S", "E", "C"];
const VALUE_KEYS: (keyof ValueVector)[] = ["income", "stability", "creativity", "socialImpact", "autonomy", "growth"];
const WORK_KEYS: (keyof WorkStyleVector)[] = ["collaboration", "leadership", "detail", "communication", "analysis", "making"];

function emptyRiasec(): RiasecVector {
  return { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
}

function emptyValues(): ValueVector {
  return { income: 0, stability: 0, creativity: 0, socialImpact: 0, autonomy: 0, growth: 0 };
}

function emptyWorkStyles(): WorkStyleVector {
  return { collaboration: 0, leadership: 0, detail: 0, communication: 0, analysis: 0, making: 0 };
}

function normalizeAnswer(answer: number, isReverse: boolean): number {
  const normalized = Math.max(0, Math.min(1, (answer - 1) / 6));
  return isReverse ? 1 - normalized : normalized;
}

function averageByWeights<T extends Record<string, number>>(
  raw: T,
  weights: Partial<Record<keyof T, number>>
): T {
  const next = { ...raw } as Record<keyof T, number>;

  for (const key of Object.keys(next) as Array<keyof T>) {
    const weight = weights[key] ?? 0;
    next[key] = weight === 0 ? 0.5 : Number((next[key] / weight).toFixed(3));
  }

  return next as T;
}

export function buildUserProfile(questions: Question[], answers: AnswerMap): UserProfile {
  const riasec = emptyRiasec();
  const riasecWeights = emptyRiasec();
  const values = emptyValues();
  const valueWeights = emptyValues();
  const workStyles = emptyWorkStyles();
  const workWeights = emptyWorkStyles();

  for (const question of questions) {
    const raw = answers[question.id];
    if (!raw) continue;
    const score = normalizeAnswer(raw, question.isReverse);
    const weighted = score * question.weight;

    if (RIASEC_KEYS.includes(question.dimension as RiasecDimension)) {
      const key = question.dimension as RiasecDimension;
      riasec[key] += weighted;
      riasecWeights[key] += question.weight;
      continue;
    }

    if (question.dimension === "value" && VALUE_KEYS.includes(question.subDimension as keyof ValueVector)) {
      const key = question.subDimension as keyof ValueVector;
      values[key] += weighted;
      valueWeights[key] += question.weight;
      continue;
    }

    if (question.dimension === "work_style" && WORK_KEYS.includes(question.subDimension as keyof WorkStyleVector)) {
      const key = question.subDimension as keyof WorkStyleVector;
      workStyles[key] += weighted;
      workWeights[key] += question.weight;
    }
  }

  return {
    riasec: averageByWeights(riasec, riasecWeights),
    values: averageByWeights(values, valueWeights),
    workStyles: averageByWeights(workStyles, workWeights)
  };
}

function cosineSimilarity(a: Record<string, number>, b: Record<string, number>): number {
  const keys = Array.from(new Set([...Object.keys(a), ...Object.keys(b)]));
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (const key of keys) {
    const av = a[key] || 0;
    const bv = b[key] || 0;
    dot += av * bv;
    magA += av * av;
    magB += bv * bv;
  }
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function fieldMatchScore(selectedFields: string[], job: Job): number {
  if (selectedFields.length === 0) return 0.4;
  const selected = new Set(selectedFields);
  const matches = job.fieldTags.filter((tag) => selected.has(tag)).length;
  if (matches === 0) return 0;
  return Math.min(1, matches / Math.min(selectedFields.length, job.fieldTags.length));
}

function reasonFor(profile: UserProfile, job: Job, selectedFields: string[]): string {
  const sortedRiasec = Object.entries(profile.riasec)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([key]) => key)
    .join(", ");
  const matchedFields = job.fieldTags.filter((tag) => selectedFields.includes(tag));
  const fieldText = matchedFields.length > 0 ? `선택한 관심 분야(${matchedFields.join(", ")})와 연결되고, ` : "관심 분야와 직접 일치하지는 않지만, ";
  return `${fieldText}사용자의 주요 성향 ${sortedRiasec}와 직업에서 요구되는 역량이 잘 맞습니다. ${job.summary}`;
}

export function recommendJobs(profile: UserProfile, jobs: Job[], selectedFields: string[], limit = 8): Recommendation[] {
  return jobs
    .map((job) => {
      const riasecSimilarity = cosineSimilarity(profile.riasec, job.riasec);
      const valueSimilarity = cosineSimilarity(profile.values, job.values);
      const fieldScore = fieldMatchScore(selectedFields, job);
      const finalScore = riasecSimilarity * 0.6 + fieldScore * 0.2 + valueSimilarity * 0.15 + 0.05;
      return {
        job,
        score: Math.round(finalScore * 1000) / 10,
        reason: reasonFor(profile, job, selectedFields)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getQuestionSet(allQuestions: Question[], selectedFields: string[], targetCount = 90): Question[] {
  const selected = new Set(selectedFields);
  const matching = allQuestions.filter((q) => q.fieldTags.some((tag) => selected.has(tag)));
  const general = allQuestions.filter((q) => !q.fieldTags.some((tag) => selected.has(tag)));
  const merged = [...matching, ...general];

  const byDimension = new Map<string, Question[]>();
  for (const question of merged) {
    const key = question.dimension === "value" || question.dimension === "work_style" ? question.dimension : `riasec-${question.dimension}`;
    const bucket = byDimension.get(key) || [];
    bucket.push(question);
    byDimension.set(key, bucket);
  }

  const result: Question[] = [];
  while (result.length < Math.min(targetCount, merged.length)) {
    let added = false;
    for (const bucket of byDimension.values()) {
      const question = bucket.shift();
      if (!question) continue;
      if (!result.some((q) => q.id === question.id)) {
        result.push(question);
        added = true;
      }
      if (result.length >= targetCount) break;
    }
    if (!added) break;
  }
  return result;
}

export function riasecLabel(key: RiasecDimension): string {
  const labels: Record<RiasecDimension, string> = {
    R: "현실형 R",
    I: "탐구형 I",
    A: "예술형 A",
    S: "사회형 S",
    E: "진취형 E",
    C: "관습형 C"
  };
  return labels[key];
}
