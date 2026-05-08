import { NextResponse } from "next/server";
import type { AnswerMap, Recommendation, UserProfile } from "@/types";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      selectedFields: string[];
      answers: AnswerMap;
      profile: UserProfile;
      recommendations: Recommendation[];
    };

    const supabase = createSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ saved: false, reason: "Supabase 환경변수가 없어 로컬 결과만 사용합니다." });
    }

    const { data: session, error: sessionError } = await supabase
      .from("user_sessions")
      .insert({
        selected_fields: body.selectedFields,
        profile: body.profile,
        result_summary: body.recommendations.map((item) => ({
          jobId: item.job.id,
          title: item.job.title,
          score: item.score,
          reason: item.reason
        }))
      })
      .select("id")
      .single();

    if (sessionError) throw sessionError;

    const answerRows = Object.entries(body.answers).map(([questionId, answerValue]) => ({
      session_id: session.id,
      question_id: questionId,
      answer_value: answerValue
    }));

    if (answerRows.length > 0) {
      const { error } = await supabase.from("answers").insert(answerRows);
      if (error) throw error;
    }

    const recommendationRows = body.recommendations.map((item, index) => ({
      session_id: session.id,
      job_id: item.job.id,
      rank: index + 1,
      score: item.score,
      reason: item.reason
    }));

    if (recommendationRows.length > 0) {
      const { error } = await supabase.from("recommendations").insert(recommendationRows);
      if (error) throw error;
    }

    return NextResponse.json({ saved: true, sessionId: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ saved: false, error: "검사 결과 저장에 실패했습니다." }, { status: 500 });
  }
}
