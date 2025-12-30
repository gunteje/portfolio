import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// --- Types ---
interface Project {
  id: number;
  title: string;
  period: string;
  client: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
  category: 'C#' | 'Web' | 'DB' | 'C++';
}

// --- Icons ---
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

// --- Full Data ---
const ALL_PROJECTS: Project[] = [
  {
    id: 24,
    title: "신성통상 차세대 POS 개발",
    period: "2025.03 ~ 2025.10",
    client: "(주)신성통상",
    company: "(주)아이와이씨앤씨",
    role: "AD, PG",
    tech: ["C#", "WPF", "MSSQL", "Web API"],
    category: 'C#',
    description: "차세대 POS 시스템 구축 및 결제/매장 관리 프로세스 개발"
  },
  {
    id: 23,
    title: "GS 칼텍스 컴플라이언스 실사 개발",
    period: "2024.11 ~ 2025.02",
    client: "(주)GS 칼텍스",
    company: "(주)GS ITM",
    role: "AD, PG",
    tech: ["ASP.NET", "MSSQL", "Web API"],
    category: 'Web',
    description: "컴플라이언스 대응을 위한 내부 통제 시스템 및 리포팅 개발"
  },
  {
    id: 22,
    title: "GS 칼텍스 바로주유 개발",
    period: "2024.01 ~ 2024.10",
    client: "(주)GS 칼텍스",
    company: "(주)도시바",
    role: "AD, PG",
    tech: ["ASP.NET Core", "MSSQL", "Web API", "Socket"],
    category: 'Web',
    description: "주유소 O2O 결제 서비스 '바로주유' 시스템 기능 개선 및 연동"
  },
  {
    id: 21,
    title: "이마트 24 모바일 POS 개발",
    period: "2023.06 ~ 2023.12",
    client: "(주)이마트",
    company: "(주)다오링크",
    role: "AD, PG",
    tech: ["C#", "Xamarin", "MSSQL", "SQLite", "Web API"],
    category: 'C#',
    description: "안드로이드/iOS 대응 모바일 POS 하이브리드 앱 백엔드 및 로직 개발"
  },
  {
    id: 20,
    title: "롯데 백화점 POS 운영 개발",
    period: "2023.03 ~ 2023.05",
    client: "(주)롯데백화점",
    company: "(주)버텍스 ID",
    role: "PG, SM",
    tech: ["C#", "WPF", "MSSQL", "Window Service", "Socket"],
    category: 'C#',
    description: "백화점 결제 시스템 운영 및 신규 결제 수단 연동 처리"
  },
  {
    id: 19,
    title: "SK 하이닉스 (품질: 베트남 연계 개발)",
    period: "2022.03 ~ 2023.02",
    client: "(주)SK 하이닉스",
    company: "(주)밀리언웨어",
    role: "AD, PG",
    tech: ["C#", "Winform", "Oracle", "Web API"],
    category: 'C#',
    description: "글로벌 생산 공장 간 품질 데이터 연동 및 분석 시스템 구축"
  },
  {
    id: 18,
    title: "SK 이노베이션 (품질: 조립 공정 개발)",
    period: "2021.10 ~ 2022.02",
    client: "(주)SK 이노베이션",
    company: "(주)밀리언웨어",
    role: "PL, PG",
    tech: ["C#", "Winform", "Oracle", "Web API"],
    category: 'C#',
    description: "배터리 조립 공정 품질 관리 시스템(QMS) 기능 개발"
  },
  {
    id: 17,
    title: "CGV 티켓판매기 키오스크",
    period: "2020.07 ~ 2021.09",
    client: "(주)CGV",
    company: "(주)GBSNC",
    role: "PG",
    tech: ["C#", "WPF", "Oracle", "2-tier"],
    category: 'C#',
    description: "무인 티켓 발권기 UI/UX 리뉴얼 및 예매 시스템 연동"
  },
  {
    id: 16,
    title: "벤츠 코리아 CRM",
    period: "2020.02 ~ 2020.06",
    client: "(주)DAIMLER KOREA",
    company: "(주)엔시스템",
    role: "PL, PG",
    tech: ["ASP.NET MVC", "MSSQL", "Web API"],
    category: 'Web',
    description: "고객 관계 관리 시스템 기능 개선 및 데이터 마이그레이션"
  },
  {
    id: 15,
    title: "지마켓 어드민",
    period: "2019.09 ~ 2020.01",
    client: "(주)이베이",
    company: "(주)프리즘위버",
    role: "PG",
    tech: ["ASP.NET MVC", "MSSQL", "Web API"],
    category: 'Web',
    description: "이커머스 판매자/운영자용 백오피스 어드민 기능 개발"
  },
  {
    id: 14,
    title: "이마트 24 POS (하이패스, 페이코 개발)",
    period: "2019.04 ~ 2019.08",
    client: "(주)신세계",
    company: "(주)디와이즈",
    role: "PG",
    tech: ["C#", "WinForm", "Oracle", "Web API"],
    category: 'C#',
    description: "결제 수단 다양화(하이패스, 페이코)를 위한 POS 모듈 개발"
  },
  {
    id: 13,
    title: "CGV 매점 키오스크",
    period: "2018.12 ~ 2019.03",
    client: "(주)CGV",
    company: "(주)큐보스",
    role: "AD, PL, PG",
    tech: ["C#", "WPF", "MSSQL", "Web API"],
    category: 'C#',
    description: "영화관 매점 주문 키오스크 소프트웨어 개발"
  },
  {
    id: 12,
    title: "Atomy 솔루션 (콜센터, 신기능 업무)",
    period: "2018.03 ~ 2018.12",
    client: "(주)애터미",
    company: "(주)다솜에스엔씨",
    role: "AD, PG",
    tech: ["C#", "WPF", "Oracle 11g", "Web API"],
    category: 'C#',
    description: "글로벌 쇼핑몰 콜센터 상담 시스템 및 신규 업무 기능 개발"
  },
  {
    id: 11,
    title: "TPSS System(EAI)",
    period: "2017.06 ~ 2018.02",
    client: "(주)삼성전자",
    company: "(주)오픈에스지",
    role: "PG, PL",
    tech: ["Tibco Business", "Oracle 11g"],
    category: 'DB',
    description: "반도체 생산 설비 데이터 연계(EAI) 시스템 구축"
  },
  {
    id: 10,
    title: "다변량 웨이퍼 불량 분석 시스템",
    period: "2016.11 ~ 2017.05",
    client: "(주)하이닉스",
    company: "(주)오픈에스지",
    role: "PG",
    tech: ["C#", "Winform", "PostgreSQL", "Web API"],
    category: 'C#',
    description: "웨이퍼 불량 원인 분석을 위한 데이터 시각화 및 분석 툴 개발"
  },
  {
    id: 9,
    title: "디지털사이니즈 / KT 판매관리 시스템",
    period: "2015.06 ~ 2016.10",
    client: "(주)KT",
    company: "(주)인텔리안시스템즈",
    role: "PG, SM, OP",
    tech: ["ASP.NET MVC", "Java(Spring)", "MSSQL 2008"],
    category: 'Web',
    description: "전국 매장 디스플레이 광고 관리 및 대리점 판매 관리 시스템"
  },
  {
    id: 8,
    title: "브링 앱",
    period: "2015.01 ~ 2015.05",
    client: "(주)브링",
    company: "(주)브링",
    role: "PG, AD, DBA",
    tech: ["ASP.NET MVC", "MSSQL 2012", "Web API"],
    category: 'Web',
    description: "신규 모바일 앱 서비스 백엔드 및 데이터베이스 설계"
  },
  {
    id: 7,
    title: "롯데 대홍 쿠폰시스템",
    period: "2014.01 ~ 2014.12",
    client: "(주)롯데",
    company: "(주)쿠프마케팅",
    role: "AD, PG",
    tech: ["C#", "Winform", "MSSQL 2012", "Web API"],
    category: 'C#',
    description: "모바일 쿠폰 발송 및 정산 관리 시스템 개발"
  },
  {
    id: 6,
    title: "스크린도어 관제 시스템",
    period: "2013.11 ~ 2013.12",
    client: "(주)GS 네오텍",
    company: "(주)에스티아이엔지",
    role: "AD, PG",
    tech: ["C++", "File Log", "Socket"],
    category: 'C++',
    description: "지하철 스크린도어 상태 실시간 모니터링 및 제어 시스템"
  },
  {
    id: 5,
    title: "온나라 부동산 고도화 (모바일웹)",
    period: "2013.10 ~ 2013.12",
    client: "(주)LH 공사",
    company: "(주)에코소프트",
    role: "PG",
    tech: ["JSP", "eGovFrame", "Oracle 9i"],
    category: 'Web',
    description: "부동산 공공 데이터 제공 모바일 웹 서비스 고도화"
  },
  {
    id: 4,
    title: "Primus 영화관 웹 접근성 리뉴얼",
    period: "2013.04 ~ 2013.09",
    client: "(주)CJ Systems",
    company: "(주)유나이티드",
    role: "AD, PG",
    tech: ["ASP.NET MVC", "MSSQL 2008", "Web API"],
    category: 'Web',
    description: "장애인 차별 금지법 준수를 위한 영화관 예매 사이트 접근성 개선"
  },
  {
    id: 3,
    title: "인천 아시안게임 통신모듈 개발",
    period: "2012.12 ~ 2013.04",
    client: "인천시청",
    company: "(주)쌍용정보통신",
    role: "AD, PG",
    tech: ["C#", "Winform", "MSSQL 2008", "Socket"],
    category: 'C#',
    description: "대회 운영 시스템과 경기 장비 간 데이터 송수신 모듈 개발"
  },
  {
    id: 2,
    title: "우리 천주교 ERP",
    period: "2012.07 ~ 2012.11",
    client: "(주)우리 IFS",
    company: "(주)트라이엔소프트",
    role: "PG",
    tech: ["ASP.NET MVC", "MSSQL 2008", "Web API"],
    category: 'Web',
    description: "교구 및 본당 행정 관리를 위한 ERP 웹 시스템 개발"
  },
  {
    id: 1,
    title: "PCB NAVIGATOR (오류검출툴)",
    period: "2011.03 ~ 2011.09",
    client: "(주)삼성전자",
    company: "(주)메리테크",
    role: "AD, PG",
    tech: ["C++", "Excel DB", "Socket"],
    category: 'C++',
    description: "PCB 설계 도면의 오류를 자동으로 검출하는 CAD 보조 툴 개발"
  },
  {
    id: 0,
    title: "PMS / U-detect / GS CarPortal 등",
    period: "2006.01 ~ 2011.02",
    client: "대림산업, KT, 암웨이 등",
    company: "엑스퍼넷 등",
    role: "Developer",
    tech: ["PHP", "Delphi", "ASP.NET", "C++", "MSSQL"],
    category: 'C++',
    description: "초창기 유비쿼터스 영상 감지, PMS 리포팅, 모바일 및 차트 시스템 다수 개발"
  }
];

