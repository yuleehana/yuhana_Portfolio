import styles from './hero.module.scss';

interface StarProps {
  size: number;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const Star = ({ size, top, left, bottom, right }: StarProps) => {
  return (
    <div
      className={styles.star}
      style={{
        width: size,
        height: size,
        top,
        left,
        bottom,
        right,
      }}
    />
  );
};

export default Star;
