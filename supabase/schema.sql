-- Supabase SQL Editor에서 실행하세요.
-- 과제용 MVP 기준: 로그인 없이 익명 세션을 저장합니다.

create table if not exists user_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  selected_fields text[] not null default '{}',
  profile jsonb not null,
  result_summary jsonb not null default '[]'::jsonb
);

create table if not exists answers (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  session_id uuid not null references user_sessions(id) on delete cascade,
  question_id text not null,
  answer_value int not null check (answer_value between 1 and 7)
);

create table if not exists recommendations (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  session_id uuid not null references user_sessions(id) on delete cascade,
  job_id text not null,
  rank int not null,
  score numeric not null,
  reason text not null
);

create index if not exists idx_answers_session_id on answers(session_id);
create index if not exists idx_recommendations_session_id on recommendations(session_id);

-- 선택 사항: 프로젝트를 공개 서비스로 운영할 때는 RLS 정책을 별도로 설계하세요.
-- 이 MVP는 서버 Route Handler가 secret/service role key로 insert하는 구조입니다.
