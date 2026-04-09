import typo from '../../styles/typography.module.scss';
import styles from './hero.module.scss';
import layout from '../../styles/layout.module.scss';
import ScrollBtn from './ScrollBtn';

const Hero = () => {
  const handleToSection = () => {
    const current = document.getElementById('intro');
    const next = current?.nextElementSibling as HTMLElement;

    if (next) {
      next.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`${layout.flexColCenter} ${layout.gapXl} ${styles.hero}`}>
      <div className={`${layout.flexCol} ${layout.gapXl}`}>
        <div className={`${layout.flexCol}`}>
          <h1 className={typo.titleXl}>Frontend Developer</h1>
          <h2 className={typo.titleLg}>PORTFOLIO</h2>
        </div>
        <div className={`${layout.flexCol} ${layout.gapMd}`}>
          <div>
            <p className={typo.titleSm}>안녕하세요 프론트엔드 개발자 유하나입니다.</p>
            <p className={typo.titleSm}>
              React를 중심으로 웹 프론트엔드를 개발합니다. 제 웹 포트폴리오를 방문해주셔서 진심으로
              감사드립니다.
            </p>
          </div>
          <p className={typo.textLg}>email : yuleehana@gmail.com</p>
        </div>
      </div>
      <ScrollBtn onClick={handleToSection} />
    </section>
  );
};

export default Hero;
