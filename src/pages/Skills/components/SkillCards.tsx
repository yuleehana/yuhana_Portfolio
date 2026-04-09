import styles from '../scss/skillCard.module.scss';
import layout from '../../../styles/layout.module.scss';
import typo from '../../../styles/typography.module.scss';

interface SkillCardsProps {
  icon: string;
  label: string;
  desc?: string;
  variant: 'simple' | 'detail';
}

const SkillCards = ({ icon, label, desc, variant }: SkillCardsProps) => {
  return (
    <li className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.cardInner}>
        <div>
          <img src={icon} alt={label} className={styles.icon} />
        </div>
        <div className={`${layout.flexCol} ${layout.gapXs}`}>
          <span className={typo.textMd}>{label}</span>
          {variant === 'detail' && <span className={typo.textSm}>{desc}</span>}
        </div>
      </div>
    </li>
  );
};

export default SkillCards;
