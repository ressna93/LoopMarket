# LoopMarket

중고 IT 기기 거래 플랫폼 포트폴리오 프로젝트

**[라이브 데모 →](https://loop-market.vercel.app)**

\*\*개발 기간: 2026.04.10 ~ 2026.04.23

---

## 소개

검증된 중고 IT 기기를 합리적인 가격에 거래할 수 있는 쇼핑몰입니다.  
실무 수준의 아키텍처와 풀스택 구성을 목표로 개발했습니다.

---

## 기술 스택

**Frontend**

- React 18 + Vite
- FSD (Feature-Sliced Design) 아키텍처
- Zustand (상태관리, localStorage 영속화)
- React Router v6
- Plain CSS (CSS 변수 기반 다크/라이트 테마)

**Backend**

- Node.js + Express
- Firebase Admin SDK
- Firestore (주문 데이터 저장)

**인증**

- Firebase Authentication (이메일/비밀번호)

**배포**

- Client: Vercel
- Server: Railway

---

## 주요 기능

- 상품 목록 / 상세 페이지
- 카테고리 · 가격 · 정렬 필터
- 실시간 검색 모달
- 장바구니 (localStorage 영속화)
- 결제 및 주문 생성 (Firestore 저장)
- 로그인 / 회원가입 (Firebase Auth)
- 마이페이지 주문 내역 조회
- 최근 본 상품 (localStorage 영속화)
- 다크 / 라이트 테마 토글

---

## 폴더 구조

```
LoopMarket/
├── client/                  # React 클라이언트
│   └── src/
│       ├── app/             # 앱 진입점, 라우터, 글로벌 스타일
│       ├── pages/           # 페이지 컴포넌트
│       ├── widgets/         # 헤더, 푸터 등 레이아웃 단위
│       ├── features/        # 검색, 장바구니, 테마 등 기능 단위
│       ├── entities/        # 유저 등 도메인 모델
│       └── shared/          # API, 공통 스타일
└── server/                  # Express API 서버
    └── src/
        ├── routes/          # products, orders 라우터
        ├── middleware/      # Firebase 토큰 인증
        ├── data/            # 상품 데이터
        └── firebase.js      # Firebase Admin 초기화
```

---

## 로컬 실행

**클라이언트**

```bash
cd client
npm install
npm run dev
```

**서버**

```bash
cd server
npm install
npm run dev
```

**환경변수**

`client/.env`

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_URL=http://localhost:5000
```

`server/.env`

```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
CLIENT_URL=http://localhost:5173
PORT=5000
```

---

## Git 브랜치 전략

```
main      ← 배포 브랜치
develop   ← 통합 테스트
feature/* ← 기능 개발
```
