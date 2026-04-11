# 💼 Personal Portfolio

프론트엔드 개발자로서의 역량과 프로젝트 경험을 효과적으로 전달하기 위해
사용자 경험(UX) 중심으로 설계·구현한 개인 포트폴리오 웹사이트입니다.

단순 결과물 나열이 아닌,
프로젝트 탐색 흐름 / 정보 전달 구조 / 인터랙션 경험을 고려하여
UI 구조와 프론트엔드 아키텍처를 함께 설계했습니다.

---

## 🔗 Live Demo

👉 ([배포 주소](https://yuhana-portfolio.vercel.app/))

---

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- SCSS Module
- EmailJS
- Vercel

---

## 📁 Project Structure

```
src/
 ├─ components/
 ├─ pages/
 ├─ styles/
 ├─ data/
 └─ App.tsx
```

- 컴포넌트 단위로 구조를 분리하여 재사용성 확보
- 데이터 기반 렌더링 구조로 확장성 고려

---

## ✨ Key Features

### 1. 프로젝트 탐색 UX & 모달 인터랙션

- 프로젝트 카드 리스트를 map 기반으로 렌더링
- 선택된 프로젝트만 열리는 모달 구조 구현
- 배경 스크롤 방지 + 모달 내부 스크롤 처리

👉 사용자 집중도를 높이는 인터랙션 설계

---

### 2. 컴포넌트 재사용 구조 설계

- SectionTitle / SkillCard / ProjectCard 등 공통 컴포넌트 분리
- props 기반 variant 패턴으로 UI 확장 가능
- UI와 데이터 로직 분리

👉 유지보수성과 확장성을 고려한 구조

---

### 3. 사용자 인터랙션 및 상태 처리

- 햄버거 버튼 → X 아이콘 애니메이션 구현
- Sidebar와 상태 연동
- 폼 입력값 유효성 검사
- EmailJS를 활용한 이메일 전송 기능 구현
- 로딩 / 성공 / 실패 상태 UI 처리

👉 사용자 행동에 대한 즉각적인 피드백 제공

---

### 4. 반응형 UI 및 디자인 시스템

- clamp 기반 반응형 타이포그래피 적용
- SCSS Module 기반 스타일 분리
- 아이콘 wrapper + object-fit으로 이미지 비율 통일

👉 다양한 해상도에서 일관된 UI 유지

---

### 5. 배포 및 환경 관리

- Vercel을 통한 배포 자동화 (CI/CD)
- 환경 변수(.env) 관리
- 빌드 및 패키지 이슈 해결 경험

---

## ⚠️ Problems & Solutions

### ❗ 문제 1. 프로젝트 클릭 시 모든 모달이 열리는 문제

- 상태를 개별적으로 관리하지 않아 발생

👉 해결

- 선택된 프로젝트 ID 기반 상태 관리로 단일 모달만 열리도록 수정

---

### ❗ 문제 2. 모달 오픈 시 배경 스크롤 발생

👉 해결

- body overflow 제어로 배경 스크롤 차단
- 모달 내부 스크롤만 허용

---

### ❗ 문제 3. 아이콘 크기/비율 불균형

👉 해결

- 고정 wrapper + object-fit 적용으로 비율 통일

---

### ❗ 문제 4. 이메일 발신자 정보 미표시

👉 해결

- EmailJS 템플릿 변수 매핑 수정 (reply_to, from_name)

---

### ❗ 문제 5. Vercel 배포 시 빌드 오류

👉 해결

- 패키지 매니저 혼용 문제 해결
- 환경에 맞는 라이브러리 사용 (Vite vs Next)

---

## 📈 What I Learned

- 단순 UI 구현을 넘어 **UX 흐름 설계의 중요성**
- 상태 관리 구조가 사용자 경험에 미치는 영향
- 컴포넌트 재사용성과 구조 설계의 중요성
- 배포 및 빌드 과정에서의 문제 해결 경험

---

## 🚀 Future Improvements

- Next.js 기반으로 리팩토링 (SSR / SEO 적용)
- 다크 모드 지원
- 애니메이션 및 인터랙션 강화
- 프로젝트 데이터 CMS화

---

## 📬 Contact

- Email: yuleehana@gmail.com
- GitHub: [(깃허브 링크)](https://github.com/yuleehana)
