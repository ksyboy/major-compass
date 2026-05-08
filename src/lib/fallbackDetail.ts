import type { CareerDetail, Job } from "@/types";

export function buildFallbackCareerDetail(job: Job): CareerDetail {
  return {
    title: job.title,
    overview: job.summary,
    mainTasks: [
      `${job.title}는 관련 문제를 정의하고 필요한 정보를 수집합니다.`,
      "수집한 자료와 요구사항을 분석해 실행 가능한 해결 방향을 제안합니다.",
      "팀이나 이해관계자와 협업하며 결과물을 개선합니다."
    ],
    requiredAbilities: job.requiredSkills,
    recommendedMajors: job.relatedMajors,
    roadmap: job.roadmap,
    firstActivities: [
      "이 직업의 하루 일과와 실제 채용 공고를 찾아 공통 요구 역량을 정리하기",
      "관련 기초 과목 하나를 선택해 2주 동안 학습하고 간단한 결과물 만들기",
      "동아리, 공모전, 온라인 강의, 멘토 인터뷰 중 하나를 통해 현실 정보를 수집하기"
    ],
    caution: "이 결과는 진로를 확정하는 답이 아니라 탐색을 돕는 참고 자료입니다. 실제 선택 전에는 수업, 프로젝트, 현직자 인터뷰를 통해 추가 확인하는 것이 좋습니다."
  };
}
