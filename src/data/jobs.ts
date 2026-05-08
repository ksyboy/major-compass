import type { Job } from "@/types";

export const jobs = [
  {
    "id": "data-analyst",
    "title": "데이터 분석가",
    "summary": "기업이나 기관의 데이터를 정리·분석해 의사결정에 필요한 근거를 제공하는 직업이다.",
    "fieldTags": [
      "IT",
      "business"
    ],
    "riasec": {
      "R": 0.2,
      "I": 0.9,
      "A": 0.35,
      "S": 0.35,
      "E": 0.45,
      "C": 0.85
    },
    "values": {
      "income": 0.75,
      "stability": 0.65,
      "creativity": 0.45,
      "socialImpact": 0.45,
      "autonomy": 0.65,
      "growth": 0.9
    },
    "requiredSkills": [
      "통계 기초",
      "Python 또는 R",
      "SQL",
      "데이터 시각화",
      "문제 정의 능력"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "통계학",
      "경영학",
      "산업공학"
    ],
    "roadmap": [
      "엑셀과 통계 기초를 익힌다.",
      "Python pandas와 SQL로 공공데이터를 분석한다.",
      "시각화 대시보드 또는 보고서를 만든다.",
      "데이터 분석 포트폴리오를 2~3개 정리한다."
    ]
  },
  {
    "id": "software-engineer",
    "title": "소프트웨어 개발자",
    "summary": "웹, 앱, 서버, 시스템 등 사용자가 필요로 하는 소프트웨어를 설계하고 구현한다.",
    "fieldTags": [
      "IT"
    ],
    "riasec": {
      "R": 0.45,
      "I": 0.85,
      "A": 0.45,
      "S": 0.25,
      "E": 0.35,
      "C": 0.7
    },
    "values": {
      "income": 0.8,
      "stability": 0.65,
      "creativity": 0.65,
      "socialImpact": 0.4,
      "autonomy": 0.75,
      "growth": 0.95
    },
    "requiredSkills": [
      "프로그래밍",
      "알고리즘",
      "자료구조",
      "협업 도구 Git",
      "문제 해결 능력"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "소프트웨어학",
      "인공지능학"
    ],
    "roadmap": [
      "Python 또는 JavaScript로 기초 문법을 익힌다.",
      "자료구조와 알고리즘을 학습한다.",
      "웹앱이나 게임 등 작은 서비스를 만든다.",
      "GitHub에 코드와 설명을 정리한다."
    ]
  },
  {
    "id": "ai-product-planner",
    "title": "AI 서비스 기획자",
    "summary": "AI 기술을 활용해 사용자 문제를 해결하는 서비스의 기능, 흐름, 정책을 설계한다.",
    "fieldTags": [
      "IT",
      "business",
      "design"
    ],
    "riasec": {
      "R": 0.25,
      "I": 0.75,
      "A": 0.65,
      "S": 0.55,
      "E": 0.8,
      "C": 0.55
    },
    "values": {
      "income": 0.75,
      "stability": 0.55,
      "creativity": 0.75,
      "socialImpact": 0.55,
      "autonomy": 0.75,
      "growth": 0.9
    },
    "requiredSkills": [
      "AI 기본 이해",
      "서비스 기획",
      "사용자 조사",
      "데이터 해석",
      "문서화와 발표"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "경영학",
      "산업공학",
      "디자인학"
    ],
    "roadmap": [
      "AI 서비스 사례를 분석한다.",
      "간단한 챗봇 또는 추천 시스템을 기획한다.",
      "화면 흐름도와 기능 명세서를 만든다.",
      "개발자·디자이너와 협업하는 프로젝트를 경험한다."
    ]
  },
  {
    "id": "ux-researcher",
    "title": "UX 리서처",
    "summary": "사용자 행동과 불편을 조사해 제품이나 서비스의 개선 방향을 제안한다.",
    "fieldTags": [
      "design",
      "IT",
      "business"
    ],
    "riasec": {
      "R": 0.15,
      "I": 0.75,
      "A": 0.65,
      "S": 0.75,
      "E": 0.45,
      "C": 0.55
    },
    "values": {
      "income": 0.6,
      "stability": 0.55,
      "creativity": 0.65,
      "socialImpact": 0.65,
      "autonomy": 0.65,
      "growth": 0.8
    },
    "requiredSkills": [
      "인터뷰 설계",
      "사용성 테스트",
      "자료 분석",
      "공감 능력",
      "리서치 보고서 작성"
    ],
    "relatedMajors": [
      "심리학",
      "디자인학",
      "경영학",
      "컴퓨터공학"
    ],
    "roadmap": [
      "사용자 인터뷰 방법을 익힌다.",
      "주변 서비스를 대상으로 사용성 테스트를 진행한다.",
      "문제점과 개선안을 리포트로 정리한다.",
      "UX 포트폴리오를 만든다."
    ]
  },
  {
    "id": "uiux-designer",
    "title": "UX/UI 디자이너",
    "summary": "사용자가 서비스를 쉽게 이해하고 사용할 수 있도록 화면 구조와 시각 요소를 설계한다.",
    "fieldTags": [
      "design",
      "IT"
    ],
    "riasec": {
      "R": 0.25,
      "I": 0.45,
      "A": 0.9,
      "S": 0.55,
      "E": 0.45,
      "C": 0.55
    },
    "values": {
      "income": 0.6,
      "stability": 0.5,
      "creativity": 0.9,
      "socialImpact": 0.55,
      "autonomy": 0.75,
      "growth": 0.8
    },
    "requiredSkills": [
      "Figma",
      "정보 구조 설계",
      "사용자 경험 이해",
      "시각 디자인",
      "프로토타이핑"
    ],
    "relatedMajors": [
      "디자인학",
      "컴퓨터공학",
      "미디어학"
    ],
    "roadmap": [
      "좋은 앱 화면을 분석하고 따라 만들어본다.",
      "Figma로 와이어프레임을 만든다.",
      "사용자 피드백을 받아 화면을 개선한다.",
      "프로토타입과 개선 과정을 포트폴리오로 정리한다."
    ]
  },
  {
    "id": "digital-marketer",
    "title": "디지털 마케터",
    "summary": "온라인 채널과 데이터를 활용해 브랜드, 제품, 서비스가 사용자에게 도달하도록 전략을 세운다.",
    "fieldTags": [
      "business",
      "media"
    ],
    "riasec": {
      "R": 0.1,
      "I": 0.55,
      "A": 0.65,
      "S": 0.6,
      "E": 0.8,
      "C": 0.6
    },
    "values": {
      "income": 0.7,
      "stability": 0.55,
      "creativity": 0.7,
      "socialImpact": 0.45,
      "autonomy": 0.65,
      "growth": 0.75
    },
    "requiredSkills": [
      "콘텐츠 기획",
      "광고 성과 분석",
      "시장 조사",
      "커뮤니케이션",
      "트렌드 이해"
    ],
    "relatedMajors": [
      "경영학",
      "광고홍보학",
      "미디어학",
      "통계학"
    ],
    "roadmap": [
      "SNS와 광고 캠페인 사례를 분석한다.",
      "간단한 콘텐츠 기획안을 작성한다.",
      "성과 지표와 분석 방법을 익힌다.",
      "브랜드 캠페인 미니 프로젝트를 진행한다."
    ]
  },
  {
    "id": "cybersecurity-specialist",
    "title": "정보보안 전문가",
    "summary": "시스템과 네트워크의 취약점을 분석하고 해킹, 정보 유출, 보안 사고를 예방한다.",
    "fieldTags": [
      "IT"
    ],
    "riasec": {
      "R": 0.45,
      "I": 0.9,
      "A": 0.25,
      "S": 0.25,
      "E": 0.35,
      "C": 0.8
    },
    "values": {
      "income": 0.8,
      "stability": 0.75,
      "creativity": 0.45,
      "socialImpact": 0.65,
      "autonomy": 0.55,
      "growth": 0.9
    },
    "requiredSkills": [
      "네트워크",
      "운영체제",
      "보안 기초",
      "로그 분석",
      "윤리 의식"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "정보보호학"
    ],
    "roadmap": [
      "네트워크와 운영체제 기본을 학습한다.",
      "CTF나 보안 실습 플랫폼을 경험한다.",
      "취약점 분석 보고서를 작성해본다.",
      "정보보안 관련 자격증과 인턴십을 탐색한다."
    ]
  },
  {
    "id": "business-consultant",
    "title": "경영 컨설턴트",
    "summary": "기업의 문제를 분석하고 전략, 조직, 운영, 시장 진입 방향 등을 제안한다.",
    "fieldTags": [
      "business"
    ],
    "riasec": {
      "R": 0.1,
      "I": 0.8,
      "A": 0.45,
      "S": 0.55,
      "E": 0.9,
      "C": 0.65
    },
    "values": {
      "income": 0.85,
      "stability": 0.55,
      "creativity": 0.55,
      "socialImpact": 0.45,
      "autonomy": 0.65,
      "growth": 0.9
    },
    "requiredSkills": [
      "논리적 사고",
      "시장 분석",
      "자료 조사",
      "프레젠테이션",
      "문제 해결력"
    ],
    "relatedMajors": [
      "경영학",
      "경제학",
      "산업공학",
      "통계학"
    ],
    "roadmap": [
      "기업 사례 분석을 연습한다.",
      "엑셀과 프레젠테이션 능력을 기른다.",
      "전략 공모전이나 케이스 스터디에 참여한다.",
      "분석 보고서 샘플을 포트폴리오화한다."
    ]
  },
  {
    "id": "financial-analyst",
    "title": "금융 분석가",
    "summary": "기업, 산업, 금융상품의 데이터를 분석해 투자나 재무 의사결정에 필요한 정보를 제공한다.",
    "fieldTags": [
      "business"
    ],
    "riasec": {
      "R": 0.05,
      "I": 0.85,
      "A": 0.2,
      "S": 0.25,
      "E": 0.55,
      "C": 0.85
    },
    "values": {
      "income": 0.9,
      "stability": 0.65,
      "creativity": 0.3,
      "socialImpact": 0.35,
      "autonomy": 0.55,
      "growth": 0.85
    },
    "requiredSkills": [
      "회계 기초",
      "재무관리",
      "통계",
      "엑셀",
      "시장 분석"
    ],
    "relatedMajors": [
      "경영학",
      "경제학",
      "회계학",
      "통계학"
    ],
    "roadmap": [
      "회계원리와 재무관리 기초를 공부한다.",
      "기업 재무제표를 읽어본다.",
      "산업 분석 리포트를 작성한다.",
      "금융 관련 인턴십이나 투자 동아리를 경험한다."
    ]
  },
  {
    "id": "teacher",
    "title": "교사/교육 전문가",
    "summary": "학습자의 성장 단계에 맞춰 지식과 태도를 가르치고 학습 과정을 설계한다.",
    "fieldTags": [
      "education"
    ],
    "riasec": {
      "R": 0.15,
      "I": 0.55,
      "A": 0.45,
      "S": 0.9,
      "E": 0.45,
      "C": 0.65
    },
    "values": {
      "income": 0.45,
      "stability": 0.85,
      "creativity": 0.45,
      "socialImpact": 0.9,
      "autonomy": 0.45,
      "growth": 0.75
    },
    "requiredSkills": [
      "설명 능력",
      "공감 능력",
      "수업 설계",
      "평가 설계",
      "생활지도"
    ],
    "relatedMajors": [
      "교육학",
      "교과교육학",
      "심리학"
    ],
    "roadmap": [
      "관심 교과의 기초 지식을 탄탄히 한다.",
      "멘토링이나 교육 봉사를 경험한다.",
      "수업 자료를 직접 제작해본다.",
      "교직 이수나 교육대학원 경로를 확인한다."
    ]
  },
  {
    "id": "counselor",
    "title": "상담사/진로상담 전문가",
    "summary": "개인의 고민, 정서, 진로 문제를 듣고 적절한 탐색과 의사결정을 돕는다.",
    "fieldTags": [
      "education",
      "health"
    ],
    "riasec": {
      "R": 0.05,
      "I": 0.65,
      "A": 0.45,
      "S": 0.95,
      "E": 0.35,
      "C": 0.55
    },
    "values": {
      "income": 0.45,
      "stability": 0.65,
      "creativity": 0.5,
      "socialImpact": 0.95,
      "autonomy": 0.55,
      "growth": 0.8
    },
    "requiredSkills": [
      "경청",
      "상담 이론",
      "심리 평가 이해",
      "윤리 의식",
      "대화 기술"
    ],
    "relatedMajors": [
      "심리학",
      "상담학",
      "교육학"
    ],
    "roadmap": [
      "심리학과 상담 기초 과목을 듣는다.",
      "상담 관련 봉사나 멘토링을 경험한다.",
      "사례 개념화와 윤리 기준을 학습한다.",
      "전문 자격과 대학원 진학 경로를 확인한다."
    ]
  },
  {
    "id": "nurse",
    "title": "간호사",
    "summary": "환자의 건강 상태를 관찰하고 치료 과정에서 필요한 간호와 교육을 제공한다.",
    "fieldTags": [
      "health"
    ],
    "riasec": {
      "R": 0.55,
      "I": 0.6,
      "A": 0.25,
      "S": 0.9,
      "E": 0.35,
      "C": 0.8
    },
    "values": {
      "income": 0.55,
      "stability": 0.85,
      "creativity": 0.25,
      "socialImpact": 0.95,
      "autonomy": 0.35,
      "growth": 0.75
    },
    "requiredSkills": [
      "기초 의학 지식",
      "환자 관찰",
      "의사소통",
      "정확성",
      "위기 대응"
    ],
    "relatedMajors": [
      "간호학"
    ],
    "roadmap": [
      "생명과학과 인체 구조 기초를 학습한다.",
      "간호학과 교육과정과 실습 구조를 확인한다.",
      "의료 봉사나 병원 현장 경험을 탐색한다.",
      "국가고시와 임상 진로를 준비한다."
    ]
  },
  {
    "id": "biomedical-engineer",
    "title": "의공학/바이오메디컬 엔지니어",
    "summary": "공학 기술을 활용해 의료기기, 진단 시스템, 헬스케어 솔루션을 개발한다.",
    "fieldTags": [
      "health",
      "engineering",
      "IT"
    ],
    "riasec": {
      "R": 0.65,
      "I": 0.85,
      "A": 0.35,
      "S": 0.45,
      "E": 0.35,
      "C": 0.65
    },
    "values": {
      "income": 0.7,
      "stability": 0.65,
      "creativity": 0.55,
      "socialImpact": 0.85,
      "autonomy": 0.55,
      "growth": 0.9
    },
    "requiredSkills": [
      "생명과학",
      "전자/기계 기초",
      "프로그래밍",
      "문제 해결",
      "의료 데이터 이해"
    ],
    "relatedMajors": [
      "의공학",
      "전자공학",
      "기계공학",
      "컴퓨터공학"
    ],
    "roadmap": [
      "생명과학과 물리 기초를 정리한다.",
      "센서나 아두이노 프로젝트를 해본다.",
      "의료기기 사례를 분석한다.",
      "헬스케어 문제 해결 프로젝트를 포트폴리오화한다."
    ]
  },
  {
    "id": "mechanical-engineer",
    "title": "기계공학 엔지니어",
    "summary": "기계 장치, 생산 설비, 로봇, 에너지 시스템 등을 설계하고 개선한다.",
    "fieldTags": [
      "engineering"
    ],
    "riasec": {
      "R": 0.85,
      "I": 0.75,
      "A": 0.35,
      "S": 0.25,
      "E": 0.35,
      "C": 0.65
    },
    "values": {
      "income": 0.7,
      "stability": 0.75,
      "creativity": 0.45,
      "socialImpact": 0.45,
      "autonomy": 0.45,
      "growth": 0.8
    },
    "requiredSkills": [
      "역학",
      "CAD",
      "수학/물리",
      "실험 분석",
      "설계 사고"
    ],
    "relatedMajors": [
      "기계공학",
      "로봇공학",
      "메카트로닉스"
    ],
    "roadmap": [
      "물리와 미적분 기초를 다진다.",
      "CAD와 3D 모델링을 익힌다.",
      "간단한 기구 설계 프로젝트를 진행한다.",
      "설계 결과와 실험 데이터를 보고서로 정리한다."
    ]
  },
  {
    "id": "robotics-engineer",
    "title": "로봇공학자",
    "summary": "센서, 제어, 기계 설계, 인공지능을 결합해 로봇 시스템을 만든다.",
    "fieldTags": [
      "engineering",
      "IT"
    ],
    "riasec": {
      "R": 0.8,
      "I": 0.9,
      "A": 0.45,
      "S": 0.25,
      "E": 0.35,
      "C": 0.65
    },
    "values": {
      "income": 0.75,
      "stability": 0.6,
      "creativity": 0.65,
      "socialImpact": 0.55,
      "autonomy": 0.6,
      "growth": 0.95
    },
    "requiredSkills": [
      "제어공학",
      "프로그래밍",
      "전자회로",
      "기계 설계",
      "수학"
    ],
    "relatedMajors": [
      "로봇공학",
      "기계공학",
      "전자공학",
      "컴퓨터공학"
    ],
    "roadmap": [
      "아두이노나 라즈베리파이로 센서 제어를 해본다.",
      "Python/C++ 기초를 학습한다.",
      "간단한 이동 로봇 프로젝트를 만든다.",
      "대회나 연구실 프로젝트에 참여한다."
    ]
  },
  {
    "id": "game-developer",
    "title": "게임 개발자",
    "summary": "게임의 규칙, 상호작용, 그래픽, 시스템을 코드로 구현해 플레이 가능한 경험을 만든다.",
    "fieldTags": [
      "IT",
      "media",
      "design"
    ],
    "riasec": {
      "R": 0.45,
      "I": 0.75,
      "A": 0.75,
      "S": 0.3,
      "E": 0.35,
      "C": 0.55
    },
    "values": {
      "income": 0.65,
      "stability": 0.45,
      "creativity": 0.9,
      "socialImpact": 0.4,
      "autonomy": 0.7,
      "growth": 0.9
    },
    "requiredSkills": [
      "프로그래밍",
      "게임 엔진",
      "수학/물리 기초",
      "문제 해결",
      "협업"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "게임공학",
      "소프트웨어학"
    ],
    "roadmap": [
      "Unity 또는 Unreal 기초를 익힌다.",
      "작은 2D 게임을 완성한다.",
      "충돌 처리, 물리, UI 등 기능을 직접 구현한다.",
      "GitHub와 영상으로 포트폴리오를 만든다."
    ]
  },
  {
    "id": "content-producer",
    "title": "콘텐츠 PD/프로듀서",
    "summary": "영상, 방송, 온라인 콘텐츠의 주제, 구성, 제작 과정을 기획하고 관리한다.",
    "fieldTags": [
      "media",
      "music_art",
      "business"
    ],
    "riasec": {
      "R": 0.25,
      "I": 0.45,
      "A": 0.85,
      "S": 0.65,
      "E": 0.75,
      "C": 0.45
    },
    "values": {
      "income": 0.55,
      "stability": 0.4,
      "creativity": 0.9,
      "socialImpact": 0.6,
      "autonomy": 0.7,
      "growth": 0.75
    },
    "requiredSkills": [
      "기획력",
      "스토리텔링",
      "촬영/편집 이해",
      "협업",
      "일정 관리"
    ],
    "relatedMajors": [
      "미디어학",
      "신문방송학",
      "영상학",
      "경영학"
    ],
    "roadmap": [
      "좋은 콘텐츠의 구조를 분석한다.",
      "짧은 영상 기획안을 작성하고 제작한다.",
      "촬영·편집 기본기를 익힌다.",
      "조회수보다 기획 의도와 개선 과정을 정리한다."
    ]
  },
  {
    "id": "music-producer",
    "title": "음악 프로듀서",
    "summary": "음악의 방향, 편곡, 녹음, 믹싱 과정을 조율해 완성도 있는 음원을 만든다.",
    "fieldTags": [
      "music_art",
      "media"
    ],
    "riasec": {
      "R": 0.25,
      "I": 0.4,
      "A": 0.95,
      "S": 0.45,
      "E": 0.55,
      "C": 0.45
    },
    "values": {
      "income": 0.5,
      "stability": 0.35,
      "creativity": 0.95,
      "socialImpact": 0.5,
      "autonomy": 0.8,
      "growth": 0.8
    },
    "requiredSkills": [
      "음악 이론",
      "DAW 활용",
      "편곡",
      "사운드 이해",
      "협업 커뮤니케이션"
    ],
    "relatedMajors": [
      "실용음악",
      "음악학",
      "미디어음악"
    ],
    "roadmap": [
      "기초 화성과 리듬을 공부한다.",
      "DAW로 짧은 곡을 제작해본다.",
      "보컬/악기 녹음과 믹싱을 경험한다.",
      "작업물을 사운드클라우드나 포트폴리오로 정리한다."
    ]
  },
  {
    "id": "policy-analyst",
    "title": "정책 분석가",
    "summary": "사회 문제와 정책 효과를 분석해 정부, 공공기관, 연구기관의 의사결정을 돕는다.",
    "fieldTags": [
      "law_policy",
      "environment",
      "business"
    ],
    "riasec": {
      "R": 0.1,
      "I": 0.85,
      "A": 0.35,
      "S": 0.65,
      "E": 0.55,
      "C": 0.75
    },
    "values": {
      "income": 0.55,
      "stability": 0.75,
      "creativity": 0.4,
      "socialImpact": 0.95,
      "autonomy": 0.45,
      "growth": 0.8
    },
    "requiredSkills": [
      "자료 조사",
      "통계 기초",
      "정책 이해",
      "보고서 작성",
      "비판적 사고"
    ],
    "relatedMajors": [
      "행정학",
      "정치외교학",
      "경제학",
      "통계학"
    ],
    "roadmap": [
      "관심 사회문제를 하나 정해 자료를 모은다.",
      "정책 보고서 형식을 익힌다.",
      "통계와 공공데이터 분석을 배운다.",
      "정책 제안서나 토론 대회에 참여한다."
    ]
  },
  {
    "id": "lawyer",
    "title": "법조인/변호사",
    "summary": "법률 지식을 바탕으로 분쟁 해결, 자문, 계약 검토, 권리 보호 업무를 수행한다.",
    "fieldTags": [
      "law_policy"
    ],
    "riasec": {
      "R": 0.05,
      "I": 0.8,
      "A": 0.35,
      "S": 0.65,
      "E": 0.75,
      "C": 0.75
    },
    "values": {
      "income": 0.85,
      "stability": 0.65,
      "creativity": 0.35,
      "socialImpact": 0.75,
      "autonomy": 0.55,
      "growth": 0.85
    },
    "requiredSkills": [
      "논리적 사고",
      "법률 해석",
      "글쓰기",
      "토론",
      "윤리 의식"
    ],
    "relatedMajors": [
      "법학",
      "정치외교학",
      "행정학"
    ],
    "roadmap": [
      "헌법·민법 등 기본 법 영역을 탐색한다.",
      "판례 읽기와 논증 글쓰기를 연습한다.",
      "토론이나 모의재판 활동을 해본다.",
      "로스쿨 진학 요건과 시험 구조를 확인한다."
    ]
  },
  {
    "id": "environmental-consultant",
    "title": "환경 컨설턴트",
    "summary": "기업이나 기관의 환경 영향, 지속가능성, 탄소 배출 문제를 분석하고 개선 방안을 제시한다.",
    "fieldTags": [
      "environment",
      "business",
      "engineering"
    ],
    "riasec": {
      "R": 0.45,
      "I": 0.75,
      "A": 0.35,
      "S": 0.65,
      "E": 0.55,
      "C": 0.65
    },
    "values": {
      "income": 0.6,
      "stability": 0.6,
      "creativity": 0.45,
      "socialImpact": 0.95,
      "autonomy": 0.55,
      "growth": 0.8
    },
    "requiredSkills": [
      "환경 과학",
      "데이터 분석",
      "정책 이해",
      "보고서 작성",
      "프로젝트 관리"
    ],
    "relatedMajors": [
      "환경공학",
      "환경과학",
      "경영학",
      "행정학"
    ],
    "roadmap": [
      "기후변화와 환경 정책 기초를 학습한다.",
      "탄소 배출이나 폐기물 데이터를 분석해본다.",
      "ESG 보고서 사례를 읽는다.",
      "지역 환경 문제 해결 프로젝트를 진행한다."
    ]
  },
  {
    "id": "esg-manager",
    "title": "ESG/지속가능경영 담당자",
    "summary": "기업의 환경, 사회, 지배구조 활동을 관리하고 지속가능성 전략과 보고서를 만든다.",
    "fieldTags": [
      "environment",
      "business",
      "law_policy"
    ],
    "riasec": {
      "R": 0.15,
      "I": 0.65,
      "A": 0.4,
      "S": 0.7,
      "E": 0.75,
      "C": 0.75
    },
    "values": {
      "income": 0.65,
      "stability": 0.65,
      "creativity": 0.45,
      "socialImpact": 0.9,
      "autonomy": 0.55,
      "growth": 0.75
    },
    "requiredSkills": [
      "ESG 이해",
      "데이터 관리",
      "보고서 작성",
      "이해관계자 소통",
      "법규 이해"
    ],
    "relatedMajors": [
      "경영학",
      "환경학",
      "행정학",
      "경제학"
    ],
    "roadmap": [
      "ESG 기본 개념과 국내외 사례를 정리한다.",
      "기업 지속가능경영 보고서를 분석한다.",
      "환경·사회 지표를 표로 정리해본다.",
      "ESG 관련 공모전이나 프로젝트에 참여한다."
    ]
  },
  {
    "id": "product-manager",
    "title": "프로덕트 매니저",
    "summary": "사용자 문제, 사업 목표, 개발 가능성을 연결해 제품의 방향과 우선순위를 결정한다.",
    "fieldTags": [
      "IT",
      "business",
      "design"
    ],
    "riasec": {
      "R": 0.15,
      "I": 0.7,
      "A": 0.65,
      "S": 0.65,
      "E": 0.85,
      "C": 0.65
    },
    "values": {
      "income": 0.8,
      "stability": 0.55,
      "creativity": 0.75,
      "socialImpact": 0.55,
      "autonomy": 0.75,
      "growth": 0.9
    },
    "requiredSkills": [
      "문제 정의",
      "사용자 이해",
      "데이터 분석",
      "우선순위 결정",
      "협업 커뮤니케이션"
    ],
    "relatedMajors": [
      "경영학",
      "컴퓨터공학",
      "산업공학",
      "디자인학"
    ],
    "roadmap": [
      "좋아하는 앱의 기능을 분석한다.",
      "사용자 문제와 해결안을 문서로 작성한다.",
      "간단한 MVP를 기획하고 개발자와 협업한다.",
      "지표 기반 개선안을 제시해본다."
    ]
  },
  {
    "id": "urban-planner",
    "title": "도시계획가",
    "summary": "교통, 주거, 환경, 지역 특성을 고려해 도시와 지역 공간의 발전 방향을 설계한다.",
    "fieldTags": [
      "environment",
      "law_policy",
      "design"
    ],
    "riasec": {
      "R": 0.35,
      "I": 0.75,
      "A": 0.55,
      "S": 0.65,
      "E": 0.55,
      "C": 0.65
    },
    "values": {
      "income": 0.55,
      "stability": 0.7,
      "creativity": 0.6,
      "socialImpact": 0.9,
      "autonomy": 0.45,
      "growth": 0.75
    },
    "requiredSkills": [
      "공간 분석",
      "정책 이해",
      "자료 조사",
      "GIS 기초",
      "의사소통"
    ],
    "relatedMajors": [
      "도시공학",
      "건축학",
      "행정학",
      "지리학"
    ],
    "roadmap": [
      "지역 문제를 하나 정해 현장 관찰을 한다.",
      "도시계획 사례와 지도를 분석한다.",
      "GIS나 데이터 시각화를 배운다.",
      "지역 개선 제안서를 작성해본다."
    ]
  },
  {
    "id": "architect",
    "title": "건축가",
    "summary": "공간의 기능, 안전, 아름다움, 사용자의 경험을 고려해 건축물을 설계한다.",
    "fieldTags": [
      "design",
      "engineering",
      "environment"
    ],
    "riasec": {
      "R": 0.65,
      "I": 0.65,
      "A": 0.85,
      "S": 0.45,
      "E": 0.45,
      "C": 0.65
    },
    "values": {
      "income": 0.65,
      "stability": 0.55,
      "creativity": 0.9,
      "socialImpact": 0.65,
      "autonomy": 0.65,
      "growth": 0.85
    },
    "requiredSkills": [
      "공간 감각",
      "도면 이해",
      "CAD/BIM",
      "구조 기초",
      "사용자 이해"
    ],
    "relatedMajors": [
      "건축학",
      "건축공학",
      "디자인학"
    ],
    "roadmap": [
      "건축 사례와 공간 구성을 분석한다.",
      "스케치와 CAD 기초를 익힌다.",
      "작은 공간 설계 프로젝트를 수행한다.",
      "도면, 모형, 설명을 포트폴리오로 정리한다."
    ]
  },
  {
    "id": "industrial-designer",
    "title": "제품/산업 디자이너",
    "summary": "사용자의 필요와 제조 가능성을 고려해 제품의 형태, 기능, 사용 경험을 설계한다.",
    "fieldTags": [
      "design",
      "engineering",
      "business"
    ],
    "riasec": {
      "R": 0.65,
      "I": 0.55,
      "A": 0.9,
      "S": 0.45,
      "E": 0.45,
      "C": 0.55
    },
    "values": {
      "income": 0.6,
      "stability": 0.5,
      "creativity": 0.9,
      "socialImpact": 0.55,
      "autonomy": 0.7,
      "growth": 0.8
    },
    "requiredSkills": [
      "스케치",
      "3D 모델링",
      "사용자 조사",
      "재료 이해",
      "프로토타이핑"
    ],
    "relatedMajors": [
      "산업디자인",
      "제품디자인",
      "기계공학"
    ],
    "roadmap": [
      "불편한 제품 하나를 분석한다.",
      "개선 아이디어를 스케치한다.",
      "3D 모델링과 간단한 목업을 만든다.",
      "사용자 피드백을 받아 개선 과정을 기록한다."
    ]
  },
  {
    "id": "journalist",
    "title": "기자/저널리스트",
    "summary": "사회 현장과 사건을 취재하고 사실을 검증해 대중에게 전달한다.",
    "fieldTags": [
      "media",
      "law_policy"
    ],
    "riasec": {
      "R": 0.2,
      "I": 0.75,
      "A": 0.65,
      "S": 0.75,
      "E": 0.55,
      "C": 0.6
    },
    "values": {
      "income": 0.45,
      "stability": 0.45,
      "creativity": 0.65,
      "socialImpact": 0.9,
      "autonomy": 0.55,
      "growth": 0.75
    },
    "requiredSkills": [
      "취재력",
      "글쓰기",
      "비판적 사고",
      "윤리 의식",
      "커뮤니케이션"
    ],
    "relatedMajors": [
      "언론정보학",
      "정치외교학",
      "사회학",
      "국어국문학"
    ],
    "roadmap": [
      "관심 이슈를 정해 자료를 모은다.",
      "인터뷰와 기사 작성 연습을 한다.",
      "학교 신문이나 콘텐츠 동아리에 참여한다.",
      "기사 포트폴리오를 정리한다."
    ]
  },
  {
    "id": "translator-localization",
    "title": "번역/로컬라이제이션 전문가",
    "summary": "언어와 문화 차이를 고려해 콘텐츠, 게임, 서비스가 다른 지역에서도 자연스럽게 전달되도록 만든다.",
    "fieldTags": [
      "media",
      "IT",
      "music_art"
    ],
    "riasec": {
      "R": 0.05,
      "I": 0.55,
      "A": 0.75,
      "S": 0.55,
      "E": 0.35,
      "C": 0.75
    },
    "values": {
      "income": 0.45,
      "stability": 0.45,
      "creativity": 0.7,
      "socialImpact": 0.55,
      "autonomy": 0.75,
      "growth": 0.7
    },
    "requiredSkills": [
      "외국어",
      "문화 이해",
      "글쓰기",
      "세부 검수",
      "콘텐츠 이해"
    ],
    "relatedMajors": [
      "영어영문학",
      "통번역학",
      "미디어학",
      "컴퓨터공학"
    ],
    "roadmap": [
      "관심 콘텐츠를 짧게 번역해본다.",
      "직역과 의역의 차이를 비교한다.",
      "게임이나 앱 문구를 로컬라이징해본다.",
      "번역 샘플과 검수 기준을 포트폴리오화한다."
    ]
  },
  {
    "id": "clinical-lab-scientist",
    "title": "임상병리사/검사 전문가",
    "summary": "혈액, 조직, 체액 등 검체를 분석해 질병 진단과 치료 판단에 필요한 정보를 제공한다.",
    "fieldTags": [
      "health"
    ],
    "riasec": {
      "R": 0.55,
      "I": 0.75,
      "A": 0.15,
      "S": 0.45,
      "E": 0.25,
      "C": 0.85
    },
    "values": {
      "income": 0.45,
      "stability": 0.8,
      "creativity": 0.2,
      "socialImpact": 0.85,
      "autonomy": 0.35,
      "growth": 0.7
    },
    "requiredSkills": [
      "생명과학",
      "검사 장비 이해",
      "정확성",
      "품질관리",
      "윤리 의식"
    ],
    "relatedMajors": [
      "임상병리학",
      "생명과학",
      "보건학"
    ],
    "roadmap": [
      "생명과학과 화학 기초를 정리한다.",
      "검사 과정과 장비 원리를 탐색한다.",
      "실험 보고서 작성 능력을 기른다.",
      "국가고시와 병원 실습 과정을 확인한다."
    ]
  },
  {
    "id": "pharmacist-research",
    "title": "약학 연구/제약 개발자",
    "summary": "의약품의 성분, 효과, 안전성, 생산 과정을 연구하고 개발한다.",
    "fieldTags": [
      "health",
      "engineering"
    ],
    "riasec": {
      "R": 0.35,
      "I": 0.9,
      "A": 0.25,
      "S": 0.45,
      "E": 0.35,
      "C": 0.8
    },
    "values": {
      "income": 0.75,
      "stability": 0.75,
      "creativity": 0.35,
      "socialImpact": 0.9,
      "autonomy": 0.45,
      "growth": 0.9
    },
    "requiredSkills": [
      "화학",
      "생명과학",
      "실험 설계",
      "자료 분석",
      "규제 이해"
    ],
    "relatedMajors": [
      "약학",
      "화학",
      "생명과학",
      "화학공학"
    ],
    "roadmap": [
      "화학과 생명과학 기초를 다진다.",
      "논문이나 의약품 개발 사례를 읽는다.",
      "실험실 안전과 연구 윤리를 학습한다.",
      "연구실 인턴이나 학부 연구 참여를 탐색한다."
    ]
  },
  {
    "id": "startup-founder",
    "title": "스타트업 창업가",
    "summary": "사용자 문제를 발견하고 기술, 사람, 자본을 모아 새로운 사업을 만든다.",
    "fieldTags": [
      "business",
      "IT",
      "design"
    ],
    "riasec": {
      "R": 0.25,
      "I": 0.65,
      "A": 0.75,
      "S": 0.65,
      "E": 0.95,
      "C": 0.45
    },
    "values": {
      "income": 0.9,
      "stability": 0.25,
      "creativity": 0.85,
      "socialImpact": 0.6,
      "autonomy": 0.95,
      "growth": 0.95
    },
    "requiredSkills": [
      "문제 발견",
      "비즈니스 모델",
      "실행력",
      "영업/설득",
      "팀 빌딩"
    ],
    "relatedMajors": [
      "경영학",
      "컴퓨터공학",
      "디자인학",
      "산업공학"
    ],
    "roadmap": [
      "불편한 문제를 10개 이상 관찰한다.",
      "가장 작은 해결책을 만들어 테스트한다.",
      "사용자 인터뷰와 시장 조사를 진행한다.",
      "창업 동아리, 해커톤, 정부지원사업을 활용한다."
    ]
  },
  {
    "id": "public-administrator",
    "title": "공무원/공공행정 담당자",
    "summary": "국가와 지방자치단체의 정책 집행, 민원 처리, 행정 서비스 개선을 담당한다.",
    "fieldTags": [
      "law_policy",
      "education",
      "environment"
    ],
    "riasec": {
      "R": 0.1,
      "I": 0.55,
      "A": 0.25,
      "S": 0.75,
      "E": 0.45,
      "C": 0.9
    },
    "values": {
      "income": 0.45,
      "stability": 0.95,
      "creativity": 0.25,
      "socialImpact": 0.85,
      "autonomy": 0.35,
      "growth": 0.65
    },
    "requiredSkills": [
      "법규 이해",
      "문서 작성",
      "민원 소통",
      "정확성",
      "공공성"
    ],
    "relatedMajors": [
      "행정학",
      "법학",
      "정치외교학",
      "사회학"
    ],
    "roadmap": [
      "행정학과 법학 기초를 탐색한다.",
      "공공기관의 업무와 정책 사례를 조사한다.",
      "문서 작성과 자료 정리 능력을 기른다.",
      "공무원 시험 또는 공공기관 채용 경로를 확인한다."
    ]
  },
  {
    "id": "research-scientist",
    "title": "연구원/과학자",
    "summary": "자연, 기술, 사회 현상에 대한 질문을 세우고 실험과 분석을 통해 새로운 지식을 만든다.",
    "fieldTags": [
      "IT",
      "health",
      "engineering",
      "environment"
    ],
    "riasec": {
      "R": 0.35,
      "I": 0.95,
      "A": 0.35,
      "S": 0.35,
      "E": 0.25,
      "C": 0.65
    },
    "values": {
      "income": 0.55,
      "stability": 0.55,
      "creativity": 0.6,
      "socialImpact": 0.75,
      "autonomy": 0.65,
      "growth": 0.95
    },
    "requiredSkills": [
      "연구 설계",
      "통계/분석",
      "논문 읽기",
      "실험 또는 모델링",
      "끈기"
    ],
    "relatedMajors": [
      "자연과학",
      "공학",
      "의생명과학",
      "통계학"
    ],
    "roadmap": [
      "관심 주제의 입문 논문을 읽어본다.",
      "작은 실험이나 데이터 분석을 설계한다.",
      "결과를 보고서나 포스터로 정리한다.",
      "연구실 인턴이나 학부 연구생을 탐색한다."
    ]
  },
  {
    "id": "hr-specialist",
    "title": "인사/조직문화 담당자",
    "summary": "채용, 평가, 교육, 조직문화 개선을 통해 사람들이 더 잘 일할 수 있는 환경을 만든다.",
    "fieldTags": [
      "business",
      "education"
    ],
    "riasec": {
      "R": 0.05,
      "I": 0.55,
      "A": 0.45,
      "S": 0.85,
      "E": 0.65,
      "C": 0.65
    },
    "values": {
      "income": 0.6,
      "stability": 0.65,
      "creativity": 0.5,
      "socialImpact": 0.75,
      "autonomy": 0.45,
      "growth": 0.75
    },
    "requiredSkills": [
      "커뮤니케이션",
      "조직 이해",
      "교육 기획",
      "데이터 관리",
      "갈등 조정"
    ],
    "relatedMajors": [
      "경영학",
      "심리학",
      "교육학",
      "사회학"
    ],
    "roadmap": [
      "조직문화와 채용 사례를 분석한다.",
      "교육 프로그램 기획안을 작성해본다.",
      "설문 결과를 분석해 개선안을 만든다.",
      "인사 관련 인턴십이나 동아리 운영 경험을 쌓는다."
    ]
  },
  {
    "id": "technical-writer",
    "title": "테크니컬 라이터",
    "summary": "복잡한 기술 내용을 사용자가 이해하기 쉬운 문서, 매뉴얼, 가이드로 정리한다.",
    "fieldTags": [
      "IT",
      "education",
      "media"
    ],
    "riasec": {
      "R": 0.1,
      "I": 0.75,
      "A": 0.65,
      "S": 0.6,
      "E": 0.25,
      "C": 0.85
    },
    "values": {
      "income": 0.5,
      "stability": 0.6,
      "creativity": 0.6,
      "socialImpact": 0.65,
      "autonomy": 0.7,
      "growth": 0.75
    },
    "requiredSkills": [
      "기술 이해",
      "문서화",
      "구조화된 글쓰기",
      "사용자 관점",
      "정확성"
    ],
    "relatedMajors": [
      "컴퓨터공학",
      "국어국문학",
      "미디어학",
      "교육학"
    ],
    "roadmap": [
      "개발 문서나 제품 매뉴얼을 분석한다.",
      "간단한 프로그램 사용법을 문서로 작성한다.",
      "스크린샷, 예시, FAQ를 포함해 가이드를 만든다.",
      "GitHub 또는 블로그에 문서 샘플을 정리한다."
    ]
  }
] satisfies Job[];