const SKILLS = [
  { category: "Application", list: ["C#", "C++", "WPF", "WinForm", "WCF", "Xamarin", "WPF MVVM", "WinSock", "IOCP"] },
  { category: "Web & Server", list: ["ASP.NET", "ASP.NET Core", "Java Spring", "JSP", "eGovFrame", "PHP", "CodeIgniter"] },
  { category: "Database & ETC", list: ["MSSQL", "Oracle", "PostgreSQL", "SQLite", "Tibco"] }
];

const MILESTONES = [
  {
    date: "2023 - 현재",
    desc: [
      "신성통상 차세대 POS 구축 프로젝트 완료",
      "GS칼텍스 컴플라이언스 실사 시스템 프로젝트 완료",
      "GS칼텍스 바로주유 결제 서비스 프로젝트 완료",
      "이마트24 모바일 POS 개발 프로젝트 완료",
      "롯데백화점 POS 운영 및 기능 개선 프로젝트 완료"
    ]
  },
  {
    date: "2018 - 2022",
    desc: [
      "SK하이닉스 품질 데이터 연동 시스템 프로젝트 완료",
      "SK이노베이션 품질 관리 시스템(QMS) 프로젝트 완료",
      "CGV 티켓판매기 키오스크 리뉴얼 프로젝트 완료",
      "벤츠 코리아 CRM 시스템 고도화 프로젝트 완료",
      "지마켓 어드민 백오피스 개발 프로젝트 완료",
      "이마트24 POS 결제 모듈 개발 프로젝트 완료",
      "CGV 매점 주문 키오스크 시스템 프로젝트 완료",
      "애터미 글로벌 콜센터 솔루션 프로젝트 완료"
    ]
  },
  {
    date: "2012 - 2017",
    desc: [
      "삼성전자 TPSS 설비 데이터 연계(EAI) 프로젝트 완료",
      "SK하이닉스 웨이퍼 불량 분석 시스템 프로젝트 완료",
      "KT 판매관리 및 디지털사이니즈 시스템 프로젝트 완료",
      "브링 모바일 앱 서비스 백엔드 프로젝트 완료",
      "롯데 대홍 모바일 쿠폰 시스템 프로젝트 완료",
      "지하철 스크린도어 관제 시스템 프로젝트 완료",
      "LH 온나라 부동산 모바일 고도화 프로젝트 완료",
      "CJ Primus 영화관 웹 접근성 리뉴얼 프로젝트 완료",
      "인천아시안게임 데이터 통신모듈 프로젝트 완료",
      "우리 천주교 행정 ERP 시스템 프로젝트 완료"
    ]
  },
  {
    date: "2006 - 2011",
    desc: [
      "삼성전자 PCB NAVIGATOR 오류검출툴 프로젝트 완료",
      "S-OIL 보너스카드 외부 인터페이스 프로젝트 완료",
      "미라지웍스 클라우드 컨트롤센터 시스템 프로젝트 완료",
      "GS CarPortal 자동차 포털 백엔드 프로젝트 완료",
      "암웨이 모바일 비즈니스 시스템 프로젝트 완료",
      "KT U-detect 지능형 영상 감지 시스템 프로젝트 완료",
      "대림산업 PMS 리포팅 시스템 개발 프로젝트 완료"
    ]
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<'All' | 'C#' | 'Web' | 'DB' | 'C++'>('All');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = ALL_PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <a href="#" className="logo gradient-text">
            <img src="logo.svg" alt="GT" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} />
            ANDERSON
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#milestones">Career</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container">
          <h2>Trustworthy & Sincere</h2>
          <h1><span className="gradient-text">기본을 지키는<br />19년차 개발자</span></h1>
          <p>
            2006년부터 묵묵히 제 자리를 지키며, 윈도우 애플리케이션부터 웹 서비스까지
            비즈니스의 핵심을 정확하게 구현해 왔습니다. 화려함보다 단단한 신뢰를 지향합니다.
          </p>
          <a href="#projects" className="btn-primary">프로젝트 이력 보기</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title">소중한 인연과 가치</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            "기술은 비즈니스를 돕는 도구이지만, 그것을 만드는 것은 사람의 정성입니다."<br /><br />
            수많은 대기업과 공공기관의 신뢰를 바탕으로, 단순한 개발을 넘어
            지속 가능한 시스템을 만들기 위해 오늘도 성실하게 나아갑니다.
          </p>
        </div>
      </section>

      {/* Milestones (Timeline) */}
      <section id="milestones" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">성실함이 쌓여온 시간</h2>
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{m.date}</div>
                  <div className="timeline-company">
                    {m.desc.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">보유 역량</h2>
          <div className="skills-container">
            {SKILLS.map((s, i) => (
              <div key={i} className="skill-card">
                <h3>
                  {i === 0 ? <CodeIcon /> : i === 1 ? <LayoutIcon /> : <DatabaseIcon />}
                  {s.category}
                </h3>
                <div className="skill-list">
                  {s.list.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">현장의 결과물들</h2>

          <div className="filter-tabs">
            {(['All', 'C#', 'Web', 'DB', 'C++'] as const).map(t => (
              <button
                key={t}
                className={`filter-tab ${filter === t ? 'active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>



          <div className="projects-grid">
            {filteredProjects.map(p => (
              <div key={p.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon-box">
                    <LockIcon />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{p.period}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                  {p.client} | {p.role}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {p.tech.map((t, i) => (
                      <span key={i} className="project-tag">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Role Legend Footer */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.7, marginBottom: '1.5rem' }}>
              * 프로젝트 역할: PM(관리), PL(리더), AD(설계), PG(개발), SP(시스템), SM(유지보수), OP(운영), DBA(DB)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="section-title">언제든 문의해 주세요</h2>
          <p style={{ marginBottom: '3rem' }}>
            함께 고민하고 해결하는 즐거움을 아는 개발자입니다.<br />
            아래 내용을 남겨주시면 정성껏 답변 드리겠습니다.
          </p>

          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();

            // --- 연동 및 보안 정보 ---
            const SERVICE_ID = "service_r5yaf9g";
            const TEMPLATE_ID = "template_b261ynr";
            const PUBLIC_KEY = "iF3zOaoqrIAXxNmyX";
            // ------------------

            // Spam Honeypot Check
            const formData = new FormData(e.currentTarget);
            if (formData.get('bot_field')) {
              console.log("Spam detected");
              return;
            }

            const btn = e.currentTarget.querySelector('button');
            if (btn) {
              btn.innerText = "메시지 보내는 중...";
              btn.disabled = true;
            }

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
              .then(() => {
                alert("문의가 성공적으로 전달되었습니다! 조만간 답변 드리겠습니다.");
                if (btn) {
                  btn.innerText = "전송 완료!";
                  btn.style.background = "#10b981";
                }
                (e.target as HTMLFormElement).reset();
              }, (err) => {
                alert("전송에 실패했습니다. 이메일(airnbsong@gmail.com)로 직접 연락 부탁드립니다.");
                console.error(err);
                if (btn) {
                  btn.innerText = "다시 시도";
                  btn.disabled = false;
                }
              });
          }}>
            {/* Honeypot field for spam protection (hidden from users) */}
            <input type="text" name="bot_field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div style={{ display: 'grid', gap: '1.5rem', textAlign: 'left' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>성함</label>
                <input name="from_name" type="text" placeholder="성함을 입력해주세요" required style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>이메일</label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>연락처</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                  title="010-0000-0000 형식으로 입력해주세요"
                  required
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>문의 내용</label>
                <textarea name="message" rows={5} placeholder="문의하실 내용을 정확히 입력해주세요" required style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', marginTop: '1rem', fontSize: '1rem', fontWeight: '700' }}>
                메시지 보내기
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Anderson Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
