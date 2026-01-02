
export interface Project {
    id: number;
    title: string;
    period: string;
    client: string;
    company: string;
    role: string;
    description: string;
    tech: string[];
    category: 'C#' | 'Web' | 'DB' | 'C++' | 'Products';
    imageUrl?: string;
    images?: string[];
    features?: string[];
}

export const ALL_PROJECTS: Project[] = [
    {
        id: 25,
        title: "TradeVault",
        period: "2025.12 ~ 현재 (판매 승인 대기)",
        client: "자체 제품",
        company: "Anderson Lab",
        role: "Full Cycle (기획/개발/디자인)",
        tech: ["Electron", "React", "TypeScript"],
        category: 'Products',
        description: "우리는 매매의 성과보다 그 이면에 담긴 당신만의 '전략적 판단과 통찰'에 더욱 주목합니다. TradeVault는 단순한 기록장을 넘어, 당신의 자산을 지키는 동반자가 될 것입니다.",
        images: ["/portfolio/tradevault-preview.png", "/portfolio/tradevault-settings.png", "/portfolio/tradevault-ai-report.png"],
        features: ["바이낸스 90일 심층 동기화", "지능형 포지션 그룹화 로직", "AI 기반 매매 패턴 정밀 진단", "다국어 지원 및 전역 테마 시스템"]
    },
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

export const SKILLS = [
    { category: "Application", list: ["C#", "C++", "WPF", "WinForm", "WCF", "Xamarin", "IOCP"] },
    { category: "Web & Server", list: ["ASP.NET", "ASP.NET Core", "Spring", "JSP", "eGovFrame", "PHP", "CodeIgniter"] },
    { category: "Database & ETC", list: ["MSSQL", "Oracle", "PostgreSQL", "SQLite", "Tibco"] }
];

export const MILESTONES = [
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
