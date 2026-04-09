import typo from '../../../styles/typography.module.scss';
import styles from './ProjectModal.module.scss';
import layout from '../../../styles/layout.module.scss';

interface MemberCardProps {
  members: {
    name: string;
    role: string[];
    me?: boolean;
  }[];
}

const MemberCard = ({ members }: MemberCardProps) => {
  return (
    <div className={layout.flexGrid3}>
      {members.map((m, idx) => (
        <div className={styles.memberCard} key={idx}>
          <div className={styles.cardInner}>
            <div className={`${m.me ? typo.dot : ''}`} />
            <div className={`${layout.flexColStart} ${layout.gapMd}`}>
              <span className={typo.titleSm}>{m.name}</span>
              <span className={typo.textMd}>{m.role.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
