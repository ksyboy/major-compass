import type { Question } from "@/types";

export const questions = [
  {
    "id": "Q001",
    "text": "손으로 직접 만들거나 조립하는 활동을 할 때 집중이 잘 된다.",
    "dimension": "R",
    "subDimension": "making",
    "fieldTags": [
      "engineering",
      "design",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q002",
    "text": "이론 설명만 듣기보다 실제 장비나 도구를 다뤄보는 편이 더 재미있다.",
    "dimension": "R",
    "subDimension": "tools",
    "fieldTags": [
      "engineering",
      "health",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q003",
    "text": "눈에 보이는 결과물을 완성하는 과제가 나에게 잘 맞는다.",
    "dimension": "R",
    "subDimension": "visible_output",
    "fieldTags": [
      "engineering",
      "design",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q004",
    "text": "문제를 해결할 때 직접 실험하거나 시도해보는 방식을 선호한다.",
    "dimension": "R",
    "subDimension": "experiment",
    "fieldTags": [
      "engineering",
      "health",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q005",
    "text": "컴퓨터나 기계가 어떤 원리로 움직이는지 궁금해질 때가 많다.",
    "dimension": "R",
    "subDimension": "mechanism",
    "fieldTags": [
      "IT",
      "engineering"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q006",
    "text": "현장에 나가 관찰하고 자료를 모으는 활동이 흥미롭다.",
    "dimension": "R",
    "subDimension": "fieldwork",
    "fieldTags": [
      "environment",
      "health",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q007",
    "text": "오래 앉아서 글만 쓰는 일보다 몸을 움직이며 해결하는 일이 좋다.",
    "dimension": "R",
    "subDimension": "active_work",
    "fieldTags": [
      "engineering",
      "health",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q008",
    "text": "제품이나 시스템을 개선하기 위해 구조를 바꿔보는 일이 재미있다.",
    "dimension": "R",
    "subDimension": "improvement",
    "fieldTags": [
      "engineering",
      "design",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q009",
    "text": "실습 중심 수업에서 내용을 더 잘 이해하는 편이다.",
    "dimension": "R",
    "subDimension": "practice_learning",
    "fieldTags": [
      "engineering",
      "health",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q010",
    "text": "복잡한 설명보다 실제 예시나 시제품을 보면 이해가 빠르다.",
    "dimension": "R",
    "subDimension": "prototype_learning",
    "fieldTags": [
      "design",
      "engineering",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q011",
    "text": "복잡한 문제의 원인을 끝까지 분석하는 과정이 흥미롭다.",
    "dimension": "I",
    "subDimension": "analysis",
    "fieldTags": [
      "IT",
      "business",
      "engineering"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q012",
    "text": "새로운 개념을 배울 때 “왜 그런가?”를 자주 생각한다.",
    "dimension": "I",
    "subDimension": "why_thinking",
    "fieldTags": [
      "education",
      "IT",
      "science"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q013",
    "text": "숫자, 자료, 근거를 바탕으로 판단하는 편이 편하다.",
    "dimension": "I",
    "subDimension": "evidence",
    "fieldTags": [
      "business",
      "IT",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q014",
    "text": "정답이 바로 나오지 않는 문제를 오래 고민하는 것을 크게 싫어하지 않는다.",
    "dimension": "I",
    "subDimension": "persistence",
    "fieldTags": [
      "IT",
      "engineering",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q015",
    "text": "자료를 비교하고 패턴을 찾아내는 활동이 재미있다.",
    "dimension": "I",
    "subDimension": "pattern",
    "fieldTags": [
      "IT",
      "business",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q016",
    "text": "사람들의 행동이나 사회 현상 뒤의 원리를 알고 싶다.",
    "dimension": "I",
    "subDimension": "social_inquiry",
    "fieldTags": [
      "business",
      "education",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q017",
    "text": "새로운 기술이나 연구 결과를 찾아보는 일이 흥미롭다.",
    "dimension": "I",
    "subDimension": "research_interest",
    "fieldTags": [
      "IT",
      "health",
      "engineering"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q018",
    "text": "어떤 주장에 대해 근거가 충분한지 따져보는 편이다.",
    "dimension": "I",
    "subDimension": "critical_thinking",
    "fieldTags": [
      "law_policy",
      "business",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q019",
    "text": "가설을 세우고 데이터를 통해 확인하는 방식이 나에게 잘 맞는다.",
    "dimension": "I",
    "subDimension": "hypothesis",
    "fieldTags": [
      "IT",
      "health",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q020",
    "text": "문제를 작게 나누어 단계적으로 해결하는 편이다.",
    "dimension": "I",
    "subDimension": "decomposition",
    "fieldTags": [
      "IT",
      "engineering",
      "business"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q021",
    "text": "정해진 방식보다 나만의 방식으로 표현하는 과제가 더 끌린다.",
    "dimension": "A",
    "subDimension": "self_expression",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q022",
    "text": "색, 소리, 화면 구성처럼 감각적인 요소에 민감한 편이다.",
    "dimension": "A",
    "subDimension": "sensory",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q023",
    "text": "새로운 아이디어를 떠올리고 구체화하는 과정이 즐겁다.",
    "dimension": "A",
    "subDimension": "ideation",
    "fieldTags": [
      "design",
      "media",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q024",
    "text": "규칙이 너무 엄격한 일보다 자유롭게 시도할 수 있는 일이 좋다.",
    "dimension": "A",
    "subDimension": "freedom",
    "fieldTags": [
      "music_art",
      "design",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q025",
    "text": "사람들에게 인상적인 경험이나 이야기를 전달하는 일에 관심이 있다.",
    "dimension": "A",
    "subDimension": "storytelling",
    "fieldTags": [
      "media",
      "education",
      "music_art"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q026",
    "text": "기능만 좋은 것보다 보기 좋고 사용하기 좋은 결과물이 중요하다고 느낀다.",
    "dimension": "A",
    "subDimension": "aesthetics",
    "fieldTags": [
      "design",
      "IT",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q027",
    "text": "일상에서 불편하거나 밋밋한 것을 새롭게 바꾸고 싶다는 생각을 한다.",
    "dimension": "A",
    "subDimension": "creative_change",
    "fieldTags": [
      "design",
      "media",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q028",
    "text": "글, 영상, 음악, 이미지 등으로 생각을 표현하는 활동이 익숙하다.",
    "dimension": "A",
    "subDimension": "media_expression",
    "fieldTags": [
      "media",
      "music_art",
      "design"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q029",
    "text": "다른 사람과 비슷한 결과보다 독창적인 결과를 내고 싶다.",
    "dimension": "A",
    "subDimension": "originality",
    "fieldTags": [
      "music_art",
      "design",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q030",
    "text": "감정과 분위기를 잘 전달하는 결과물을 만드는 데 흥미가 있다.",
    "dimension": "A",
    "subDimension": "mood",
    "fieldTags": [
      "music_art",
      "media",
      "design"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q031",
    "text": "다른 사람이 어려워하는 내용을 이해하도록 도와줄 때 보람을 느낀다.",
    "dimension": "S",
    "subDimension": "help_teach",
    "fieldTags": [
      "education",
      "health",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q032",
    "text": "팀원이 힘들어할 때 먼저 상태를 살피는 편이다.",
    "dimension": "S",
    "subDimension": "empathy",
    "fieldTags": [
      "education",
      "health",
      "business"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q033",
    "text": "사람들과 대화하며 문제를 해결하는 일이 나에게 잘 맞는다.",
    "dimension": "S",
    "subDimension": "conversation_problem_solving",
    "fieldTags": [
      "education",
      "business",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q034",
    "text": "누군가의 성장이나 변화에 기여하는 일을 하고 싶다.",
    "dimension": "S",
    "subDimension": "growth_support",
    "fieldTags": [
      "education",
      "health",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q035",
    "text": "혼자 완성하는 일보다 함께 협력해 결과를 만드는 과정이 좋다.",
    "dimension": "S",
    "subDimension": "team_support",
    "fieldTags": [
      "education",
      "business",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q036",
    "text": "상대방의 입장을 이해하고 조율하는 능력이 중요하다고 생각한다.",
    "dimension": "S",
    "subDimension": "mediation",
    "fieldTags": [
      "law_policy",
      "education",
      "business"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q037",
    "text": "사회적으로 도움이 되는 일을 직업 선택에서 중요하게 생각한다.",
    "dimension": "S",
    "subDimension": "public_good",
    "fieldTags": [
      "environment",
      "health",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q038",
    "text": "사람의 감정이나 관계 문제를 다루는 주제에 관심이 있다.",
    "dimension": "S",
    "subDimension": "relationship",
    "fieldTags": [
      "education",
      "health",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q039",
    "text": "정보를 전달할 때 상대방의 수준에 맞게 설명하려고 노력한다.",
    "dimension": "S",
    "subDimension": "adapt_explain",
    "fieldTags": [
      "education",
      "business",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q040",
    "text": "내가 한 일이 다른 사람에게 직접적인 도움을 주는 직업에 끌린다.",
    "dimension": "S",
    "subDimension": "direct_help",
    "fieldTags": [
      "health",
      "education",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q041",
    "text": "새로운 프로젝트를 먼저 제안하거나 이끌어보고 싶은 마음이 있다.",
    "dimension": "E",
    "subDimension": "initiative",
    "fieldTags": [
      "business",
      "media",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q042",
    "text": "사람들을 설득해 하나의 방향으로 움직이게 하는 일이 흥미롭다.",
    "dimension": "E",
    "subDimension": "persuasion",
    "fieldTags": [
      "business",
      "law_policy",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q043",
    "text": "결과가 불확실해도 가능성이 크다면 도전해보고 싶다.",
    "dimension": "E",
    "subDimension": "risk",
    "fieldTags": [
      "business",
      "IT",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q044",
    "text": "아이디어를 실제 서비스나 사업으로 연결하는 과정에 관심이 있다.",
    "dimension": "E",
    "subDimension": "venture",
    "fieldTags": [
      "business",
      "IT",
      "design"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q045",
    "text": "발표나 토론에서 내 의견을 적극적으로 말하는 편이다.",
    "dimension": "E",
    "subDimension": "presentation",
    "fieldTags": [
      "business",
      "law_policy",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q046",
    "text": "목표를 정하고 사람과 자원을 모아 실행하는 일이 잘 맞는다.",
    "dimension": "E",
    "subDimension": "organizing",
    "fieldTags": [
      "business",
      "media",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q047",
    "text": "경쟁 상황에서 더 동기부여가 되는 편이다.",
    "dimension": "E",
    "subDimension": "competition",
    "fieldTags": [
      "business",
      "law_policy",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q048",
    "text": "문제를 해결할 때 영향력과 실행 속도가 중요하다고 생각한다.",
    "dimension": "E",
    "subDimension": "impact_speed",
    "fieldTags": [
      "business",
      "IT",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q049",
    "text": "기획한 일을 실제 성과로 만드는 과정에 강한 흥미가 있다.",
    "dimension": "E",
    "subDimension": "execution",
    "fieldTags": [
      "business",
      "media",
      "design"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q050",
    "text": "조직이나 시장의 흐름을 읽고 전략을 세우는 일이 재미있어 보인다.",
    "dimension": "E",
    "subDimension": "strategy",
    "fieldTags": [
      "business",
      "law_policy",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q051",
    "text": "자료를 체계적으로 정리하고 관리하는 일이 편하다.",
    "dimension": "C",
    "subDimension": "organize_data",
    "fieldTags": [
      "business",
      "IT",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q052",
    "text": "일을 시작하기 전에 기준과 절차가 명확할수록 안정감을 느낀다.",
    "dimension": "C",
    "subDimension": "procedure",
    "fieldTags": [
      "business",
      "law_policy",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q053",
    "text": "세부 사항을 꼼꼼하게 확인하는 편이다.",
    "dimension": "C",
    "subDimension": "detail",
    "fieldTags": [
      "business",
      "health",
      "engineering"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q054",
    "text": "마감일과 체크리스트를 지키며 일하는 방식이 잘 맞는다.",
    "dimension": "C",
    "subDimension": "deadline",
    "fieldTags": [
      "business",
      "education",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q055",
    "text": "반복되는 업무라도 정확성이 중요하다면 집중할 수 있다.",
    "dimension": "C",
    "subDimension": "accuracy",
    "fieldTags": [
      "business",
      "health",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q056",
    "text": "정보를 분류하고 표로 정리하면 마음이 편해진다.",
    "dimension": "C",
    "subDimension": "classification",
    "fieldTags": [
      "IT",
      "business",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q057",
    "text": "큰 그림보다 구체적인 실행 절차를 세우는 일이 더 쉽다.",
    "dimension": "C",
    "subDimension": "planning_detail",
    "fieldTags": [
      "business",
      "engineering",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q058",
    "text": "규칙과 기준이 있는 환경에서 실수를 줄이는 것이 중요하다고 생각한다.",
    "dimension": "C",
    "subDimension": "rules",
    "fieldTags": [
      "law_policy",
      "health",
      "business"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q059",
    "text": "데이터나 문서를 깔끔하게 관리하는 사람이라는 말을 들은 적이 있다.",
    "dimension": "C",
    "subDimension": "document_control",
    "fieldTags": [
      "business",
      "law_policy",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q060",
    "text": "예상 가능한 일정과 안정적인 업무 흐름을 선호한다.",
    "dimension": "C",
    "subDimension": "stability_workflow",
    "fieldTags": [
      "business",
      "health",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q061",
    "text": "직업을 선택할 때 높은 수입 가능성이 중요하다.",
    "dimension": "value",
    "subDimension": "income",
    "fieldTags": [
      "business",
      "IT"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q062",
    "text": "안정적인 고용과 예측 가능한 생활이 중요하다.",
    "dimension": "value",
    "subDimension": "stability",
    "fieldTags": [
      "law_policy",
      "health",
      "education"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q063",
    "text": "새로운 것을 만들어내는 자유가 직업 만족도에 중요하다.",
    "dimension": "value",
    "subDimension": "creativity",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q064",
    "text": "내 일이 사회 문제 해결에 기여했으면 좋겠다.",
    "dimension": "value",
    "subDimension": "socialImpact",
    "fieldTags": [
      "environment",
      "education",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q065",
    "text": "스스로 일정을 조절할 수 있는 직업에 끌린다.",
    "dimension": "value",
    "subDimension": "autonomy",
    "fieldTags": [
      "IT",
      "design",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q066",
    "text": "계속 배우고 성장할 수 있는 직업이 좋다.",
    "dimension": "value",
    "subDimension": "growth",
    "fieldTags": [
      "IT",
      "health",
      "engineering"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q067",
    "text": "수입이 조금 낮더라도 의미 있는 일을 하고 싶다.",
    "dimension": "value",
    "subDimension": "socialImpact",
    "fieldTags": [
      "education",
      "environment",
      "health"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q068",
    "text": "성과에 따라 보상이 달라지는 구조가 동기부여가 된다.",
    "dimension": "value",
    "subDimension": "income",
    "fieldTags": [
      "business",
      "media"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q069",
    "text": "불확실성이 큰 직업보다 안정적인 진로가 더 안심된다.",
    "dimension": "value",
    "subDimension": "stability",
    "fieldTags": [
      "law_policy",
      "health",
      "education"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q070",
    "text": "내 생각과 감각을 결과물에 반영할 수 있어야 만족한다.",
    "dimension": "value",
    "subDimension": "creativity",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q071",
    "text": "상사가 세세하게 지시하는 환경은 답답하게 느껴진다.",
    "dimension": "value",
    "subDimension": "autonomy",
    "fieldTags": [
      "IT",
      "design",
      "business"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q072",
    "text": "빠르게 변화하는 분야에서 새로운 기술을 익히는 것이 즐겁다.",
    "dimension": "value",
    "subDimension": "growth",
    "fieldTags": [
      "IT",
      "engineering",
      "media"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q073",
    "text": "직업을 통해 많은 사람에게 긍정적인 영향을 주고 싶다.",
    "dimension": "value",
    "subDimension": "socialImpact",
    "fieldTags": [
      "education",
      "health",
      "environment"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q074",
    "text": "위험을 감수하더라도 큰 성과를 낼 수 있는 일이 끌린다.",
    "dimension": "value",
    "subDimension": "income",
    "fieldTags": [
      "business",
      "IT"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q075",
    "text": "정년이나 장기 근속 가능성도 직업 선택에서 중요하다.",
    "dimension": "value",
    "subDimension": "stability",
    "fieldTags": [
      "law_policy",
      "education",
      "health"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q076",
    "text": "직업에서 나만의 스타일을 인정받는 것이 중요하다.",
    "dimension": "value",
    "subDimension": "creativity",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q077",
    "text": "혼자 판단하고 책임지는 권한이 많은 일을 선호한다.",
    "dimension": "value",
    "subDimension": "autonomy",
    "fieldTags": [
      "business",
      "IT",
      "law_policy"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q078",
    "text": "전문성이 쌓일수록 더 어려운 문제를 맡는 직업이 좋다.",
    "dimension": "value",
    "subDimension": "growth",
    "fieldTags": [
      "IT",
      "health",
      "engineering"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q079",
    "text": "사회적 평판보다 실제로 사람들에게 도움이 되는지가 더 중요하다.",
    "dimension": "value",
    "subDimension": "socialImpact",
    "fieldTags": [
      "health",
      "education",
      "environment"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q080",
    "text": "경제적 보상이 분명한 분야를 먼저 탐색하고 싶다.",
    "dimension": "value",
    "subDimension": "income",
    "fieldTags": [
      "business",
      "IT"
    ],
    "direction": 1,
    "weight": 0.8,
    "isReverse": false
  },
  {
    "id": "Q081",
    "text": "조직 문화가 안정적이고 예측 가능하면 더 오래 일할 수 있다.",
    "dimension": "value",
    "subDimension": "stability",
    "fieldTags": [
      "business",
      "law_policy",
      "health"
    ],
    "direction": 1,
    "weight": 0.7,
    "isReverse": false
  },
  {
    "id": "Q082",
    "text": "정답이 정해진 일보다 해석과 창작의 여지가 있는 일이 좋다.",
    "dimension": "value",
    "subDimension": "creativity",
    "fieldTags": [
      "design",
      "music_art",
      "media"
    ],
    "direction": 1,
    "weight": 0.7,
    "isReverse": false
  },
  {
    "id": "Q083",
    "text": "자율성이 낮아도 체계가 분명하면 일하기 편하다.",
    "dimension": "value",
    "subDimension": "autonomy",
    "fieldTags": [
      "business",
      "law_policy"
    ],
    "direction": -1,
    "weight": 0.7,
    "isReverse": true
  },
  {
    "id": "Q084",
    "text": "대학 생활 동안 꾸준히 실력을 쌓아 전문가가 되고 싶다.",
    "dimension": "value",
    "subDimension": "growth",
    "fieldTags": [
      "IT",
      "health",
      "education"
    ],
    "direction": 1,
    "weight": 0.7,
    "isReverse": false
  },
  {
    "id": "Q085",
    "text": "여러 사람의 의견을 모아 하나의 결과로 정리하는 일이 어렵지 않다.",
    "dimension": "work_style",
    "subDimension": "collaboration",
    "fieldTags": [
      "business",
      "education",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q086",
    "text": "팀에서 자연스럽게 방향을 정하거나 역할을 나누는 편이다.",
    "dimension": "work_style",
    "subDimension": "leadership",
    "fieldTags": [
      "business",
      "media",
      "law_policy"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q087",
    "text": "작은 오류를 찾아 고치는 일에 비교적 강하다.",
    "dimension": "work_style",
    "subDimension": "detail",
    "fieldTags": [
      "IT",
      "health",
      "business"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q088",
    "text": "처음 만난 사람에게도 필요한 내용을 설명하는 것이 크게 부담스럽지 않다.",
    "dimension": "work_style",
    "subDimension": "communication",
    "fieldTags": [
      "education",
      "business",
      "health"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q089",
    "text": "문제를 해결할 때 감보다 자료 분석을 먼저 해보고 싶다.",
    "dimension": "work_style",
    "subDimension": "analysis",
    "fieldTags": [
      "IT",
      "business",
      "environment"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q090",
    "text": "아이디어를 말로만 설명하기보다 직접 시안이나 결과물로 만들어보고 싶다.",
    "dimension": "work_style",
    "subDimension": "making",
    "fieldTags": [
      "design",
      "engineering",
      "media"
    ],
    "direction": 1,
    "weight": 1.0,
    "isReverse": false
  },
  {
    "id": "Q091",
    "text": "혼자 오래 집중하는 일보다 사람들과 논의하는 일이 더 힘을 준다.",
    "dimension": "work_style",
    "subDimension": "collaboration",
    "fieldTags": [
      "education",
      "business",
      "media"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q092",
    "text": "갈등 상황에서 중간 역할을 맡아 정리해본 경험이 있다.",
    "dimension": "work_style",
    "subDimension": "leadership",
    "fieldTags": [
      "law_policy",
      "education",
      "business"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q093",
    "text": "문서, 코드, 표에서 틀린 부분을 찾아내는 편이다.",
    "dimension": "work_style",
    "subDimension": "detail",
    "fieldTags": [
      "IT",
      "business",
      "law_policy"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q094",
    "text": "상대방을 설득하기 위해 예시나 근거를 바꿔가며 설명할 수 있다.",
    "dimension": "work_style",
    "subDimension": "communication",
    "fieldTags": [
      "business",
      "education",
      "law_policy"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q095",
    "text": "결정을 내릴 때 장단점을 표로 비교하는 방식이 편하다.",
    "dimension": "work_style",
    "subDimension": "analysis",
    "fieldTags": [
      "business",
      "IT",
      "law_policy"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q096",
    "text": "머릿속 아이디어를 빠르게 시제품이나 초안으로 옮기는 편이다.",
    "dimension": "work_style",
    "subDimension": "making",
    "fieldTags": [
      "design",
      "IT",
      "media"
    ],
    "direction": 1,
    "weight": 0.9,
    "isReverse": false
  },
  {
    "id": "Q097",
    "text": "팀 프로젝트에서 역할 조율보다 내 부분을 혼자 끝내는 것이 더 편하다.",
    "dimension": "work_style",
    "subDimension": "collaboration",
    "fieldTags": [
      "IT",
      "design"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  },
  {
    "id": "Q098",
    "text": "앞에서 이끌기보다 조용히 맡은 일을 수행하는 편이다.",
    "dimension": "work_style",
    "subDimension": "leadership",
    "fieldTags": [
      "business",
      "education"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  },
  {
    "id": "Q099",
    "text": "완성도가 조금 낮아도 빠르게 시도해보는 편이 낫다고 생각한다.",
    "dimension": "work_style",
    "subDimension": "detail",
    "fieldTags": [
      "media",
      "business",
      "IT"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  },
  {
    "id": "Q100",
    "text": "긴 글이나 말로 설명하는 일은 가능하면 피하고 싶다.",
    "dimension": "work_style",
    "subDimension": "communication",
    "fieldTags": [
      "engineering",
      "IT"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  },
  {
    "id": "Q101",
    "text": "직관적으로 선택한 뒤 나중에 이유를 정리하는 편이다.",
    "dimension": "work_style",
    "subDimension": "analysis",
    "fieldTags": [
      "design",
      "music_art"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  },
  {
    "id": "Q102",
    "text": "기획이나 분석은 좋지만 직접 만드는 과정은 부담스럽다.",
    "dimension": "work_style",
    "subDimension": "making",
    "fieldTags": [
      "business",
      "law_policy"
    ],
    "direction": -1,
    "weight": 0.8,
    "isReverse": true
  }
] satisfies Question[];
