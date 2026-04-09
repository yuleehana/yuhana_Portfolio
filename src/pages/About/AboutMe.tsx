import SectionTitle from '../../components/common/layout/SectionTitle';
import AboutMeCard from './components/AboutMeCard';
import styles from './scss/AboutMe.module.scss';
import color from '../../styles/color.module.scss';
import typo from '../../styles/typography.module.scss';
import layout from '../../styles/layout.module.scss';

const AboutMe = () => {
  return (
    <div className="inner">
      <SectionTitle sectionEyebrow="" sectionTitle="01. About Me" />
      <div className={`${styles.content} ${layout.flex2} ${layout.gapXl}`}>
        <div className={`${styles.contentL}`}>
          <div className={`${layout.flex} ${styles.image}`}>
            <img src="/public/images/myProfile.png" alt="프로필 이미지" />
          </div>
          <div className={`${layout.flexCol} ${layout.gapMd}`}>
            <p className={typo.titleMd}>유하나</p>
            <div className={`${layout.flexCol} ${layout.gapXs}`}>
              <p className={`${layout.flex} ${layout.gapXs}`}>
                <span className={`${typo.textMd} ${color.text5}`}>tel</span>
                <span className={`${typo.textMd} ${color.text5}`}>:</span>
                <span className={`${typo.textMd}`}>010-8310-4574</span>
              </p>
              <p className={`${layout.flex} ${layout.gapXs}`}>
                <span className={`${typo.textMd} ${color.text5}`}>email</span>
                <span className={`${typo.textMd} ${color.text5}`}>:</span>
                <span className={`${typo.textMd}`}>yuleehana@gmail.com</span>
              </p>
              <p className={`${layout.flex} ${layout.gapXs}`}>
                <span className={`${typo.textMd} ${color.text5}`}>address</span>
                <span className={`${typo.textMd} ${color.text5}`}>:</span>
                <span className={`${typo.textMd}`}>서울시 동작구</span>
              </p>
            </div>
          </div>
        </div>
        <div className={`${layout.flexCol} ${layout.gapLg}`}>
          <AboutMeCard />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
