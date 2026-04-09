import SimpleTextBox from './SimpleTextBox';
import typo from '../../../styles/typography.module.scss';
import layout from '../../../styles/layout.module.scss';

interface SectionBlockProps {
  title: string;
  items: string[];
}

const SectionBlock = ({ title, items }: SectionBlockProps) => {
  return (
    <div className={`${layout.flexCol} ${layout.mbLg}`}>
      <span className={`${typo.titleSm} ${layout.mbSm}`}>{title}</span>
      {items.map((item, idx) => (
        <SimpleTextBox key={idx} index={idx} text={item} />
      ))}
    </div>
  );
};

export default SectionBlock;
