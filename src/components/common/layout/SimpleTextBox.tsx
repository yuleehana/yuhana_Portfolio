import layout from '../../../styles/layout.module.scss';
import typo from '../../../styles/typography.module.scss';

interface SimpleTextBoxProps {
  index: number;
  text: string;
}

const SimpleTextBox = ({ index, text }: SimpleTextBoxProps) => {
  return (
    <div className={`${layout.flex} ${layout.gapSm} ${layout.mbSm}`}>
      <div className={typo.textLg}>{index + 1}. </div>
      <span className={typo.textLg}>{text}</span>
    </div>
  );
};

export default SimpleTextBox;
