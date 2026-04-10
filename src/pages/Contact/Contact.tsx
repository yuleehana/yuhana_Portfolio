import SectionTitle from '../../components/common/layout/SectionTitle';
import styles from './scss/Contact.module.scss';
import layout from '../../styles/layout.module.scss';
import icon from '../../styles/icon.module.scss';
import color from '../../styles/color.module.scss';
import typo from '../../styles/typography.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return '이메일을 입력해주세요.';
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return '올바른 이메일 형식을 입력해주세요.';
    }

    return '';
  };
  const validateName = (value: string) => {
    if (!value.trim()) {
      return '이름을 입력해주세요.';
    }

    return '';
  };

  const handleEmailBlur = () => {
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(email),
    }));
  };

  const handleNameBlur = () => {
    setErrors((prev) => ({
      ...prev,
      name: validateName(name),
    }));
  };

  const validateForm = () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);

    setErrors({
      name: nameError,
      email: emailError,
    });

    return !nameError && !emailError;
  };

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          alert('메일이 성공적으로 전송되었습니다!');

          setStatus('success');
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          alert('메일 전송 실패');
          console.log(error);

          setStatus('error');
          setLoading(false);
        },
      );
  };

  return (
    <div className={`${layout.flexColCenter} ${layout.gapMd}`}>
      <SectionTitle sectionEyebrow="" sectionTitle="04. Contact" />
      <div className={`${layout.flexColCenter} ${layout.gapXl}`}>
        <div className={`${layout.flexColCenter} ${layout.gapXs}`}>
          <p className={typo.titleSm}>저의 포트폴리오를 봐주셔서 감사합니다!</p>
          <span className={typo.textLg}>관심있게 보셨다면 아래를 통해 저에게 연락주세요</span>
        </div>
        <div className={`${layout.flex} ${layout.gapMd} ${styles.linkWrap}`}>
          <a
            href="https://github.com/yuleehana"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${layout.flex} ${layout.gapXs} ${color.background2}`}>
            <div className={`${icon.icon} ${icon.iconSm}`}>
              <img src="/icon/githubLogo.svg" alt="git logo" />
            </div>
            <span className={typo.desc}>깃허브</span>
          </a>
          {/* <Link
            to="/void"
            className={`${styles.link} ${layout.flex} ${layout.gapXs} ${color.background2}`}>
            <div className={`${icon.icon} ${icon.iconSm}`}>
              <img src="/icon/githubLogo.svg" alt="git logo" />
            </div>
            <span className={typo.desc}>개인 블로그</span>
          </Link> */}
        </div>
      </div>

      <div className={styles.formBox}>
        <form ref={form} onSubmit={sendEmail} className={`${layout.flexColCenter} ${layout.gapXs}`}>
          <div className={`${layout.flex} ${layout.gapXs} ${layout.mbSm}`}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"></path>
              <path stroke="currentColor" d="m22 6-10 7L2 6"></path>
            </svg> */}
            <p className={`${styles.spanWrap}`}>
              <span className={`${typo.textMd} ${color.text5}`}>메시지는</span>
              <div className={`${layout.flex} ${layout.gapXs}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"></path>
                  <path stroke="currentColor" d="m22 6-10 7L2 6"></path>
                </svg>
                <span className={`${typo.textMd} ${color.text2}`}>yuleehana@gmail.com</span>
              </div>
              <span className={`${typo.textMd} ${color.text5}`}>으로 전송됩니다.</span>
            </p>
          </div>
          <div className={styles.input}>
            <input
              placeholder="보내는 사람"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: '' }));
              }}
              onBlur={handleNameBlur}
              className={`${styles.inputField} ${errors.name ? styles.error : ''}`}
              required
            />
            {errors.name && <span className={styles.errorText}>이름을 입력해주세요.</span>}
          </div>
          <div className={styles.input}>
            <input
              placeholder="이메일"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: '' })); // 입력하면 초기화
              }}
              onBlur={handleEmailBlur}
              className={`${styles.inputField} ${errors.name ? styles.error : ''}`}
              required
            />
            {errors.email && (
              <span className={styles.errorText}>올바른 이메일 형식을 입력해주세요.</span>
            )}
          </div>
          <div className={styles.textarea}>
            <textarea
              placeholder="메시지 내용"
              name="message"
              id="message"
              required
              className={styles.textareaInput}></textarea>
          </div>
          <button type="submit" className={styles.button} disabled={loading}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24">
              <path stroke="currentColor" d="M22 2 11 13M22 2l-7 20-4-9-9-4z"></path>
            </svg>
            {loading ? (
              <p className={`${typo.textSm} ${color.text5}`}>전송중...</p>
            ) : (
              <p className={`${typo.textSm} ${color.text5}`}>메시지 보내기</p>
            )}
          </button>
          {status === 'success' && (
            <p className={`${typo.textMd} ${color.textPoint}`}>
              메시지가 성공적으로 전송되었습니다.
            </p>
          )}

          {status === 'error' && (
            <p className={`${typo.textMd} ${color.textPoint2}`}>
              메일 전송 실패. 다시 시도해주세요.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
