import { createClient } from "@supabase/supabase-js";
import { questions } from "../src/data/questions";
import { jobs } from "../src/data/jobs";

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL과 SUPABASE_SECRET_KEY 또는 SUPABASE_SERVICE_ROLE_KEY가 필요합니다.");
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  console.log(`questions: ${questions.length}`);
  console.log(`jobs: ${jobs.length}`);
  console.log("현재 MVP는 질문/직업 데이터를 코드에서 직접 import합니다.");
  console.log("DB에도 저장하고 싶다면 fields/questions/jobs 테이블을 추가한 뒤 이 스크립트를 확장하세요.");

  const { data, error } = await supabase.from("user_sessions").select("id").limit(1);
  if (error) throw error;
  console.log("Supabase 연결 성공", data);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
