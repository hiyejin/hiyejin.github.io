# PM 포트폴리오 웹사이트 구현 가이드

## 프로젝트 개요
신입 PM을 위한 현대적이고 깔끔한 웹 포트폴리오 사이트

## 기술 스택
- **HTML5**: 기본 구조
- **CSS3**: 스타일링 (Flexbox, Grid 활용)
- **Vanilla JavaScript**: 인터랙션 (프레임워크 없이 간단하게)
- **GitHub Pages**: 무료 호스팅

## 사이트 구조

### 1. 페이지 구성
```
/
├── index.html              # 메인 페이지 (Single Page Application)
├── css/
│   ├── style.css          # 메인 스타일
│   └── responsive.css     # 반응형 디자인
├── js/
│   └── main.js            # 인터랙션 스크립트
├── images/
│   └── (프로필 이미지, 프로젝트 이미지)
└── assets/
    └── (아이콘, 기타 리소스)
```

### 2. 섹션 구성 (Single Page)

#### Hero Section
- 이름, 직무 (Product Manager)
- 짧은 소개 문구
- CTA 버튼 (프로젝트 보기, 연락하기)
- 프로필 사진

#### About Me Section
- 자기소개
- 핵심 역량 (Product Strategy, User Research, Data Analysis 등)
- 사용 가능 툴 (Figma, Jira, Google Analytics, SQL 등)
- 간단한 경력/교육 타임라인

#### Projects Section (핵심)
각 프로젝트 카드에 포함될 내용:
- 프로젝트 썸네일
- 프로젝트 명
- 역할 및 기간
- 문제 정의 (Problem)
- 해결 방안 (Solution)
- 결과/성과 (Impact) - 정량적 지표 포함
- 사용 스킬/툴
- 상세보기 버튼 (모달 또는 확장형)

#### Skills Section
- PM 핵심 역량 시각화
- 카테고리별 분류:
  - Product Strategy
  - User Research & UX
  - Data & Analytics
  - Communication & Collaboration
  - Technical Understanding

#### Contact Section
- 이메일
- LinkedIn
- GitHub (선택)
- 간단한 연락 폼 또는 이메일 링크

#### Footer
- Copyright
- 소셜 링크
- "Made with Claude Code" 크레딧

## 구현 상세 사항

### HTML 구조 (index.html)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Product Manager Portfolio</title>
    <meta name="description" content="신입 PM 포트폴리오">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">YourName</div>
            <ul class="nav-menu">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>안녕하세요, <span class="highlight">PM</span> 예진입니다</h1>
                <p class="subtitle">사용자 중심의 가치를 만들어가는 프로덕트 매니저</p>
                <div class="cta-buttons">
                    <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
                    <a href="#contact" class="btn btn-secondary">연락하기</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="images/profile.jpg" alt="Profile">
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>데이터 기반의 의사결정과 사용자 중심 사고를 통해 문제를 해결하는 PM입니다.</p>
                    <p>...</p>
                </div>
                <div class="about-skills">
                    <div class="skill-category">
                        <h3>Core Competencies</h3>
                        <ul>
                            <li>Product Strategy & Roadmap</li>
                            <li>User Research & Analysis</li>
                            <li>Data-Driven Decision Making</li>
                            <li>Cross-functional Communication</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Tools</h3>
                        <div class="tool-tags">
                            <span class="tag">Figma</span>
                            <span class="tag">Jira</span>
                            <span class="tag">Google Analytics</span>
                            <span class="tag">SQL</span>
                            <span class="tag">Notion</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">

                <!-- Project Card 1 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="images/project1.jpg" alt="Project 1">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">프로젝트 제목</h3>
                        <p class="project-meta">PM | 2024.01 - 2024.03</p>
                        <div class="project-brief">
                            <div class="brief-item">
                                <strong>Problem:</strong>
                                <p>해결하고자 했던 문제</p>
                            </div>
                            <div class="brief-item">
                                <strong>Solution:</strong>
                                <p>접근 방법 및 해결책</p>
                            </div>
                            <div class="brief-item">
                                <strong>Impact:</strong>
                                <p>전환율 25% 증가, MAU 10,000명 달성</p>
                            </div>
                        </div>
                        <div class="project-tags">
                            <span class="tag">User Research</span>
                            <span class="tag">A/B Testing</span>
                            <span class="tag">SQL</span>
                        </div>
                        <button class="btn-detail" data-project="1">상세보기</button>
                    </div>
                </div>

                <!-- 추가 프로젝트 카드들 -->

            </div>
        </div>
    </section>

    <!-- Project Modal -->
    <div id="projectModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="modalBody">
                <!-- 동적으로 채워질 내용 -->
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <div class="skill-icon">📊</div>
                    <h3>Product Strategy</h3>
                    <p>시장 분석, 로드맵 수립, OKR 설정</p>
                </div>
                <div class="skill-item">
                    <div class="skill-icon">👥</div>
                    <h3>User Research</h3>
                    <p>인터뷰, 설문조사, 사용성 테스트</p>
                </div>
                <div class="skill-item">
                    <div class="skill-icon">📈</div>
                    <h3>Data Analysis</h3>
                    <p>SQL, GA4, 데이터 기반 의사결정</p>
                </div>
                <div class="skill-item">
                    <div class="skill-icon">🤝</div>
                    <h3>Collaboration</h3>
                    <p>개발자, 디자이너와의 협업</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-content">
                <p>프로젝트나 협업 제안은 언제든 환영합니다!</p>
                <div class="contact-links">
                    <a href="mailto:your.email@example.com" class="contact-link">
                        <span class="icon">✉️</span>
                        your.email@example.com
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">
                        <span class="icon">💼</span>
                        LinkedIn
                    </a>
                    <a href="https://github.com/yourusername" class="contact-link" target="_blank">
                        <span class="icon">💻</span>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <p class="credit">Made with Claude Code</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### CSS 주요 스타일 (css/style.css)
