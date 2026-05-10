"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { fields } from "@/data/fields";
import { questions } from "@/data/questions";
import { jobs } from "@/data/jobs";
import type { AnswerMap, CareerDetail, Job, Recommendation, RiasecDimension, UserProfile } from "@/types";
import { buildUserProfile, getQuestionSet, recommendJobs, riasecLabel } from "@/lib/scoring";

type Step = "intro" | "fields" | "test" | "results";

const riasecKeys: RiasecDimension[] = ["R", "I", "A", "S", "E", "C"];

const NORMAL_QUESTION_COUNT = 90;
const DEMO_QUESTION_COUNT = 18;
const FORCE_DEMO_MODE = process.env.NEXT_PUBLIC_FORCE_DEMO_MODE === "true";
const INITIAL_QUESTION_COUNT = FORCE_DEMO_MODE
  ? DEMO_QUESTION_COUNT
  : NORMAL_QUESTION_COUNT;

export default function HomePage() {
  const [step, setStep] = useState<Step>("intro");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questionCount, setQuestionCount] = useState(INITIAL_QUESTION_COUNT);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [careerDetail, setCareerDetail] = useState<CareerDetail | null>(null);
  const [detailSource, setDetailSource] = useState<string>("");
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string>("");

  const questionSet = useMemo(
  () => getQuestionSet(questions, selectedFields, questionCount),
  [selectedFields, questionCount]
);
  const currentQuestion = questionSet[currentIndex];
  const answeredCount = Object.keys(answers).filter((id) => questionSet.some((q) => q.id === id)).length;

  function toggleField(fieldId: string) {
    setSelectedFields((prev) =>
      prev.includes(fieldId) ? prev.filter((id) => id !== fieldId) : [...prev, fieldId]
    );
  }

  function startTestMode(count: number) {
  setQuestionCount(count);
  setSelectedFields([]);
  setCurrentIndex(0);
  setAnswers({});
  setProfile(null);
  setRecommendations([]);
  setSelectedJob(null);
  setCareerDetail(null);
  setDetailSource("");
  setSaveMessage("");
  setStep("fields");
}

  function selectAnswer(value: number) {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }

  function goNext() {
    if (currentIndex < questionSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }
    finishTest();
  }

  function goPrev() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  async function finishTest() {
    const nextProfile = buildUserProfile(questionSet, answers);
    const nextRecommendations = recommendJobs(nextProfile, jobs, selectedFields, 8);
    setProfile(nextProfile);
    setRecommendations(nextRecommendations);
    setStep("results");

    try {
      const response = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedFields,
          answers,
          profile: nextProfile,
          recommendations: nextRecommendations
        })
      });
      const data = await response.json();
      setSaveMessage(data.saved ? "검사 결과가 Supabase에 저장되었습니다." : data.reason || "로컬 결과만 사용합니다.");
    } catch {
      setSaveMessage("저장 API 호출에 실패했지만, 화면 결과는 정상 표시됩니다.");
    }
  }

  async function openJobDetail(job: Job) {
    setSelectedJob(job);
    setCareerDetail(null);
    setDetailSource("");
    setLoadingDetail(true);
    try {
      const response = await fetch("/api/job-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job, profile })
      });
      const data = await response.json();
      if (data.detail) {
        setCareerDetail(data.detail);
        setDetailSource(data.source === "openai" ? "OpenAI 생성" : "기본 데이터 기반 생성");
      }
    } finally {
      setLoadingDetail(false);
    }
  }

  function restart() {
  setStep("intro");
  setSelectedFields([]);
  setQuestionCount(INITIAL_QUESTION_COUNT);
  setCurrentIndex(0);
  setAnswers({});
  setProfile(null);
  setRecommendations([]);
  setSelectedJob(null);
  setCareerDetail(null);
  setDetailSource("");
  setSaveMessage("");
}

  return (
    <main>
      {step === "intro" && (
  <section className="hero">
    <div className="container grid-2">
      <div className="intro-panel">
        <div className="dku-header">
          <div className="dku-logo-card">
            <Image
              src="/dku-logo.png"
              alt="단국대학교 로고"
              width={180}
              height={72}
              className="dku-logo"
              priority
            />
          </div>

          <div>
            <span className="badge">단국대학교 수업 과제 프로젝트</span>
            <p className="dku-small-text">
              AI 기반 진로 탐색 · RIASEC 성향 분석
            </p>
          </div>
        </div>

        <h1 className="title">
          전공 선택이 불안한 신입생을 위한 전공나침반
        </h1>

        <p className="subtitle">
          본 플랫폼은 단국대학교 수업 과제로 제작된 AI 기반 진로 탐색 웹사이트입니다.
          관심 분야와 1~7점 진로 성향 검사를 바탕으로 나에게 맞는 직업 후보와 준비 로드맵을 추천합니다.
          추천 결과는 정답이 아니라, 전공과 진로를 탐색하기 위한 출발점입니다.
        </p>

        <div className="btn-row">
          {FORCE_DEMO_MODE ? (
  <button
    className="btn btn-primary"
    onClick={() => startTestMode(DEMO_QUESTION_COUNT)}
  >
    발표용 빠른 검사 시작하기
  </button>
) : (
  <>
    <button
      className="btn btn-primary"
      onClick={() => startTestMode(NORMAL_QUESTION_COUNT)}
    >
      정밀 검사 시작하기
    </button>

    <button
      className="btn btn-secondary"
      onClick={() => startTestMode(DEMO_QUESTION_COUNT)}
    >
      발표용 빠른 검사
    </button>
  </>
)}
<button
  className="btn btn-secondary"
  onClick={() =>
    alert(
      "Next.js + Supabase + OpenAI API 기반 과제용 MVP입니다. 사용자의 응답을 바탕으로 RIASEC 성향 점수를 계산하고, 직업 DB와 매칭하여 추천 결과를 제공합니다."
    )
  }
>
  구조 보기
</button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              alert(
                "Next.js + Supabase + OpenAI API 기반 과제용 MVP입니다. 사용자의 응답을 바탕으로 RIASEC 성향 점수를 계산하고, 직업 DB와 매칭하여 추천 결과를 제공합니다."
              )
            }
          >
            구조 보기
          </button>
        </div>

        <div className="dku-notice">
          <strong>프로젝트 목적</strong>
          <p>
            대학 신입생들이 전공 선택 과정에서 느끼는 불안을 줄이고,
            직업에 필요한 역량과 준비 과정을 구체적으로 탐색할 수 있도록 돕는 것을 목표로 합니다.
          </p>
        </div>
      </div>

      <div className="card p-32">
        <span className="badge">플랫폼 흐름</span>
        <h2>어떻게 작동하나요?</h2>
        <ol>
          <li>관심 분야를 선택합니다.</li>
          <li>
  {FORCE_DEMO_MODE
    ? "18개의 핵심 문항에 1~7점으로 답합니다."
    : "정밀 검사는 90문항, 발표용 빠른 검사는 18문항으로 진행됩니다."}
</li>
          <li>RIASEC, 가치관, 업무 방식 점수를 계산합니다.</li>
          <li>직업 DB와 매칭해 7~10개 직업을 추천합니다.</li>
          <li>직업을 선택하면 AI가 업무, 역량, 준비 단계를 정리합니다.</li>
        </ol>

        <div className="dku-notice soft">
          <strong>단국대학교 제출용 안내</strong>
          <p>
            이 웹사이트는 공식 단국대학교 서비스가 아니라,
            수업 과제 제출을 위해 제작된 개인 프로젝트입니다.
          </p>
        </div>

        <p className="footer-note">
          현재 버전은 OpenAI API와 Supabase를 연동하여 사용자 맞춤형 진로 탐색 경험을 제공합니다.
        </p>
      </div>
    </div>
  </section>
)}

      {step === "fields" && (
        <section className="hero">
          <div className="container">
            <div className="card p-32">
              <span className="badge">
  1단계 · 관심 분야 선택 · {questionCount}문항 모드
</span>
              <h1 className="question">관심 있거나 원래 목표로 생각했던 분야를 선택하세요.</h1>
              <div className="field-grid">
                {fields.map((field) => (
                  <button
                    key={field.id}
                    className={`field-chip ${selectedFields.includes(field.id) ? "active" : ""}`}
                    onClick={() => toggleField(field.id)}
                  >
                    <strong>{field.name}</strong>
                    <br />
                    <span className="job-meta">{field.description}</span>
                  </button>
                ))}
              </div>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <button className="btn btn-secondary" onClick={() => setStep("intro")}>이전</button>
                <button
                  className="btn btn-primary"
                  disabled={selectedFields.length === 0}
                  onClick={() => {
                    setCurrentIndex(0);
                    setStep("test");
                  }}
                >
                  문항 시작하기
                </button>
              </div>
              {selectedFields.length === 0 && <p className="footer-note">최소 1개 이상 선택해야 다음 단계로 이동할 수 있습니다.</p>}
            </div>
          </div>
        </section>
      )}

      {step === "test" && currentQuestion && (
        <section className="hero">
          <div className="container">
            <div className="card p-32">
              <div className="progress-wrap">
                <div className="progress-info">
                  <span>{currentIndex + 1} / {questionSet.length}</span>
                  <span>응답 완료 {answeredCount}개</span>
                </div>
                <div className="progress"><div style={{ width: `${((currentIndex + 1) / questionSet.length) * 100}%` }} /></div>
              </div>

              <span className="badge">
  2단계 · 진로 성향 검사 · {questionCount}문항 모드
</span>
              <h1 className="question">{currentQuestion.text}</h1>
              <div className="scale">
                {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                  <button
                    key={value}
                    className={answers[currentQuestion.id] === value ? "active" : ""}
                    onClick={() => selectAnswer(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="scale-labels">
                <span>전혀 그렇지 않다</span>
                <span>보통이다</span>
                <span>매우 그렇다</span>
              </div>

              <div className="btn-row" style={{ marginTop: 32 }}>
                <button className="btn btn-secondary" onClick={goPrev} disabled={currentIndex === 0}>이전</button>
                <button className="btn btn-primary" onClick={goNext} disabled={!answers[currentQuestion.id]}>
                  {currentIndex === questionSet.length - 1 ? "결과 보기" : "다음"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === "results" && profile && (
        <section className="hero">
          <div className="container">
            <div className="results-grid">
              <div className="card p-24">
                <span className="badge">
  3단계 · 성향 분석 결과 · {questionCount}문항 모드
</span>
                <h2>나의 주요 성향</h2>
                {riasecKeys.map((key) => (
                  <div className="bar-row" key={key}>
                    <div className="bar-label"><span>{riasecLabel(key)}</span><strong>{Math.round(profile.riasec[key] * 100)}%</strong></div>
                    <div className="bar"><div style={{ width: `${profile.riasec[key] * 100}%` }} /></div>
                  </div>
                ))}
                <p className="footer-note">{saveMessage}</p>
                <button className="btn btn-secondary" onClick={restart}>처음부터 다시 하기</button>
              </div>

              <div className="card p-24">
                <span className="badge">4단계 · 추천 직업</span>
                <h2>추천 직업 TOP {recommendations.length}</h2>
                <div className="job-list">
                  {recommendations.map((item, index) => (
                    <article className="job-card" key={item.job.id}>
                      <div className="job-head">
                        <div>
                          <p className="job-title">{index + 1}. {item.job.title}</p>
                          <p className="job-meta">{item.job.fieldTags.join(" · ")}</p>
                        </div>
                        <span className="score">{item.score}점</span>
                      </div>
                      <p className="reason">{item.reason}</p>
                      <div className="btn-row" style={{ marginTop: 14 }}>
                        <button className="btn btn-ghost" onClick={() => openJobDetail(item.job)}>직업 상세 보기</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedJob && (
        <div className="modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="job-head">
              <div>
                <span className="badge">직업 상세 정보 {detailSource && `· ${detailSource}`}</span>
                <h2>{selectedJob.title}</h2>
              </div>
              <button className="btn btn-secondary" onClick={() => setSelectedJob(null)}>닫기</button>
            </div>
            {loadingDetail && <p>AI가 직업 정보를 정리하는 중입니다...</p>}
            {careerDetail && (
              <>
                <p className="subtitle">{careerDetail.overview}</p>
                <DetailSection title="주요 업무" items={careerDetail.mainTasks} />
                <DetailSection title="필요 역량" items={careerDetail.requiredAbilities} />
                <DetailSection title="관련 전공" items={careerDetail.recommendedMajors} />
                <DetailSection title="준비 로드맵" items={careerDetail.roadmap} ordered />
                <DetailSection title="먼저 해볼 활동" items={careerDetail.firstActivities} />
                <p className="footer-note">{careerDetail.caution}</p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function DetailSection({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      <ListTag>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ListTag>
    </section>
  );
}
