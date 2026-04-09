import styles from './hero.module.scss';

const HeroBackground = () => {
  return (
    <div className={styles.background}>
      <img className={styles.star1} src="/icon/logo3.svg" alt="큰별" />
      <img className={styles.star2} src="/icon/star2.svg" alt="중간별" />
      <img className={styles.star3} src="/icon/star3.svg" alt="작은별" />
    </div>
  );
};

export default HeroBackground;
