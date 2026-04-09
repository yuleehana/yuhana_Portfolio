import styles from './ProjectCard.module.scss';
import icon from '../../../styles/icon.module.scss';
import color from '../../../styles/color.module.scss';
import typo from '../../../styles/typography.module.scss';
import layout from '../../../styles/layout.module.scss';
import { PROJECTS_DATA } from '../../../data/projectsData';
import { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import type { PROJECTS_MENU } from '../../../types/projectsType';

// export interface CardProps {
//   project: PROJECTS_MENU;
// }

const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState<PROJECTS_MENU | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      {PROJECTS_DATA.map((card) => (
        <div
          onClick={() => setIsOpen(card)}
          className={`${layout.flexCol} ${layout.gapSm}`}
          key={card.id}>
          <div className={styles.imgBox}>
            <img src={card.thumbnail} alt={card.id} />
          </div>
          <div className={`${layout.flexCol} ${layout.gapSm}`}>
            <div className={layout.flexBetween}>
              <p className={typo.titleSm}>{card.title}</p>
              <button className={`${layout.flex} ${layout.gapSm}`}>
                <span className={`${typo.textMd} ${color.text5}`}>자세히 보기</span>
                <img src="/icon/arrowRight.svg" alt="right arrow" className={icon.iconXs} />
              </button>
            </div>
            <div className={`${layout.flex} ${layout.gapMd}`}>
              <span className={`${typo.textMd} ${color.text5}`}>{card.period}</span>
              <span className={typo.textMd}>{card.team}</span>
            </div>
            <div className={`${layout.flex} ${layout.gapMd}`}>
              {card.demo && (
                <a
                  href={card.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${layout.flex} ${layout.gapSm}`}>
                  <span className={typo.link}>서비스 이동</span>
                  <img className={icon.iconSm} src="/icon/shareBox.svg" alt="이동 아이콘" />
                </a>
              )}
              {card.github && (
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${layout.flex} ${layout.gapSm}`}>
                  <span className={typo.link}>GitHub</span>
                  <img className={icon.iconSm} src="/icon/shareBox.svg" alt="이동 아이콘" />
                </a>
              )}
            </div>
          </div>
          <div className={`${layout.flex} ${layout.gapMd}`}>
            {card.skills.map((skill, idx) =>
              skill.img ? (
                <div key={idx} className={`${icon.iconMd} ${icon.icon}`}>
                  <img src={skill.img} alt={skill.name} />
                </div>
              ) : null,
            )}
          </div>
        </div>
      ))}

      {isOpen && <ProjectModal onClose={() => setIsOpen(null)} project={isOpen} />}
    </>
  );
};

export default ProjectCard;
