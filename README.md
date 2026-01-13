# 프리텐다드 GOV 폰트 프로젝트

프리텐다드 GOV 폰트를 사용하는 웹 프로젝트입니다.

## 설정

- **폰트**: Pretendard GOV
- **1rem = 10px** (html { font-size: 62.5%; })
- **기본 폰트 크기**: 1.6rem (16px)

## 설치

```bash
npm install
```

## SCSS 컴파일

### 개발 모드 (감시 모드)
```bash
npm run sass:watch
```

### 프로덕션 빌드 (압축)
```bash
npm run sass:build
```

## 파일 구조

```
프로젝트/
├── fonts/              # 폰트 파일
├── scss/               # SCSS 소스 파일
│   ├── main.scss      # 메인 SCSS 파일
│   ├── _fonts.scss    # 폰트 정의
│   ├── _variables.scss # 변수
│   ├── _reset.scss    # CSS Reset
│   ├── _base.scss     # 기본 스타일
│   ├── _components.scss # 컴포넌트
│   ├── _utilities.scss # 유틸리티
│   ├── _font-enlarge.scss # 폰트 키우기 기능
│   └── _example.scss  # 예제 스타일
├── css/               # 컴파일된 CSS (자동 생성)
│   └── main.css
├── index.html         # 메인 HTML 파일
└── font-enlarge-control.js # 폰트 키우기 JavaScript
```

## 사용 방법

1. SCSS 컴파일:
   ```bash
   npm run sass:build
   ```

2. 브라우저에서 `index.html` 열기

## 주요 기능

- 프리텐다드 GOV 폰트 적용
- 폰트 키우기 기능 (라디오 버튼)
- 1rem = 10px 기준 설정
- 반응형 디자인 지원
