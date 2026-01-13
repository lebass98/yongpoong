# 프리텐다드 GOV 폰트 - 애플 스타일

프리텐다드 GOV 폰트를 사용하는 웹 프로젝트로, 애플 스타일의 세련된 디자인을 적용한 데모 페이지입니다.

## 주요 기능

- **프리텐다드 GOV 폰트 적용**: 정부 공용 한글 폰트를 로컬에서 사용
- **폰트 크기 조정 기능**: 우측 상단 토글 스위치로 "보통글씨"와 "큰글씨" 전환
- **폰트 크기 변화 미리보기**: 6가지 크기별 변화를 카드 형태로 시각화
- **1rem = 10px 기준**: 직관적인 rem 단위 사용
- **애플 스타일 디자인**: 그라데이션, 그림자, 카드 디자인 등 모던한 UI
- **반응형 디자인**: 모바일 및 데스크톱 환경 지원
- **LocalStorage 지원**: 사용자 폰트 크기 선호도 저장

## 폰트 크기 매핑

큰글씨 모드 활성화 시 다음 크기로 변경됩니다:

- 12px → 14px (1.2rem → 1.4rem)
- 13px → 15px (1.3rem → 1.5rem)
- 14px → 18px (1.4rem → 1.8rem)
- 18px → 22px (1.8rem → 2.2rem)
- 24px → 26px (2.4rem → 2.6rem)
- 32px → 36px (3.2rem → 3.6rem)

## 폰트 굵기

프리텐다드 GOV 폰트는 다음 굵기를 지원합니다:

- **Regular (400)**: 기본 텍스트에 사용
- **Medium (500)**: 조금 더 강조된 텍스트
- **SemiBold (600)**: 제목이나 중요한 내용
- **Bold (700)**: 가장 강조된 텍스트

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
├── fonts/                    # 폰트 파일 (Pretendard GOV)
│   ├── PretendardGOV-Regular.woff2
│   ├── PretendardGOV-Medium.woff2
│   ├── PretendardGOV-SemiBold.woff2
│   └── ...
├── scss/                     # SCSS 소스 파일
│   ├── main.scss            # 메인 SCSS 파일
│   ├── _fonts.scss          # 폰트 정의
│   ├── _variables.scss      # 변수
│   ├── _reset.scss          # CSS Reset
│   ├── _base.scss           # 기본 스타일
│   ├── _components.scss     # 컴포넌트
│   ├── _utilities.scss      # 유틸리티
│   ├── _font-enlarge.scss   # 폰트 키우기 기능
│   ├── _apple-style.scss    # 애플 스타일 디자인
│   ├── _font-toggle.scss    # 폰트 토글 스위치
│   └── _font-size-demo.scss # 폰트 크기 데모
├── css/                     # 컴파일된 CSS (자동 생성)
│   └── main.css
├── index.html               # 메인 HTML 파일
└── main.js                  # 폰트 키우기 JavaScript
```

## 사용 방법

1. SCSS 컴파일:
   ```bash
   npm run sass:build
   ```

2. 브라우저에서 `index.html` 열기

3. 우측 상단의 토글 스위치를 클릭하여 "보통글씨"와 "큰글씨" 간 전환

## 페이지 구성

- **히어로 섹션**: 메인 타이틀과 서브타이틀
- **폰트 크기 변화 미리보기**: 6가지 크기별 변화를 카드로 표시
- **타이포그래피 섹션**: 1rem = 10px 기준 설명
- **폰트 굵기 섹션**: 다양한 폰트 굵기 예시

## 기술 스택

- HTML5
- CSS3 (SCSS)
- JavaScript (Vanilla JS)
- Pretendard GOV 폰트

## 라이선스

프리텐다드 GOV 폰트는 [공공누리](https://www.gov.kr/) 라이선스를 따릅니다.
