import { useState } from 'react';
import SectionTitle from '../../components/common/layout/SectionTitle';
import { SKILLS_DATA } from '../../data/skillsData';
import SkillCards from './components/SkillCards';
import styles from './scss/skillCard.module.scss';
import layout from '../../styles/layout.module.scss';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string>('all');

  const filteredSkills =
    activeSkill === 'all' ? SKILLS_DATA : SKILLS_DATA.filter((skill) => skill.id === activeSkill);
  const skills = filteredSkills.flatMap((skill) => skill.columns);

  return (
    <div className={styles.inner}>
      <SectionTitle sectionEyebrow="" sectionTitle="02. Skills" />

      {/* 버튼 */}
      <div className={styles.filter}>
        <button
          className={`${styles.skillBtn} ${activeSkill === 'all' ? styles.active : ''}`}
          onClick={() => setActiveSkill('all')}>
          ALL
        </button>

        {SKILLS_DATA.map((skill) => (
          <button
            key={skill.id}
            className={`${styles.skillBtn} ${activeSkill === skill.id ? styles.active : ''}`}
            onClick={() => setActiveSkill(skill.id)}>
            {skill.label}
          </button>
        ))}
      </div>

      {/* 스킬 리스트 */}
      <ul
        className={`${styles.skillsList} ${activeSkill === 'all' ? layout.flexGrid5 : layout.flexGrid3}`}>
        {skills.map((s) => (
          <SkillCards
            key={s.id}
            icon={s.icon}
            label={s.label}
            desc={s.desc}
            variant={activeSkill === 'all' ? 'simple' : 'detail'}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
