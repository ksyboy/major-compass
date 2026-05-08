# 전공나침반 Major Compass

대학교 신입생의 전공 선택 불안을 줄이기 위한 AI 기반 진로 성향 검사 플랫폼 MVP입니다.

## 기능

- 관심 분야 선택
- 1~7점 리커트 척도 기반 진로 성향 검사
- RIASEC + 직업 가치관 + 업무 방식 점수 계산
- 직업 DB 기반 추천 TOP 8 출력
- 직업 상세 설명 생성
  - `OPENAI_API_KEY`가 있으면 OpenAI API로 생성
  - 키가 없으면 기본 데이터 기반으로 작동
- Supabase 결과 저장
  - Supabase 환경변수가 있으면 저장
  - 없으면 화면 결과만 표시

## 실행 방법

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

## Supabase 설정

1. Supabase에서 새 프로젝트를 생성합니다.
2. SQL Editor에서 `supabase/schema.sql` 내용을 실행합니다.
3. `.env.local`에 아래 값을 입력합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxx
SUPABASE_SECRET_KEY=sb_secret_xxx
```

레거시 프로젝트라면 `SUPABASE_SERVICE_ROLE_KEY`를 사용할 수 있습니다.

## OpenAI 설정

`.env.local`에 아래 값을 입력합니다.

```bash
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

모델 접근 권한이 다르면 `OPENAI_MODEL` 값을 사용 가능한 모델명으로 변경하세요.

## 구조

```text
app/page.tsx                 메인 검사 UI
app/api/job-detail/route.ts  OpenAI 기반 직업 상세 설명 생성
app/api/sessions/route.ts    Supabase 검사 결과 저장
src/data/questions.ts        생성된 질문 102개
src/data/jobs.ts             직업 데이터 35개
src/lib/scoring.ts           성향 분석 및 추천 알고리즘
supabase/schema.sql          DB 테이블 생성 SQL
```

## 발표용 설명 요약

이 플랫폼은 MBTI형 검사 UI를 진로 탐색에 적용하되, 내부 분석은 RIASEC 진로 흥미 유형, 직업 가치관, 업무 방식 점수를 함께 계산하는 구조입니다. 사용자가 관심 분야를 선택하고 문항에 응답하면, 플랫폼은 사용자 성향 벡터와 직업 벡터의 유사도를 계산해 직업을 추천합니다. 직업 상세 설명은 OpenAI API를 활용해 대학 신입생 눈높이에 맞게 자동 생성합니다.
