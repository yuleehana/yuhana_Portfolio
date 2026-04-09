import { MENU_DATA } from '../data/headerData';
import './SideBar.scss';
import layout from '../styles/layout.module.scss';
import typo from '../styles/typography.module.scss';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
  onClickMenu: (id: string) => void;
}

const SideBar = ({ isOpen, onClickMenu, onClose }: SideBarProps) => {
  return (
    <div className={`sideBar ${isOpen ? 'open' : ''}`}>
      <div className={`overlay`} onClick={onClose} />

      <div className={`sideBarContent`}>
        <ul className={`menuData ${layout.flexCol} ${layout.gapMd}`}>
          {MENU_DATA.map((menu) => (
            <li key={menu.id}>
              <button
                className={`${typo.button}`}
                onClick={() => {
                  onClickMenu(menu.id);
                  onClose();
                }}>
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
