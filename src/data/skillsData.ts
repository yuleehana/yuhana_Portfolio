import type { SKILLS_MENU } from '../types/skillsType';

export const SKILLS_DATA: SKILLS_MENU[] = [
  {
    id: 'language',
    label: 'Language',
    columns: [
      {
        id: 'html',
        label: 'HTML5',
        icon: '/icon/html5Logo.png',
        desc: '시맨틱 마크업을 기반으로 접근성과 구조를 고려한 웹 페이지를 작성',
      },
      {
        id: 'css',
        label: 'CSS',
        icon: '/icon/cssLogo.svg',
        desc: 'Flex/Grid와 반응형 레이아웃을 활용해 다양한 화면 환경에 대응하는 UI 구현',
      },
      {
        id: 'js',
        label: 'Javascript',
        icon: '/icon/jsLogo.png',
        desc: '사용자 인터랙션과 상태 변화에 따라 화면 동작을 제어하는 로직 구현',
      },
      {
        id: 'ts',
        label: 'Typescript',
        icon: '/icon/typescriptLogo.svg',
        desc: '정적 타입을 적용해 데이터 흐름을 예측 가능하게 관리하고 안정적인 코드 작성',
      },
    ],
  },

  {
    id: 'frontend',
    label: 'Frontend',
    columns: [
      {
        id: 'react',
        label: 'React',
        icon: '/icon/reactLogo.svg',
        desc: '컴포넌트 단위로 UI를 설계하고 상태 기반으로 사용자 흐름을 구조적으로 구현',
      },
      {
        id: 'next',
        label: 'Next.js',
        icon: '/icon/nextjsLogo.svg',
        desc: '파일 기반 라우팅과 서버 사이드 렌더링 구조를 이해하고 프로젝트에 적용',
      },
      {
        id: 'vite',
        label: 'Vite',
        icon: '/icon/viteLogo.png',
        desc: '빠른 개발 환경과 모듈 번들링을 활용해 프론트엔드 프로젝트를 구성',
      },
      {
        id: 'react-native',
        label: 'React Native',
        icon: '/icon/reactNativeLogo.png',
        desc: 'React 기반 구조를 활용해 모바일 UI 구조와 컴포넌트 흐름을 학습',
      },
    ],
  },

  {
    id: 'styling',
    label: 'Styling',
    columns: [
      {
        id: 'scss',
        label: 'SCSS',
        icon: '/icon/scssLogo.png',
        desc: '변수, 믹스인, 중첩 구조를 활용해 유지보수 가능한 스타일 구조 설계',
      },
    ],
  },

  {
    id: 'state',
    label: 'State / Data',
    columns: [
      {
        id: 'zustand',
        label: 'Zustand',
        icon: '/icon/zustandLogo.png',
        desc: '전역 상태 관리로 컴포넌트 간 데이터 흐름을 일관되게 관리',
      },
      {
        id: 'firebase',
        label: 'Firebase',
        icon: '/icon/firebaseLogo.png',
        desc: 'Authentication 및 데이터 저장을 활용해 간단한 백엔드 기능 구현',
      },
      {
        id: 'axios',
        label: 'Axios',
        icon: '/icon/axiosLogo.png',
        desc: 'REST API 요청 및 응답 데이터를 처리하여 화면에 동적으로 반영',
      },
      {
        id: 'node',
        label: 'Node.js',
        icon: '/icon/nodejsLogo.svg',
        desc: '로컬 서버 환경에서 API 요청/응답 흐름을 확인하며 데이터 처리 구조 이해',
      },
    ],
  },

  {
    id: 'deploy',
    label: 'Deployment',
    columns: [
      {
        id: 'netlify',
        label: 'Netlify',
        icon: '/icon/netlifyLogo.svg',
        desc: '정적 사이트를 배포하고 CI/CD 기반으로 프로젝트 배포 관리',
      },
      {
        id: 'vercel',
        label: 'Vercel',
        icon: '/icon/vercelLogo.svg',
        desc: 'Next.js 프로젝트를 배포하고 서버리스 환경에서 서비스 운영',
      },
    ],
  },

  {
    id: 'tools',
    label: 'Tools',
    columns: [
      {
        id: 'git',
        label: 'Git / Github',
        icon: '/icon/githubLogo.svg',
        desc: '브랜치 전략을 활용해 팀원들과 협업하며 코드 버전 관리',
      },
      {
        id: 'notion',
        label: 'Notion',
        icon: '/icon/notionLogo.png',
        desc: '프로젝트 진행 상황과 기능 정의, 이슈를 문서화하여 팀 내 공유',
      },
      {
        id: 'figma',
        label: 'Figma',
        icon: '/icon/figmaLogo.svg',
        desc: '디자인 시안을 분석하여 컴포넌트 구조와 UI 구현 방향을 파악',
      },
    ],
  },
];