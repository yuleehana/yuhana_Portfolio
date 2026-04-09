import './HamBtn.scss';
import icon from '../../../styles/icon.module.scss';

interface HamBtnProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamBtn = ({ isOpen, onClick }: HamBtnProps) => {
  return (
    <button
      className={`hamBtn ${icon.icon} ${icon.iconLg} ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      aria-label="메뉴 버튼">
      <div className="hamBtnLine"></div>
      <div className="hamBtnLine"></div>
      <div className="hamBtnLine"></div>
    </button>
  );
};

export default HamBtn;
