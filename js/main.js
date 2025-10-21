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

// 프로젝트 상세 데이터
const projectDetails = {
    1: {
        title: '사용자 온보딩 개선 프로젝트',
        period: '2024.03 - 2024.05',
        role: 'Product Manager',
        overview: '신규 사용자의 이탈률이 높아 서비스 성장에 병목이 발생하는 문제를 해결하기 위한 온보딩 플로우 개선 프로젝트입니다. 사용자 리서치와 데이터 분석을 통해 핵심 문제를 파악하고, 단계별 가이드와 인터랙티브 튜토리얼을 도입하여 사용자 경험을 개선했습니다.',
        problem: '신규 사용자의 70%가 첫 주 내에 이탈하며, 핵심 기능 사용률이 낮은 문제가 발생했습니다. 데이터 분석 결과, 사용자들이 서비스의 가치를 이해하지 못하고 초기 설정 단계에서 어려움을 겪는다는 것을 발견했습니다.',
        process: [
            '30명의 신규 사용자 대상 인터뷰 진행 및 주요 Pain Point 도출',
            '사용자 여정 맵(User Journey Map) 작성 및 이탈 구간 분석',
            '경쟁사 온보딩 플로우 벤치마킹 및 Best Practice 연구',
            '우선순위 설정 (MoSCoW 방법론 활용) 및 로드맵 수립',
            '와이어프레임 제작 및 디자이너와 협업하여 프로토타입 개발',
            '개발팀과 스프린트 계획 수립 및 MVP 개발 진행',
            'A/B 테스팅을 통한 최적 플로우 검증 (3가지 버전 테스트)',
            'Google Analytics 및 Amplitude를 통한 지표 모니터링',
            '사용자 피드백 수집 및 2차 개선 진행'
        ],
        solution: '사용자 인터뷰 및 데이터 분석을 기반으로 온보딩 플로우를 3단계로 재설계했습니다. 각 단계마다 명확한 가치 제안과 인터랙티브 가이드를 추가하여 사용자가 직접 체험하며 학습할 수 있도록 개선했습니다. 또한 프로그레스 바를 추가하여 현재 위치를 명확히 하고, 선택적 스킵 기능을 제공하여 숙련된 사용자의 불편을 최소화했습니다.',
        result: [
            '7일 리텐션 35% 증가 (42% → 57%)',
            '핵심 기능 사용률 48% 향상 (25% → 37%)',
            '사용자 만족도 4.2/5.0 달성 (기존 3.1/5.0)',
            '온보딩 완료율 62% 증가 (38% → 62%)',
            '평균 온보딩 완료 시간 40% 단축 (5분 → 3분)',
            '고객 지원 문의 건수 28% 감소'
        ],
        learnings: '데이터만으로는 사용자의 진짜 니즈를 파악하기 어렵다는 것을 배웠습니다. 정성적 리서치(인터뷰)와 정량적 데이터 분석을 결합했을 때 가장 정확한 인사이트를 얻을 수 있었습니다. 또한 A/B 테스팅을 통해 가설을 검증하는 과정에서 예상과 다른 결과가 나올 수 있음을 경험하며, 데이터 기반 의사결정의 중요성을 다시 한 번 깨달았습니다.'
    },
    2: {
        title: '검색 기능 고도화',
        period: '2024.01 - 2024.03',
        role: 'Product Manager',
        overview: '사용자가 원하는 콘텐츠를 효과적으로 찾지 못해 검색 이탈률이 높은 문제를 해결하기 위한 프로젝트입니다. 검색 로그 분석과 사용자 행동 패턴 연구를 통해 자동완성, 추천 검색어, 다단계 필터링 기능을 도입하여 검색 경험을 개선했습니다.',
        problem: '사용자가 원하는 콘텐츠를 찾지 못해 검색 이탈률이 60%에 달했습니다. SQL로 검색 로그를 분석한 결과, 오타, 모호한 검색어, 결과 부족 등이 주요 원인으로 나타났습니다. 특히 검색 결과가 너무 많거나 적을 때 사용자가 쉽게 포기하는 경향을 발견했습니다.',
        process: [
            'SQL을 활용한 검색 로그 데이터 분석 (최근 3개월, 50만건 이상)',
            '검색 실패 패턴 분류 및 우선순위 설정',
            '사용자 검색 행동 패턴 연구 (히트맵, 세션 리플레이 분석)',
            '검색 알고리즘 개선 방안 기획 (자동완성, 오타 교정, 동의어 처리)',
            '필터링 기능 설계 및 사용자 테스트 진행',
            '개발팀과 기술적 제약사항 논의 및 실행 계획 수립',
            '단계별 릴리즈 전략 수립 (Phase 1: 자동완성, Phase 2: 필터링)',
            '각 단계별 성과 측정 및 개선안 도출',
            '검색 추천 알고리즘 고도화 (머신러닝 기반 개인화)'
        ],
        solution: '검색 로그 분석 및 사용자 행동 패턴을 기반으로 3가지 핵심 기능을 도입했습니다. 첫째, 실시간 자동완성 기능으로 오타를 줄이고 검색 속도를 높였습니다. 둘째, 인기 검색어와 개인화 추천 검색어를 제공하여 사용자가 무엇을 찾아야 할지 쉽게 파악할 수 있도록 했습니다. 셋째, 카테고리, 가격대, 날짜 등 다단계 필터링을 추가하여 정확한 결과를 빠르게 찾을 수 있도록 개선했습니다.',
        result: [
            '검색 성공률 42% 증가 (45% → 64%)',
            '평균 체류 시간 2.3분 증가 (3.2분 → 5.5분)',
            '전환율 28% 향상 (8% → 10.2%)',
            '검색 이탈률 35% 감소 (60% → 39%)',
            '검색당 평균 결과 클릭 수 55% 증가',
            '재검색률 40% 감소 (사용자가 첫 검색에서 원하는 결과를 찾는 비율 증가)'
        ],
        learnings: 'SQL을 활용한 데이터 분석 역량이 PM에게 얼마나 중요한지 깨달았습니다. 직접 데이터를 추출하고 분석함으로써 빠르게 가설을 검증하고 의사결정을 내릴 수 있었습니다. 또한 기술적 제약사항을 이해하고 개발팀과 협업하는 과정에서, 완벽한 솔루션보다 빠른 출시와 반복적 개선이 더 효과적일 수 있음을 배웠습니다.'
    },
    3: {
        title: '커뮤니티 기능 신규 런칭',
        period: '2023.10 - 2024.01',
        role: 'Product Manager',
        overview: '사용자 간 상호작용을 활성화하고 플랫폼 재방문율을 높이기 위해 커뮤니티 기능을 신규로 런칭한 프로젝트입니다. MVP 접근 방식을 통해 빠르게 출시하고, 사용자 피드백을 기반으로 지속적으로 개선하여 성공적인 론칭을 이끌어냈습니다.',
        problem: '사용자 간 상호작용이 부족하여 플랫폼 활성도가 낮고, 재방문율이 저조했습니다. 경쟁사 대비 커뮤니티 기능이 없어 사용자들이 타 플랫폼으로 이탈하는 문제가 발생했습니다. 사용자 설문조사 결과, 70% 이상이 커뮤니티 기능을 원한다는 니즈를 확인했습니다.',
        process: [
            '사용자 니즈 조사 (설문 500명, 심층 인터뷰 20명)',
            '커뮤니티 기능 우선순위 설정 (게시글, 댓글, 좋아요, 팔로우 등)',
            '경쟁사 벤치마킹 및 차별화 포인트 도출',
            'PRD (Product Requirements Document) 작성',
            'MVP 범위 정의 (핵심 기능만 먼저 출시)',
            '와이어프레임 및 프로토타입 제작 (Figma 활용)',
            '개발팀과 스프린트 계획 수립 (3주 단위 스프린트)',
            '베타 테스트 진행 (100명 대상)',
            '피드백 수집 및 개선 후 정식 출시',
            '출시 후 지표 모니터링 및 지속적 개선'
        ],
        solution: '사용자 니즈 조사를 기반으로 커뮤니티 기능의 우선순위를 설정했습니다. MVP로 게시글 작성, 댓글, 좋아요 기능만 먼저 출시하여 빠르게 시장 반응을 확인했습니다. 베타 테스트를 통해 수집한 피드백을 즉시 반영하여 UX를 개선했으며, 정식 출시 후에도 2주마다 업데이트를 진행하여 사용자 만족도를 높였습니다. 또한 커뮤니티 가이드라인과 신고 시스템을 도입하여 건강한 커뮤니티 문화를 조성했습니다.',
        result: [
            'MAU 10,000명 달성 (출시 3개월 내)',
            '일평균 게시글 수 250개 기록',
            '댓글 참여율 55% 달성',
            'DAU/MAU 비율 45% 기록 (업계 평균 30%)',
            '평균 체류 시간 3배 증가 (2분 → 6분)',
            '재방문율 65% 증가 (주간 기준)',
            '앱 스토어 평점 3.8 → 4.3 상승'
        ],
        learnings: 'MVP 접근 방식의 중요성을 체감했습니다. 처음부터 완벽한 기능을 만들려고 하면 출시가 늦어지고, 실제 사용자 니즈와 맞지 않을 수 있습니다. 최소 기능으로 빠르게 출시하고 실제 사용자 데이터를 기반으로 개선하는 것이 훨씬 효과적이었습니다. 또한 커뮤니티는 단순히 기능을 만드는 것을 넘어, 건강한 문화를 조성하는 것이 중요하다는 것을 배웠습니다.'
    }
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
