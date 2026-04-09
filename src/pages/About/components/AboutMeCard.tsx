import styles from '../scss/AboutMe.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import typo from '../../../styles/typography.module.scss';

export interface AboutCardsProps {
  id: number;
  title: string;
  eyebrow: string;
  desc: string[];
}

const aboutCards: AboutCardsProps[] = [
  {
    id: 1,
    title: 'UX 기반 문제 해결',
    eyebrow: '사용자 흐름을 분석해 구조적으로 문제를 해결합니다',
    desc: [
      '사용자의 행동 흐름을 분석해 UX 관점에서 문제를 정의합니다.',
      'UI를 상태와 구조 단위로 분리하여 코드로 설계합니다.',
      '기획 의도와 사용자 경험을 연결하는 구현을 중요하게 생각합니다.',
    ],
  },
  {
    id: 2,
    title: '상태 중심 프론트엔드 구조 설계',
    eyebrow: '복잡한 UI를 상태 기반 구조로 설계합니다',
    desc: [
      'React와 Zustand를 활용해 전역 상태 구조를 설계하고 UI 흐름을 일관되게 관리합니다.',
      '컴포넌트 단위 분리와 데이터 흐름 구조화를 통해 유지보수 가능한 프론트엔드 아키텍처를 구현합니다.',
      'API 연동과 로컬 상태 저장 구조를 설계하여 실제 서비스 환경에 가까운 사용자 경험을 구현해왔습니다.',
    ],
  },
  {
    id: 3,
    title: '협업 중심의 의사결정',
    eyebrow: '사용자와 팀을 기준으로 문제를 조율합니다',
    desc: [
      '프로젝트 진행 과정에서 기능 우선순위와 일정 사이의 균형을 고려하며 팀 의사결정을 조율했습니다.',
      '개인의 의견보다 사용자 경험과 프로젝트 목표를 기준으로 논의를 정리하는 역할을 수행했습니다.',
      '이를 통해 협업에서는 설득보다 명확한 기준 제시가 중요하다는 것을 배웠습니다.',
    ],
  },
];

const AboutMeCard = () => {
  return (
    <>
      {aboutCards.map((card) => (
        <div className={`${styles.aboutCard}`} key={card.id}>
          <div className={`${layout.flexCol} ${layout.gapMd}`}>
            <div className={`${layout.flexCol} ${layout.gapXs}`}>
              <p className={typo.titleSm}>{card.title}</p>
              <p className={`${typo.textMd} ${color.text5}`}>{card.eyebrow}</p>
            </div>
            <div className={`${styles.descWrap} ${layout.flexCol} ${layout.gapXs}`}>
              {card.desc.map((d, i) => (
                <div className={`${layout.flex} ${layout.gapXs}`} key={i}>
                  <div className={typo.dot}></div>
                  <p className={typo.textMd}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutMeCard;
