# PM Portfolio Website

신입 Product Manager를 위한 포트폴리오 웹사이트입니다.

## 특징

- **현대적인 디자인**: 깔끔하고 전문적인 UI/UX
- **완전 반응형**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- **프로젝트 쇼케이스**: Problem-Solution-Impact 구조로 PM 프로젝트 효과적으로 표현
- **인터랙티브**: 부드러운 애니메이션과 모달을 통한 상세 정보 제공

## 기술 스택

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- GitHub Pages (호스팅)

## 프로젝트 구조

```
/
├── index.html              # 메인 HTML 파일
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── responsive.css     # 반응형 디자인
├── js/
│   └── main.js            # JavaScript 인터랙션
├── images/                # 이미지 파일
├── assets/                # 기타 리소스
├── CLAUDE.md             # 구현 가이드
└── README.md             # 프로젝트 설명
```

## 섹션 구성

1. **Navigation**: 고정형 네비게이션 바
2. **Hero**: 첫 인상과 CTA
3. **About**: 자기소개 및 핵심 역량
4. **Projects**: PM 프로젝트 케이스 스터디
5. **Skills**: PM 역량 시각화
6. **Contact**: 연락처 정보
7. **Footer**: 저작권 및 크레딧

## 로컬에서 실행하기

1. 저장소 클론 또는 다운로드
2. `index.html` 파일을 브라우저에서 열기
3. 또는 Live Server 사용 (VS Code Extension)

## GitHub Pages 배포

1. GitHub 저장소 생성
2. 코드 푸시
3. Settings > Pages > Source를 'main' 브랜치로 설정
4. 몇 분 후 `https://yourusername.github.io` 에서 확인 가능

## 커스터마이징 가이드

### 1. 개인 정보 수정

**index.html**에서 다음 정보를 수정하세요:
- 이름, 직무
- 자기소개 텍스트
- 이메일, LinkedIn, GitHub 링크
- 프로젝트 정보 (제목, 기간, 내용)

### 2. 색상 변경

**css/style.css**의 `:root` 섹션에서 색상 변수를 수정하세요:

```css
:root {
    --primary-color: #2563eb;    /* 메인 컬러 */
    --secondary-color: #1e40af;  /* 보조 컬러 */
    --text-color: #1f2937;       /* 텍스트 컬러 */
    /* ... */
}
```

### 3. 프로필 이미지 추가

1. `images/` 폴더에 프로필 이미지 추가
2. **index.html**에서 `.profile-placeholder` 부분을 다음으로 교체:

```html
<div class="hero-image">
    <img src="images/profile.jpg" alt="Profile" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover; box-shadow: var(--shadow-lg);">
</div>
```

### 4. 프로젝트 이미지 추가

1. `images/` 폴더에 프로젝트 이미지 추가 (예: project1.jpg, project2.jpg)
2. **index.html**에서 `.image-placeholder` 부분을 다음으로 교체:

```html
<div class="project-image">
    <img src="images/project1.jpg" alt="프로젝트 1">
</div>
```

3. **css/style.css**에 다음 스타일 추가:

```css
.project-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

### 5. 프로젝트 추가/수정

**js/main.js**의 `projectDetails` 객체에서 프로젝트 상세 정보를 수정하세요.

## 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

MIT License - 자유롭게 사용하실 수 있습니다.

## 제작

Made with Claude Code
