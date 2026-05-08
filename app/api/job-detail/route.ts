import { NextResponse } from "next/server";
import OpenAI from "openai";
import type { CareerDetail, Job, UserProfile } from "@/types";
import { buildFallbackCareerDetail } from "@/lib/fallbackDetail";

const careerDetailSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    overview: { type: "string" },
    mainTasks: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 6 },
    requiredAbilities: { type: "array", items: { type: "string" }, minItems: 4, maxItems: 8 },
    recommendedMajors: { type: "array", items: { type: "string" }, minItems: 2, maxItems: 8 },
    roadmap: { type: "array", items: { type: "string" }, minItems: 4, maxItems: 7 },
    firstActivities: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 5 },
    caution: { type: "string" }
  },
  required: [
    "title",
    "overview",
    "mainTasks",
    "requiredAbilities",
    "recommendedMajors",
    "roadmap",
    "firstActivities",
    "caution"
  ]
} as const;

function isMissingOrPlaceholderKey(apiKey?: string) {
  if (!apiKey) return true;

  const trimmed = apiKey.trim();

  return (
    trimmed.length === 0 ||
    trimmed === "sk-..." ||
    trimmed.includes("YOUR") ||
    trimmed.includes("your_openai_api_key") ||
    trimmed.includes("xxx")
  );
}

export async function POST(request: Request) {
  let job: Job | undefined;

  try {
    const body = (await request.json()) as {
      job?: Job;
      profile?: UserProfile;
    };

    job = body.job;

    if (!job) {
      return NextResponse.json(
        { error: "job 정보가 필요합니다." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY?.trim();

    // API 키가 없거나 예시값이면 기본 데이터로 상세 정보를 생성
    if (isMissingOrPlaceholderKey(apiKey)) {
      return NextResponse.json({
        detail: buildFallbackCareerDetail(job),
        source: "fallback",
        reason: "OpenAI API 키가 없거나 예시값이어서 기본 데이터를 사용했습니다."
      });
    }

    const openai = new OpenAI({ apiKey });
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const response = await openai.responses.create({
      model,
      input: [
        {
          role: "system",
          content:
            "너는 대학교 신입생을 위한 진로 상담 보조 AI다. 진로를 단정하지 말고, 탐색과 준비 방법을 현실적으로 안내한다. 한국어로 답한다."
        },
        {
          role: "user",
          content: JSON.stringify({
            instruction:
              "다음 직업 정보와 사용자 성향을 바탕으로 직업 상세 설명을 작성해줘. 사실을 과장하지 말고 대학 신입생 눈높이로 정리해.",
            job,
            userProfile: body.profile ?? null
          })
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "career_detail",
          strict: true,
          schema: careerDetailSchema
        }
      }
    });

    const output = response.output_text;
    const detail = JSON.parse(output) as CareerDetail;

    return NextResponse.json({
      detail,
      source: "openai"
    });
  } catch (error) {
    console.error("직업 상세 정보 생성 오류:", error);

    // OpenAI 호출이 실패해도 화면이 비지 않도록 기본 데이터 반환
    if (job) {
      return NextResponse.json({
        detail: buildFallbackCareerDetail(job),
        source: "fallback",
        reason: "OpenAI 호출에 실패하여 기본 데이터를 사용했습니다."
      });
    }

    return NextResponse.json(
      { error: "직업 상세 정보를 생성하지 못했습니다." },
      { status: 500 }
    );
  }
}