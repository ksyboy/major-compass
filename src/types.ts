export type RiasecDimension = "R" | "I" | "A" | "S" | "E" | "C";
export type QuestionDimension = RiasecDimension | "value" | "work_style";

export type RiasecVector = Record<RiasecDimension, number>;

export type ValueVector = {
  income: number;
  stability: number;
  creativity: number;
  socialImpact: number;
  autonomy: number;
  growth: number;
};

export type WorkStyleVector = {
  collaboration: number;
  leadership: number;
  detail: number;
  communication: number;
  analysis: number;
  making: number;
};

export type Question = {
  id: string;
  text: string;
  dimension: QuestionDimension;
  subDimension: string;
  fieldTags: string[];
  direction: 1 | -1;
  weight: number;
  isReverse: boolean;
};

export type Job = {
  id: string;
  title: string;
  summary: string;
  fieldTags: string[];
  riasec: RiasecVector;
  values: ValueVector;
  requiredSkills: string[];
  relatedMajors: string[];
  roadmap: string[];
};

export type AnswerMap = Record<string, number>;

export type UserProfile = {
  riasec: RiasecVector;
  values: ValueVector;
  workStyles: WorkStyleVector;
};

export type Recommendation = {
  job: Job;
  score: number;
  reason: string;
};

export type CareerDetail = {
  title: string;
  overview: string;
  mainTasks: string[];
  requiredAbilities: string[];
  recommendedMajors: string[];
  roadmap: string[];
  firstActivities: string[];
  caution: string;
};
