import type { PROJECTS_MENU } from '../types/projectsType';

export const PROJECTS_DATA: PROJECTS_MENU[] = [
  {
    id: 'portfolio',
    title: '웹 포트폴리오',
    subTitle: '',
    thumbnail: '/images/webPortfolioMain.svg',
    period: '2026.03.13~2026.04.10',

    team: '개인 프로젝트',

    demo: 'https://yuhana-portfolio.vercel.app/',
    github: 'https://github.com/yuleehana/yuhana_Portfolio.git',

    shortDescription: '',

    skills: [
      {
        name: 'React',
        img: '/icon/reactLogo.svg',
      },
      {
        name: 'Vite',
        img: '/icon/viteLogo.png',
      },
      {
        name: 'TypeScript',
        img: '/icon/typescriptLogo.svg',
      },
      {
        name: 'SCSS',
        img: '/icon/scssLogo.png',
      },
      {
        name: 'Axios',
        img: '/icon/axiosLogo.png',
      },
      {
        name: 'Github',
        img: '/icon/githubLogo.svg',
      },
      {
        name: 'Vercel',
        img: '/icon/vercelLogo.svg',
      },
      {
        name: 'Figma',
        img: 'icon/figmaLogo.svg',
      },
    ],

    detail: {
      description: [
        `프론트엔드 개발자로서의 역량과 프로젝트 경험을 효과적으로 전달하기 위해 
    사용자 경험 중심으로 설계·구현한 개인 포트폴리오 웹사이트입니다.`,
        `단순 결과물 나열이 아닌, 프로젝트 탐색 흐름·정보 전달 구조·상호작용 경험을 중심으로 
    UI/UX 구조를 설계하고, 컴포넌트 재사용성과 상태 관리 구조를 고려한 프론트엔드 아키텍처를 함께 구현했습니다.`,
      ],

      keyFeatures: [
        {
          title: '프로젝트 탐색 UX 및 모달 인터랙션 설계',
          column: [
            {
              subTitle: '프로젝트 카드 기반 리스트 UI 구현',
              desc: [
                'map 기반 데이터 렌더링으로 확장 가능한 구조 설계',
                '프로젝트별 데이터 분리로 유지보수 용이성 확보',
              ],
            },
            {
              subTitle: '모달 기반 상세 정보 제공 UX',
              desc: [
                '선택한 프로젝트만 열리는 구조로 상태 분리 관리',
                '배경 스크롤 방지 및 모달 내부 스크롤 처리로 집중도 향상',
              ],
            },
            {
              subTitle: '사용자 흐름을 고려한 정보 계층 구조 설계',
              desc: ['Overview → Detail → Problem/Solution 구조로 정보 전달 흐름 구성'],
            },
          ],
        },
        {
          title: '컴포넌트 재사용성과 UI 구조 설계',
          column: [
            {
              subTitle: '공통 컴포넌트 분리 및 재사용 구조 설계',
              desc: [
                'SectionTitle, SkillCard, ProjectCard 등 UI 단위 컴포넌트화',
                'props 기반 variant 패턴으로 다양한 UI 대응',
              ],
            },
            {
              subTitle: 'map 기반 데이터 렌더링 구조',
              desc: [
                '스킬/프로젝트 데이터를 객체로 관리하여 UI와 로직 분리',
                '확장 시 코드 수정 최소화',
              ],
            },
            {
              subTitle: '스타일 모듈화 (SCSS Module)',
              desc: ['컴포넌트 단위 스타일 분리로 충돌 방지', 'variant 기반 스타일 확장 구조 설계'],
            },
          ],
        },
        {
          title: '사용자 인터랙션 및 상태 관리',
          column: [
            {
              subTitle: '햄버거 메뉴 인터랙션 구현',
              desc: [
                '클릭 시 X 형태로 변환되는 애니메이션 구현',
                'Sidebar와 상태 연동하여 UI 일관성 유지',
              ],
            },
            {
              subTitle: '폼 입력 검증 및 이메일 전송 기능',
              desc: [
                '이름/이메일 유효성 검사 로직 구현',
                'EmailJS를 활용한 이메일 전송 기능 구현',
                '에러/성공 상태 UI 피드백 처리',
              ],
            },
            {
              subTitle: '로딩 및 상태 처리 UX 개선',
              desc: ['메일 전송 시 로딩 상태 표시', '사용자 행동에 대한 즉각적인 피드백 제공'],
            },
          ],
        },
        {
          title: '반응형 UI 및 디자인 시스템',
          column: [
            {
              subTitle: 'Clamp 기반 반응형 타이포그래피/레이아웃',
              desc: ['다양한 해상도에서 일관된 UI 유지'],
            },
            {
              subTitle: '아이콘 및 이미지 비율 정규화',
              desc: [
                '아이콘 wrapper + object-fit을 활용한 비율 통일',
                '해상도 및 이미지 크기 차이에 따른 UI 깨짐 방지',
              ],
            },
            {
              subTitle: '디자인 토큰 분리',
              desc: ['color, typography, layout 등 스타일 시스템화'],
            },
          ],
        },
        {
          title: '배포 및 환경 관리',
          column: [
            {
              subTitle: 'Vercel을 통한 배포 자동화',
              desc: ['Git 연동 기반 CI/CD 환경 구축'],
            },
            {
              subTitle: '환경 변수 관리',
              desc: ['.env 파일을 통한 API 키 관리', '보안 이슈 방지를 위한 Git 관리 전략 적용'],
            },
            {
              subTitle: '빌드 및 패키지 관리 이슈 해결 경험',
              desc: [
                '패키지 매니저 충돌(package-lock / yarn) 문제 해결',
                'Vercel 빌드 에러 디버깅 경험',
              ],
            },
          ],
        },
      ],
      problems: [
        '프로젝트 클릭 시 모든 모달이 동시에 열리는 상태 관리 문제',
        '모달 오픈 시 배경 스크롤이 함께 움직이는 UX 문제',
        '이미지 및 아이콘 비율이 일관되지 않아 UI 완성도 저하',
        '이메일 전송 시 발신자 정보가 명확히 전달되지 않는 문제',
        '패키지 매니저 혼용으로 인한 빌드 경고 발생',
        '외부 라이브러리(Analytics 등) 적용 시 환경 불일치 문제',
      ],

      solutions: [
        '선택된 프로젝트 ID 기반으로 모달 상태를 분리 관리하여 단일 모달만 열리도록 개선',
        'body overflow 제어를 통해 모달 오픈 시 배경 스크롤 차단',
        '이미지 wrapper + object-fit 구조로 아이콘 비율 통일',
        'EmailJS 템플릿 변수 매핑 수정으로 발신자 정보 정상 출력',
        '패키지 매니저 단일화 및 lock 파일 정리로 빌드 환경 안정화',
        '프로젝트 환경(Vite vs Next)에 맞는 라이브러리 선택으로 빌드 에러 해결',
      ],

      results: [
        '단순 UI 구현을 넘어 상태 관리와 UX 흐름 설계 경험 확보',
        '컴포넌트 재사용성과 확장성을 고려한 구조 설계 역량 향상',
        '실제 사용자 경험(스크롤, 인터랙션, 피드백)을 고려한 UI 개선 경험',
        '배포 및 빌드 과정에서 발생하는 문제를 직접 해결하며 실무 대응력 강화',
        '프론트엔드 개발에서 “구현”뿐 아니라 “구조 설계”의 중요성에 대한 이해도 향상',
      ],

      images: [
        '/images/webPortfolioDetail1.svg',
        '/images/webPortfolioDetail2.svg',
        '/images/webPortfolioDetail3.svg',
        '/images/webPortfolioDetail4.svg',
      ],
    },
  },

  {
    id: 'disney-renewal',
    title: 'Disney Plus',
    subTitle: '안심 육아를 위한 “우리  아이 맞춤 보호” 리뉴얼 프로젝트',
    thumbnail: '/images/disneyMain.png',
    period: '2025.12.2~2025.12.30',

    team: '팀 프로젝트',

    github: 'https://github.com/kwonhana/disney-plus.git',

    shortDescription:
      '부모 통제 UX 개선과 키즈 모드 자동화를 중심으로 OTT UX 구조를 재설계한 프로젝트',

    skills: [
      {
        name: 'React',
        img: '/icon/reactLogo.svg',
      },
      {
        name: 'TypeScript',
        img: '/icon/typescriptLogo.svg',
      },
      {
        name: 'SCSS',
        img: '/icon/scssLogo.png',
      },
      {
        name: 'Zustad',
        img: '/icon/zustandLogo.png',
      },
      {
        name: 'API',
        img: '',
      },
      {
        name: 'firebase',
        img: '/icon/firebaseLogo.png',
      },
      {
        name: 'Axios',
        img: '/icon/axiosLogo.png',
      },
      {
        name: 'Github',
        img: '/icon/githubLogo.svg',
      },
    ],

    detail: {
      description: [
        `가족 단위 사용자가 많은 Disney Plus OTT 서비스에서 
                    부모의 시청 통제 어려움과 UX 불일치 문제를 해결하기 위해 
                    ‘안심 육아’ 관점에서 UX 구조를 재설계한 프로젝트입니다.`,
        `단순 UI 개선이 아닌, 부모/아이 사용자 분리와 연령 기반 콘텐츠 노출 제어 멀티 프로필/멀티 계정 환경에서의 상태 안정성 확보를 중심으로 UX 구조 + 프론트엔드 상태 관리 아키텍처를 함께 설계·구현했습니다.`,
      ],

      keyFeatures: [
        {
          title: '프로필 / 키즈 모드 UX 구조 개선',
          column: [
            {
              subTitle: '인지 부하를 줄이기 위한 아이콘 중심 프로필 UI 설계',
              desc: ['텍스트 의존도를 낮추고 시각적 구분 강화'],
            },
            {
              subTitle: '키즈 모드 전용 테마 분리',
              desc: ['컬러·레이아웃 차별화를 통해 성인 프로필과 명확한 맥락 분리'],
            },
            {
              subTitle: 'Auto Kids Login(자동 키즈 로그인) UX 및 기능 설계',
              desc: [
                '보호자가 설정 시 앱 진입 시 항상 키즈 프로필로 자동 진입',
                '복잡한 인증 절차 없이 UX 토글 기반 제어 방식으로 구현',
                '실사용 환경에서의 부모 피로도 최소화에 초점',
              ],
            },
          ],
        },
        {
          title: '상태 관리 & 데이터 구조 설계',
          column: [
            {
              subTitle: 'Zustand 기반 프로필 상태 관리 아키텍처 설계',
              desc: ['프로필 목록', '현재 활성 프로필', '키즈 여부', '자동 키즈 로그인 상태 관리'],
            },
            {
              subTitle: '계정 단위 LocalStorage 네임스페이스 분리',
              desc: ['profile-storage-{userId} 규칙 적용', '멀티 계정 환경에서도 데이터 충돌 방지'],
            },
            {
              subTitle: '역할 분리를 고려한 컴포넌트 설계',
              desc: [
                'UI 컴포넌트는 View 책임만 담당, 상태 변경 및 비즈니스 로직은 Store 레이어에서만 처리',
                '유지보수성과 확장성을 고려한 구조 설계',
              ],
            },
          ],
        },
        {
          title: '연령 기반 키즈 콘텐츠 제어 시스템',
          column: [
            {
              subTitle: '회원가입 시 입력한 아이 생년월일 기반 만나이 계산 유틸 함수 구현',
            },
            {
              subTitle: '계산된 연령을 기준으로 :',
              desc: [
                '기본 키즈 프로필 생성 시 콘텐츠 등급 자동 설정',
                '연령 증가 시 콘텐츠 노출 범위 자동 갱신',
              ],
            },
            {
              subTitle: '연령 구간을 6단계로 세분화',
              desc: ['연령 변화에 따른 UX 수정 없이 자동 대응 가능하도록 설계'],
            },
          ],
        },
      ],
      problems: [
        '프로필 전환이 직관적이지 않음',
        '아이의 성인 프로필 접근 가능성',
        '디바이스별 UX 불일치',
      ],

      solutions: [
        'Auto Kids Login 기능 도입',
        '주요 메뉴 및 CTA 위치 통합으로 조작 흐름 단순화',
        '반응형 레이아웃 가이드 구축을 통한 디바이스 간 UX 일관성 확보',
        '연령 기반 콘텐츠 정책을 시스템적으로 분리하여 유지보수 부담 감소',
      ],

      results: [
        '실제 OTT 사용 맥락(부모 + 아이)을 반영한 UX 문제 해결 경험',
        'Zustand 기반 상태 관리로 멀티 프로필, 멀티 계정 구조 설계 경험',
        '가족 중심 OTT 서비스에서 부모 통제 UX가 단순 기능이 아닌 구조적 설계 문제임을 이해',
        '디자이너 시안과 개발 구현 사이의 조율을 통해 협업 과정과 역할 분담의 중요성을 체감',
      ],

      members: [
        {
          me: true,
          name: '유하나',
          role: [
            '팀장',
            'UX 설계',
            'Zustand 기반 프로필 상태 관리 구조 설계',
            'T프론트엔드 구조 설계',
            '키즈 모드 자동 로그인 UX 및 로직 구현',
          ],
        },
        {
          name: '권하나',
          role: ['API 연동', '메인 페이지 구현', 'Github 관리'],
        },
        {
          name: '손주영',
          role: ['최종 발표 자료 제작', '페이지 디자인 및 공통 디자인 수립'],
        },
        {
          name: '이주은',
          role: ['로그인 로직 구현', '키즈모드 페이지 구현', '키즈 장르 필터링 구현'],
        },
        {
          name: '임채아',
          role: ['헤더 및 푸터 구현', 'firebase 연동', '회원가입 로직 구현'],
        },
      ],

      images: [
        '/images/disneyAdultMain.svg',
        '/images/disneyDetail1.svg',
        '/images/disneyDetail2.svg',
        '/images/disneyDetail3.svg',
        '/images/disneyDetail4.svg',
        '/images/disneyDetail5.svg',
      ],
    },
  },

  {
    id: 'ysl-renewal',
    title: 'YSL Beauty UX 리뉴얼',
    subTitle: '',
    thumbnail: '/images/yslMain.png',
    period: '2025.7.28~2025.8.22',

    team: '팀 프로젝트',

    github: 'https://github.com/taegyu9878/ysl_beauty.git',

    shortDescription: '입생로랑 뷰티의 온라인 UX 개선',

    skills: [
      {
        name: 'HTML5',
        img: '/icon/html5Logo.png',
      },
      {
        name: 'Javascript',
        img: '/icon/jsLogo.png',
      },
      {
        name: 'CSS',
        img: '/icon/cssLogo.svg',
      },
      {
        name: 'Github',
        img: '/icon/githubLogo.svg',
      },
      {
        name: 'Figma',
        img: '/icon/figmaLogo.svg',
      },
    ],

    detail: {
      description: [
        `하이엔드 코스메틱 브랜드인 입생로랑 뷰티의 온라인 UX 개선을 목표로,
기존 웹사이트의 정보 구조·사용성·반응형 환경의 문제점을 분석하고 브랜드 아이덴티티를 유지하면서
프론트엔드 관점에서 개선 방향을 제안 및 구현한 팀 프로젝트입니다.`,
      ],

      keyFeatures: [
        {
          title: 'UX / UI 분석 및 기획',
          column: [
            {
              subTitle:
                '기존 사이트의 CTA 가시성, 모바일 내비게이션 구조, 반응형 레이아웃 문제를 중심으로 UX 분석',
            },
            {
              subTitle:
                '경쟁 브랜드 사이트(동일 코스메틱/하이엔드 계열)와 비교 분석을 통해 개선 포인트 도출',
            },
            {
              subTitle: '분석 내용을 바탕으로 웹·모바일 공통 UX 기준 및 리뉴얼 방향 제안',
            },
          ],
        },
        {
          title: '매장 찾기(Store Locator) 페이지 구현.',
          column: [
            {
              subTitle: 'Kakao Maps API 연동을 통한 오프라인 매장 위치 표시',
            },
            {
              subTitle: '브랜드 아이덴티티를 고려한 지도 grayscale 처리 및 커스텀 마커 적용',
            },
            {
              subTitle: '해상도별 레이아웃 차이를 고려한 반응형 구현',
              desc: [
                '데스크톱 환경 : 지도 + 매장 리스트 병렬 구조',
                '모바일 환경 : 지도/목록 전환형 탭 UI 설계로 사용성 개선',
              ],
            },
          ],
        },
        {
          title: '장바구니(Cart) 페이지 프론트엔드 구현',
          column: [
            {
              subTitle: '장바구니 상품 리스트 및 구매 요약 영역 UI 구현',
            },
            {
              subTitle: 'Flexbox 기반으로 상품 영역(좌) / 결제 요약 영역(우) 레이아웃 설계',
            },
            {
              subTitle: '옵션 변경, 쿠폰 적용 기능을 팝업 컴포넌트 구조로 분리',
            },
            {
              subTitle: '수량 증감 버튼, 옵션 선택 UI 등 사용자 인터랙션을 고려한 DOM 구조 설계',
            },
            {
              subTitle: '반복되는 UI 패턴을 클래스 단위로 관리하여 유지보수성 고려',
            },
          ],
        },
        {
          title: '반응형 웹 설계 및 구현',
          column: [
            {
              subTitle: '해상도 구간별(1400px / 1150px / 767px / 393px) 레이아웃 재설계',
            },
            {
              subTitle: '단순 축소가 아닌 콘텐츠 우선순위 기반 레이아웃 변경',
            },
            {
              subTitle: '주요 CTA 및 결제 정보가 사용자 시선 흐름에 맞게 노출되도록 구조 조정',
            },
            {
              subTitle:
                '모바일 환경에서 불필요한 요소(삭제 버튼 등) 제거하여 가독성 및 사용 흐름 개선',
            },
          ],
        },
      ],
      problems: [
        'CTA 버튼의 가시성이 낮아 클릭 유도가 약함',
        '모바일 환경에서 내비게이션 중첩으로 인한 탐색 피로도 증가',
        '반응형 환경에서 주요 정보가 화면 하단으로 밀리는 문제',
        '시맨틱 태그 활용 부족으로 접근성과 구조적 가독성 저하',
      ],

      solutions: [
        '사용자 시선 흐름과 클릭 예측을 기준으로 CTA 위치·크기·구조 재정의',
        '웹·모바일 공통 레이아웃 기준을 수립하되, 해상도별 UX 차이를 반영',
        '시맨틱 태그를 고려한 마크업 구조 개선을 통해 접근성과 유지보수성 향상',
        '기능 단위(UI / 팝업 / 지도 영역)로 구조를 분리하여 확장 가능성 고려',
      ],

      results: [
        '브랜드 아이덴티티를 유지하면서도 사용성과 접근성을 함께 고려하는 UI 설계의 중요성을 이해함',
        '해상도별 사용자 동선 차이를 고려한 프론트엔드 관점의 반응형 UX 설계 경험',
        'Kakao Maps API 등 외부 API와 UI를 연결하는 프론트엔드 구현 역량 강화',
        '디자이너 시안과 개발 구현 사이의 조율을 통해 협업 과정과 역할 분담의 중요성을 체감',
      ],

      members: [
        {
          me: true,
          name: '유하나',
          role: ['장바구니, 결제 페이지 디자인 및 구현', '오프라인 매장 페이지 디자인 및 구현'],
        },
        {
          name: '안태규',
          role: ['팀장', '메인 페이지 디자인 및 구현', 'Github 관리', '헤더 및 푸터 제작'],
        },
        {
          name: '강화평',
          role: ['로그인 및 회원가입 페이지 디자인 및 구현'],
        },
        {
          name: '이윤빈',
          role: ['제품 카테고리 페이지 디자인 및 구현'],
        },
      ],

      images: [
        '/images/yslDetail1.svg',
        '/images/yslDetail2.svg',
        '/images/yslDetail3.svg',
        '/images/yslDetail4.svg',
        '/images/yslDetail5.svg',
        '/images/yslDetail6.svg',
        '/images/yslDetail7.svg',
      ],
    },
  },

  {
    id: 'Hfashion-renewal',
    title: 'H-fashion 리뉴얼',
    subTitle: '',
    thumbnail: '/images/HfashionMain.png',
    period: '2025.8.29~2025.12.1',

    team: '팀 프로젝트',

    demo: 'https://hfashion-project.netlify.app/',
    github: 'https://github.com/yuleehana/hfashion-project.git',

    shortDescription: '이탈률 개선을 목표로 React 기반 UI/UX 및 프론트엔드 구조 리뉴얼',

    skills: [
      {
        name: 'React',
        img: '/icon/reactLogo.svg',
      },
      {
        name: 'Javascript',
        img: '/icon/jsLogo.png',
      },
      {
        name: 'firebase',
        img: '/icon/firebaseLogo.png',
      },
      {
        name: 'netlify',
        img: '/icon/netlifyLogo.svg',
      },
      {
        name: 'Zustand',
        img: '/icon/zustandLogo.png',
      },
    ],

    detail: {
      description: [
        `한섬이 운영하는 패션 이커머스 플랫폼 H Fashion의 기존 UX 구조를 분석하고, 특히 장바구니–주문서–결제 플로우의 이탈률 개선을 목표로 React 기반으로 UI/UX 및 프론트엔드 구조를 리뉴얼한 팀 프로젝트입니다.`,
      ],

      keyFeatures: [
        {
          title: 'UX / UI 분석 및 기획',
          column: [
            {
              subTitle: 'H-Fashion 플랫폼 분석',
              desc: [
                'H Fashion은 한섬이 운영하는 온라인 패션 플랫폼으로, 자체 브랜드 및 라이선스 캐주얼 브랜드(SJYP, Rouge & Lounge 등)를 중심으로 트렌디하지만 안정적인 브랜드 조합을 지향하고 있다고 분석했습니다.',
                '주 타깃층 : 20~30대 밀레니얼 세대',
                '소비 성향 : 브랜드 인지도와 품질을 중시하는 중·중상 소득층',
              ],
            },
            {
              subTitle: '특징',
              desc: ['브랜드별 공식몰 성격이 강함', '회원제·포인트 기반 결제 구조'],
            },
            {
              subTitle:
                '다만, 브랜드 중심 구조와 복잡한 결제 UI로 인해 핵심 정보 인지가 어렵고, 결제 단계에서 피로도가 높아질 가능성**이 있다고 판단했습니다.',
            },
          ],
        },
        {
          title: '경쟁 사이트 비교 분석',
          column: [
            {
              subTitle: '무신사',
              desc: [
                '장바구니–주문서–결제의 3단계 구조',
                '할인·쿠폰·최종 금액의 즉각적인 시각화',
                '빠른 구매 전환에 최적화된 UX',
              ],
            },
            {
              subTitle: 'SSF Shop',
              desc: ['프리미엄 브랜드 톤앤매너 유지', '정제된 정보 배치와 안정적인 UI 구조'],
            },
            {
              subTitle:
                '→ 무신사의 전환 효율 중심 UX와 SSF샵의 브랜드 감성 유지 방식을 참고해 H Fashion에 맞는 중간 지점을 목표로 설정.',
            },
          ],
        },
        {
          title: 'React 기반 구조 설계',
          column: [
            {
              subTitle: '헤더, 메인, 카테고리, 장바구니, 주문서 등 페이지 단위 컴포넌트 분리',
            },
            {
              subTitle: '공통 SCSS, 코드 컨벤션, Git 환경 설정',
            },
            {
              subTitle: 'UI 반복 요소를 컴포넌트화하여 유지보수성 고려',
              desc: ['불필요한 페이지 이동 제거로 로딩 체감 감소'],
            },
          ],
        },
        {
          title:
            'Firebase Authentication과 Firestore를 연동한 사용자 데이터 관리 구조를 설계 및 구현',
          column: [
            {
              subTitle: '이메일/비밀번호 기반 회원가입과 로그인을 기본으로 구현',
              desc: [
                'Google 및 Kakao 소셜 로그인을 추가하여 실제 서비스 환경과 유사한 인증 흐름을 구성',
              ],
            },
            {
              subTitle:
                '인증 상태 변화(onAuthStateChanged)를 전역 상태로 관리하기 위해 Zustand를 활용하여 Auth Store를 구성',
            },
            {
              subTitle:
                '회원/비회원 로그인 분기, 비회원 주문을 위한 별도 데이터 저장 구조를 설계하여 서비스 흐름에 따라 다른 사용자 케이스를 처리',
            },
          ],
        },
        {
          title: '헤더 UX 개선 및 로그인 흐름 설계',
          column: [
            {
              subTitle: '스크롤 시에도 유지되는 고정 헤더 구조 적용',
            },
            {
              subTitle: '로그인 상태에 따라',
              desc: ['로그인 아이콘 → 마이페이지 아이콘으로 전환', '로그아웃 아이콘 별도 노출'],
            },
            {
              subTitle: '검색 → 마이페이지 → 장바구니 순으로 아이콘 재배치하여 직관성 강화',
            },
          ],
        },
        {
          title: '메인 페이지 UX/UI 설계',
          column: [
            {
              subTitle: '풀스크린 스와이퍼 대신 뷰포트 높이 조정',
              desc: ['여유로운 느낌을 줌과 동시에 다음 섹션 타이틀 일부 노출로 스크롤 유도'],
            },
            {
              subTitle: '카드형 레이아웃 중심 구성으로 빠른 정보 스캔 가능',
            },
            {
              subTitle: '카드 반복으로 인한 피로도를 줄이기 위해 중간에 대형 비주얼 섹션 배치',
            },
          ],
        },
      ],
      problems: [
        '쇼핑몰 서비스에서 구매 전환에 가장 큰 영향을 미치는 결제 직전 단계의 사용성, 가격 인지, 흐름의 연속성의 미흡',
        '가격 정보의 상시 가시성 미흡',
      ],

      solutions: [
        '결제 단계를 장바구니 → 주문서 → 결제 완료 3단계로 단순화',
        '페이지 상단에 Progress Bar 배치로 현재 단계 인지 가능',
        '총 결제 금액, 할인, 배송비를 우측 상단 고정 영역에 배치',
        '옵션 변경 시 실시간 금액 반영 및 옵션 변경 및 추가 정보 입력은 페이지 이동 없이 오버레이 팝업 처리',
        '결제 흐름 중 사용자 고민을 최소화하는 단일 컬럼 기반 레이아웃',
        '사용자 시선 흐름에 맞춘 정보 우선순위 배치',
      ],

      results: [
        '쇼핑몰 서비스에서 결제 직전 UX가 전환율에 미치는 영향을 구조적으로 이해',
        'React 컴포넌트 단위 설계를 통한 UI 재사용성과 유지보수성 경험',
        'UX 기획 → UI 설계 → 프론트엔드 구현까지 전체 흐름을 연결하는 경험',
        '브랜드 감성과 사용성 사이의 균형을 고려한 리뉴얼 설계 역량 강화',
        '회원·비회원 로그인 분기, 소셜 로그인, 주소 검색 기능을 포함한 회원가입/로그인 플로우를 구현하여 실제 이커머스 서비스 수준의 인증 UX 설계 역량 강화',
      ],

      members: [
        {
          me: true,
          name: '유하나',
          role: [
            '기획',
            'Github',
            'UX, UI 디자인',
            'React 컴포넌트 구조 설계',
            '장바구니 데이터 흐름 설계 및 상태 관리',
            'firebase를 활용해 사용자 정보 관리',
            'netrify를 사용해 배포 및 점검',
          ],
        },
        {
          name: '김은희',
          role: ['팀장', '제품 상세 페이지 구현'],
        },
        {
          name: '강화평',
          role: ['자료 조사 및 제품 데이터 크롤링'],
        },
        {
          name: '정미리',
          role: ['UX, UI 디자인', '제품 검색 기능 구현'],
        },
        {
          name: '오영서',
          role: ['마이페이지 디자인', '메인 섹션 구현'],
        },
        {
          name: '김유겸',
          role: ['결제 시스템 구현', '회원가입 로직 구현', '비회원 주문 조회 로직 구현'],
        },
      ],

      images: [
        '/images/hfashionDetail1.svg',
        '/images/hfashionDetail2.svg',
        '/images/hfashionDetail3.svg',
        '/images/hfashionDetail4.svg',
        '/images/hfashionDetail5.svg',
        '/images/hfashionDetail6.svg',
        '/images/hfashionDetail7.svg',
        '/images/hfashionDetail8.svg',
      ],
    },
  },
];
