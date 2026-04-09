import { useState } from 'react';
import styles from './Footer.module.scss';
import typo from '../styles/typography.module.scss';
import layout from '../styles/layout.module.scss';
import color from '../styles/color.module.scss';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('yuleehana@gmail.com');
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('복사 실패', err);
    }
  };

  return (
    <footer className={`${layout.flexCol} ${layout.gapMd} inner`}>
      <div className={layout.divider}></div>
      <div className={`${styles.inner} ${layout.mbLg}`}>
        <div className={`${styles.innerL}`}>
          <div className={`${layout.flex} ${layout.gapMd}`}>
            <span className={`${typo.textMd}`}>yuleehana@gmail.com</span>
            <button onClick={handleCopyEmail} className={styles.copyBtn}>
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
          <div className={`${layout.flex} ${layout.gapMd}`}>
            <span className={`${typo.textMd}`}>깃허브 주소</span>
            <a
              href="https://github.com/yuleehana"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.copyBtn} ${layout.flex} ${layout.gapXs} ${color.background2}`}>
              <span className={typo.desc}>바로가기</span>
            </a>
          </div>
        </div>
        <div>
          <span className={`${typo.desc} ${color.text6}`}>
            Copyright © 2026. YuHana All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
