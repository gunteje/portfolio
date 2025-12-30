import { useState, useEffect } from 'react';

// Icons (Simple SVGs for visual enhancement)
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <a href="#" className="logo gradient-text">Portfolio</a>
          <div className="nav-links">
            <a href="#about">소개</a>
            <a href="#projects">프로젝트</a>
            <a href="#contact">문의</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="container">
          <h2>안녕하세요,</h2>
          <h1><span className="gradient-text">프론트엔드 개발자</span> 입니다</h1>
          <p>
            최신 웹 기술로 사용자 중심의 디지털 경험을 설계합니다.<br />
            복잡한 요구사항을 간결하고 아름다운 솔루션으로 풀어냅니다.
          </p>
          <div>
            <a href="#projects" className="btn-primary">프로젝트 보기</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats">
        <div className="container stats-container">
          <div className="stat-item">
            <h3>3년+</h3>
            <p>개발 경력</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>프로젝트 완료</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>고객 만족도</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title"><span className="gradient-text">주요 프로젝트</span></h2>
          <div className="projects-grid">

            {/* Project Card 1 - Enterprise (Hidden Demo) */}
            <div className="project-card">
              <div className="project-image">
                <div className="flex flex-col items-center gap-2">
                  <LockIcon />
                  <span>사내 물류 관리 시스템</span>
                </div>
                <div className="project-overlay">
                  <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LockIcon /> 보안 서약(NDA)으로 데모 불가
                  </span>
                </div>
              </div>
              <h3 className="project-title">대기업 물류 ERP 시스템</h3>
              <p className="project-desc">
                전국 물류 현황을 실시간으로 추적하고 관리하는 대시보드입니다. 대용량 데이터 처리와 실시간 차트 렌더링에 최적화되었습니다.
              </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">TanStack Query</span>
              </div>
            </div>

            {/* Project Card 2 - Public Demo */}
            <div className="project-card">
              <div className="project-image">
                <span>이커머스 플랫폼</span>
                <div className="project-overlay">
                  <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ExternalLinkIcon /> 데모 페이지 이동
                  </span>
                </div>
              </div>
              <h3 className="project-title">패션 브랜드 쇼핑몰</h3>
              <p className="project-desc">
                반응형 디자인과 결제 시스템이 연동된 쇼핑몰입니다. 장바구니, 주문 내역, 어드민 대시보드 기능을 포함하고 있습니다.
              </p>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Toss Payments</span>
              </div>
            </div>

            {/* Project Card 3 - Enterprise (Hidden Demo) */}
            <div className="project-card">
              <div className="project-image">
                <div className="flex flex-col items-center gap-2">
                  <LockIcon />
                  <span>금융 데이터 시각화</span>
                </div>
                <div className="project-overlay">
                  <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LockIcon /> 대외비 프로젝트
                  </span>
                </div>
              </div>
              <h3 className="project-title">금융 자산 관리 솔루션</h3>
              <p className="project-desc">
                복잡한 금융 데이터를 직관적인 그래프로 시각화하여 투자 포트폴리오 관리를 돕는 핀테크 솔루션입니다.
              </p>
              <div className="tags">
                <span className="tag">Vue.js</span>
                <span className="tag">D3.js</span>
                <span className="tag">Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">함께 일해볼까요?</h2>
          <p>
            새로운 프로젝트나 협업 제안은 언제나 환영합니다.<br />
            편하게 연락 주시면 빠르게 답변 드리겠습니다.
          </p>
          <a href="mailto:contact@example.com" className="btn-primary">
            이메일 보내기
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
