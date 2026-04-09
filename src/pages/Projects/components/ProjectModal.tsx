import styles from './ProjectModal.module.scss';
import typo from '../../../styles/typography.module.scss';
import icon from '../../../styles/icon.module.scss';
import layout from '../../../styles/layout.module.scss';
import type { PROJECTS_MENU } from '../../../types/projectsType';
import { useEffect, useState } from 'react';
import MemberCard from './MemberCard';
import ModalTextBox from '../../../components/common/layout/ModalTextBox';
import SectionBlock from '../../../components/common/layout/SectionBlock';

export interface ModalProps {
  project: PROJECTS_MENU;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ModalProps) => {
  const [selectedImg, setSelectedImg] = useState(project.thumbnail);

  const images = [project.thumbnail, ...project.detail.images];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} key={project.id} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.btnWrap}`}>
          <button
            className={`${styles.closeBtn} ${layout.flex} ${icon.iconXl} ${layout.mbMd}`}
            onClick={onClose}>
            <img src="/icon/closeIcon.svg" alt="modal close" />
          </button>
        </div>
        <div className={styles.imgSection}>
          <img src={selectedImg} alt={project.id} />
          <div className={styles.imgBox}>
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(img)}
                className={selectedImg === img ? styles.active : ''}>
                <img src={img} alt={`thumb ${idx}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={`${layout.flexCol} ${layout.gapXl}`}>
          <div className={`${layout.flexCol} ${layout.gapMd}`}>
            <div className={styles.titleWrap}>
              <span className={typo.titleMd}>{project.title}</span> <span>-</span>
              <span className={typo.titleSm}>{project.subTitle}</span>
            </div>
            <div className={`${layout.flex} ${layout.gapMd}`}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${layout.flex} ${layout.gapXs}`}>
                  <span className={typo.link}>서비스 이동</span>
                  <img className={icon.iconSm} src="/icon/shareBox.svg" alt="이동 아이콘" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${layout.flex} ${layout.gapXs}`}>
                  <span className={typo.link}>GitHub</span>
                  <img className={icon.iconSm} src="/icon/shareBox.svg" alt="이동 아이콘" />
                </a>
              )}
            </div>
            <div className={`${layout.flexCol} ${layout.gapSm} ${styles.box} ${layout.mbMd}`}>
              <span className={typo.caption}>INTRO</span>
              <span className={typo.textMd}>{project.detail.description[0]}</span>
              <span className={typo.textMd}>{project.detail.description[1]}</span>
            </div>
            <div className={`${layout.flexCol} ${layout.gapLg}`}>
              <span className={typo.titleSm}>사용된 기술 스택</span>
              <div className={`${layout.flex} ${layout.flexWrap} ${layout.gapSm}`}>
                {project.skills.map((skill, i) => (
                  <button className={typo.buttonActive} key={i}>
                    {skill.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={layout.divider}></div>

          <div className={`${layout.flexCol} ${layout.gapXl}`}>
            <div className={`${layout.flexCol} ${layout.gapLg}`}>
              <span className={typo.titleSm}>개발 기간</span>
              <span className={typo.textMd}>{project.period}</span>
            </div>

            <div className={`${layout.flexCol} ${layout.gapLg}`}>
              <span className={typo.titleSm}>구성원</span>
              <MemberCard members={project.detail.members} />
            </div>

            <div className={`${layout.flexCol} ${layout.gapLg}`}>
              <span className={typo.titleSm}>주요 기능</span>
              <div className={layout.gapMd}>
                {project.detail.keyFeatures.map((feature, idx) => (
                  <ModalTextBox
                    key={idx}
                    index={idx}
                    title={feature.title}
                    columns={feature.column}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={layout.divider}></div>

          <div className={`${layout.flexCol} ${layout.gapMd}`}>
            <SectionBlock title="문제점" items={project.detail.problems} />
            <SectionBlock title="해결법" items={project.detail.solutions} />
            <SectionBlock title="성과" items={project.detail.results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
