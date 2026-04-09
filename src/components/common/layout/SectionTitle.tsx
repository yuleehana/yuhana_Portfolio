import typo from '../../../styles/typography.module.scss';
import layout from '../../../styles/layout.module.scss';

interface SectionTitleProps {
  sectionEyebrow: string;
  sectionTitle: string;
}

const SectionTitle = ({ sectionEyebrow, sectionTitle }: SectionTitleProps) => {
  return (
    <div className={`${layout.flexCol} ${layout.flexCenter} ${layout.gapMd} ${layout.mbMd}`}>
      <h3 className={typo.titleMd}>{sectionTitle}</h3>
      <span className={typo.textLg}>{sectionEyebrow}</span>
    </div>
  );
};

export default SectionTitle;
