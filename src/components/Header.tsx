import { useEffect, useState } from 'react';
import { MENU_DATA } from '../data/headerData';
import styles from './Header.module.scss';
import icon from '../styles/icon.module.scss';
import HamBtn from './common/button/HamBtn';
import SideBar from './SideBar';

const Header = () => {
  //TODO 헤더 메뉴 클릭 시 해당 섹션으로 이동하도록
  const [activeId, setActiveId] = useState<string>('aboutme');
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const intro = document.getElementById('intro');

    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(intro);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.8 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector('header');

    if (element && header) {
      const headerHeight = header.offsetHeight;

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setActiveId(id);
  };

  // TODO hamBtn 클릭 시 사이드바 열리도록
  // 해상도 내려가면 우측은 없애고 좌측 햄버거 버튼만 보이게

  return (
    <>
      <header className={`header ${!isIntroVisible ? `${styles.scrolled}` : ''}`}>
        <div className={`${styles.inner}`}>
          <div className={`${styles.innerL}`}>
            <button
              className={`logo ${icon.icon} ${icon.iconXl}`}
              onClick={() => handleScroll('intro')}>
              <img src="/images/logo.svg" alt="logo" />
            </button>
          </div>
          <div className={`${styles.innerR}`}>
            <ul className={`${styles.menuList}`}>
              {MENU_DATA.map((menu) =>
                menu.label === '' ? (
                  ''
                ) : (
                  <li key={menu.id}>
                    <button
                      onClick={() => handleScroll(menu.id)}
                      className={`${styles.menuBtn} ${activeId === menu.id ? 'buttonActive' : 'buttonDefault'}`}>
                      {menu.label}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </header>

      <div className={`${styles.hamBtn}`}>
        <HamBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} onClickMenu={handleScroll} />
    </>
  );
};

export default Header;
