# 프리텐다드 GOV 폰트 설정 가이드

## 폰트 파일 다운로드

1. 프리텐다드 GOV 폰트를 다운로드합니다:
   - GitHub: https://github.com/orioncactus/pretendard
   - 또는 공식 사이트에서 다운로드

2. 필요한 폰트 파일을 `fonts/` 폴더에 복사합니다:
   - PretendardGOV-Regular.woff2
   - PretendardGOV-Regular.woff
   - PretendardGOV-Medium.woff2
   - PretendardGOV-Medium.woff
   - PretendardGOV-SemiBold.woff2
   - PretendardGOV-SemiBold.woff
   - PretendardGOV-Bold.woff2
   - PretendardGOV-Bold.woff

## 폰트 파일 구조

```
프로젝트/
├── fonts/
│   ├── PretendardGOV-Regular.woff2
│   ├── PretendardGOV-Regular.woff
│   ├── PretendardGOV-Medium.woff2
│   ├── PretendardGOV-Medium.woff
│   ├── PretendardGOV-SemiBold.woff2
│   ├── PretendardGOV-SemiBold.woff
│   ├── PretendardGOV-Bold.woff2
│   └── PretendardGOV-Bold.woff
└── scss/
    └── _fonts.scss
```

## 사용법

폰트 파일을 `fonts/` 폴더에 넣으면 자동으로 적용됩니다.
SCSS를 컴파일하면 프리텐다드 GOV 폰트가 사용됩니다.

```bash
npm run sass:watch
```
