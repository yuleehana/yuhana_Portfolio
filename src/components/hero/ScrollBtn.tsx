import layout from '../../styles/layout.module.scss';
import typo from '../../styles/typography.module.scss';
import color from '../../styles/color.module.scss';

interface ScrollBtnProps {
  onClick: () => void;
}

const ScrollBtn = ({ onClick }: ScrollBtnProps) => {
  return (
    <button onClick={onClick} className={`${layout.flexColCenter} ${layout.mtXl} ${layout.gapXs}`}>
      <img className={`${color.text5}`} src="/icon/arrowDown.svg" alt="스크롤 버튼" />
      <p className={` ${typo.caption}`}>SCROLL DOWN</p>
    </button>
  );
};

export default ScrollBtn;