```css
/* 기본 설정 */
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --text-light: #6b7280;
    --bg-color: #ffffff;
    --bg-light: #f9fafb;
    --border-color: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: var(--primary-color);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.highlight {
    color: var(--primary-color);
}

.subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2rem;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 50%;
    box-shadow: var(--shadow-lg);
}

/* Section Title */
.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 1rem auto 0;
}

/* About Section */
.about {
    padding: 80px 0;
    background: var(--bg-color);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.about-text p {
    margin-bottom: 1rem;
    color: var(--text-light);
    font-size: 1.1rem;
}

.skill-category {
    margin-bottom: 2rem;
}

.skill-category h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.skill-category li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

.tool-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background: var(--bg-light);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-color);
    border: 1px solid var(--border-color);
}

/* Projects Section */
.projects {
    padding: 80px 0;
    background: var(--bg-light);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.project-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-content {
    padding: 1.5rem;
}

.project-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.project-meta {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.brief-item {
    margin-bottom: 1rem;
}

.brief-item strong {
    color: var(--primary-color);
    display: block;
    margin-bottom: 0.25rem;
}

.brief-item p {
    color: var(--text-light);
    font-size: 0.95rem;
}

.project-tags {
    margin: 1rem 0;
}

.btn-detail {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
    width: 100%;
}

.btn-detail:hover {
    background: var(--secondary-color);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
}

.modal-content {
    background: white;
    margin: 5% auto;
    padding: 2rem;
    max-width: 800px;
    border-radius: 12px;
    position: relative;
}

.close {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-light);
}

.close:hover {
    color: var(--text-color);
}

/* Skills Section */
.skills {
    padding: 80px 0;
    background: var(--bg-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-item {
    text-align: center;
    padding: 2rem;
    background: var(--bg-light);
    border-radius: 12px;
    transition: transform 0.3s;
}

.skill-item:hover {
    transform: translateY(-5px);
}

.skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.skill-item h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.skill-item p {
    color: var(--text-light);
}

/* Contact Section */
.contact {
    padding: 80px 0;
    background: var(--bg-light);
}

.contact-content {
    text-align: center;
}

.contact-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-light);
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-color);
    box-shadow: var(--shadow);
    transition: all 0.3s;
}

.contact-link:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-lg);
}

.contact-link .icon {
    font-size: 1.5rem;
}

/* Footer */
.footer {
    padding: 2rem 0;
    background: var(--text-color);
    color: white;
    text-align: center;
}

.footer .credit {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}
```

### 반응형 디자인 (css/responsive.css)
```css
/* Tablet */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--shadow-lg);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: flex;
    }

    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-image {
        order: -1;
    }

    .hero-image img {
        margin: 0 auto;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .cta-buttons {
        justify-content: center;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .hero h1 {
        font-size: 1.75rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        text-align: center;
    }
}
```

### JavaScript 인터랙션 (js/main.js)
```javascript
// 모바일 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 메뉴 클릭시 모바일 메뉴 닫기
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 스크롤시 네비게이션 스타일 변경
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// 프로젝트 상세 모달
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');
const detailButtons = document.querySelectorAll('.btn-detail');

// 프로젝트 상세 데이터 (실제로는 여기에 각 프로젝트의 상세 정보를 저장)
const projectDetails = {
    1: {
        title: '프로젝트 제목 1',
        period: '2024.01 - 2024.03',
        role: 'Product Manager',
        overview: '프로젝트에 대한 전반적인 설명...',
        problem: '해결하고자 했던 문제에 대한 상세 설명...',
        process: [
            '1. 사용자 리서치 진행 (30명 인터뷰)',
            '2. 페르소나 및 사용자 여정 맵 작성',
            '3. 우선순위 설정 및 로드맵 수립',
            '4. 개발팀과 협업하여 MVP 개발',
            '5. A/B 테스팅 진행',
            '6. 데이터 분석 및 개선'
        ],
        solution: '접근 방법 및 해결책 상세 설명...',
        result: [
            '전환율 25% 증가',
            'MAU 10,000명 달성',
            '사용자 만족도 4.5/5.0',
            '이탈률 15% 감소'
        ],
        learnings: '이 프로젝트를 통해 배운 점...',
        images: ['images/project1-detail1.jpg', 'images/project1-detail2.jpg']
    }
    // 다른 프로젝트들 추가...
};

detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="project-meta">${project.role} | ${project.period}</p>

            <div class="modal-section">
                <h3>📋 Overview</h3>
                <p>${project.overview}</p>
            </div>

            <div class="modal-section">
                <h3>❓ Problem</h3>
                <p>${project.problem}</p>
            </div>

            <div class="modal-section">
                <h3>🔄 Process</h3>
                <ul>
                    ${project.process.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>💡 Solution</h3>
                <p>${project.solution}</p>
            </div>

            <div class="modal-section">
                <h3>📊 Results</h3>
                <ul class="results-list">
                    ${project.result.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>💭 Key Learnings</h3>
                <p>${project.learnings}</p>
            </div>
        `;

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    observer.observe(el);
});

