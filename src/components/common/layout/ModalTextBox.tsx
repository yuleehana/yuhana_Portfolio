import layout from '../../../styles/layout.module.scss';
import styles from '../../../pages/Projects/components/ProjectModal.module.scss';
import typo from '../../../styles/typography.module.scss';

interface ModalTextBoxProps {
  index: number;
  title: string;
  columns: {
    subTitle: string;
    desc?: string[];
  }[];
}

const ModalTextBox = ({ index, title, columns }: ModalTextBoxProps) => {
  return (
    <div className={`${layout.flexCol} ${layout.gapMd} ${layout.mbLg}`}>
      <div className={layout.flex}>
        <span className={typo.titleSm}>{index + 1}.</span>
        <span className={typo.titleSm}>{title}</span>
      </div>
      {columns.map((col, idx) => (
        <div key={idx} className={`${layout.flexCol} ${layout.gapSm}`}>
          <div className={`${layout.flex} ${layout.gapSm}`}>
            <div className={typo.dot}></div>
            <span className={typo.textLg}>{col.subTitle}</span>
          </div>
          <div className={`${layout.flexCol}`}>
            {col.desc?.map((d, i) => (
              <span key={i} className={`${typo.textMd} ${styles.left24}`}>
                - {d}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModalTextBox;