// 부드러운 스크롤 (이미 CSS에 있지만 추가 제어용)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

## 콘텐츠 작성 가이드

### 프로젝트 작성시 주의사항
1. **정량적 지표 포함**: 반드시 숫자로 성과 표현
   - ❌ "사용자가 많이 증가했습니다"
   - ✅ "MAU 35% 증가 (8,000명 → 10,800명)"

2. **Problem-Solution-Impact 구조 명확히**
   - Problem: 무엇이 문제였는가?
   - Solution: 어떻게 접근했는가?
   - Impact: 어떤 결과를 만들었는가?

3. **본인의 역할 명확히**
   - 팀 프로젝트의 경우 본인이 담당한 부분 명시
   - PM으로서의 의사결정 과정 강조

4. **데이터 기반 의사결정 강조**
   - 어떤 데이터를 수집했는지
   - 데이터를 어떻게 분석했는지
   - 데이터 기반으로 어떤 결정을 내렸는지

## 구현 체크리스트

### Phase 1: 기본 구조
- [ ] HTML 기본 구조 작성
- [ ] CSS 기본 스타일 적용
- [ ] 네비게이션 구현
- [ ] Hero 섹션 완성

### Phase 2: 콘텐츠 섹션
- [ ] About 섹션 완성
- [ ] Projects 섹션 (최소 3개 프로젝트)
- [ ] Skills 섹션
- [ ] Contact 섹션

### Phase 3: 인터랙션
- [ ] 모바일 메뉴 동작
- [ ] 프로젝트 모달 구현
- [ ] 스크롤 애니메이션
- [ ] 반응형 디자인 테스트

### Phase 4: 최적화
- [ ] 이미지 최적화 (WebP 포맷 권장)
- [ ] 로딩 속도 개선
- [ ] SEO 메타태그 추가
- [ ] 크로스 브라우저 테스트

### Phase 5: 배포
- [ ] GitHub Pages 설정
- [ ] 커스텀 도메인 연결 (선택)
- [ ] Google Analytics 연결 (선택)

## 추가 개선 아이디어

### 단계적 고도화 (선택사항)
1. **다크모드 추가**
   - CSS 변수를 활용한 테마 전환
   - localStorage로 사용자 선호도 저장

2. **애니메이션 라이브러리**
   - AOS (Animate On Scroll) 추가
   - 더 풍부한 스크롤 애니메이션

3. **타이핑 효과**
   - Hero 섹션 타이틀에 타이핑 효과
   - Typed.js 같은 가벼운 라이브러리 활용

4. **프로젝트 필터링**
   - 카테고리별 필터 (앱, 웹, 리서치 등)
   - JavaScript로 간단한 필터 구현

5. **이메일 폼 기능**
   - Formspree 또는 EmailJS 연동
   - 백엔드 없이 이메일 수신 가능

## 리소스 및 참고사항

### 무료 이미지/아이콘
- **Unsplash**: 고품질 무료 이미지
- **Iconify**: 다양한 무료 아이콘
- **Flaticon**: 프로젝트 아이콘

### 색상 팔레트 도구
- **Coolors**: 색상 조합 생성
- **Adobe Color**: 전문적인 색상 팔레트

### 폰트
- **Google Fonts**: Pretendard, Inter, Roboto 추천
- 시스템 폰트 사용 (현재 구현됨)

### 테스트 도구
- **Google PageSpeed Insights**: 성능 측정
- **BrowserStack**: 크로스 브라우저 테스트
- **Lighthouse**: 전반적인 품질 검사

## 예상 작업 시간
- **기본 구조**: 2-3시간
- **콘텐츠 작성**: 4-6시간 (프로젝트 정리 포함)
- **스타일링 및 반응형**: 3-4시간
- **인터랙션 구현**: 2-3시간
- **테스트 및 최적화**: 2-3시간
- **총 예상 시간**: 13-19시간

## 시작하기

이 가이드를 기반으로 Claude Code에서 다음 명령으로 시작하세요:

```
이 CLAUDE.md 파일을 기반으로 PM 포트폴리오 웹사이트를 구현해주세요.
먼저 index.html 파일부터 만들어주세요.
```

행운을 빕니다! 🚀
