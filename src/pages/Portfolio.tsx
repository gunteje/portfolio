import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ALL_PROJECTS, SKILLS, MILESTONES } from '../data';
import { CodeIcon, DatabaseIcon, LayoutIcon, LockIcon } from '../icons';

function Portfolio() {
    const [filter, setFilter] = useState<'All' | 'C#' | 'Web' | 'DB' | 'C++' | 'Products'>('All');
    const [phone, setPhone] = useState("");
    const [inquiryType, setInquiryType] = useState("general");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateField = (name: string, value: string) => {
        let error = "";
        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) error = "이메일을 입력해주세요.";
            else if (!emailRegex.test(value)) error = "올바른 이메일 형식이 아닙니다.";
        } else if (name === "phone") {
            const phoneRegex = /^010-\d{3,4}-\d{4}$/;
            if (!value.trim()) error = "연락처를 입력해주세요.";
            else if (!phoneRegex.test(value)) error = "연락처 형식이 올바르지 않습니다 (010-0000-0000).";
        } else if (name === "from_name") {
            if (!value.trim()) error = "성함을 입력해주세요.";
        } else if (name === "message") {
            if (!value.trim()) error = "문의 내용을 입력해주세요.";
            else if (value.trim().length < 20) error = "문의 내용은 최소 20자 이상 입력해주세요.";
        }
        setErrors(prev => ({ ...prev, [name]: error }));
        return error === "";
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/[^0-9]/g, "");
        let formatted = "";

        if (input.length <= 3) {
            formatted = input;
        } else if (input.length <= 7) {
            formatted = `${input.slice(0, 3)}-${input.slice(3)}`;
        } else if (input.length <= 11) {
            formatted = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7)}`;
        } else {
            formatted = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7, 11)}`;
        }

        setPhone(formatted);
        if (errors.phone) validateField("phone", formatted);
    };

    const filteredProjects = ALL_PROJECTS.filter(p => filter === 'All' || p.category === filter);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero */}
            <section className="hero">
                <div className="hero-background">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
                <div className="container" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h2 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.2em', marginBottom: '1.5rem' }}>SENIOR SOFTWARE ENGINEER</h2>
                    <h1 style={{ textAlign: 'left', maxWidth: '850px', marginBottom: '1.5rem' }}>
                        기술은 비즈니스를 돕는 도구이지만,<br />
                        <span className="gradient-text">그것을 완성하는 것은 사람의 정성입니다.</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '650px', lineHeight: '1.8', marginBottom: '3rem' }}>
                        화려한 코드를 넘어, 비즈니스의 성공을 진심으로 고민하는 정성으로 보답합니다.
                    </p>

                    <div className="summary-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', padding: '2.5rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'var(--bg-secondary)', width: '100%', maxWidth: '900px' }}>
                        <div className="summary-item">
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EXPERIENCE</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>19+ Years</div>
                        </div>
                        <div className="summary-item">
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PROJECTS</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>30+ Successfully Done</div>
                        </div>
                        <div className="summary-item">
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CLIENTS</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>Samsung , SK , KT, GS, CJ, Lotte</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3.5rem' }}>
                        <a href="#projects" className="btn-primary" style={{ marginRight: '1rem' }}>프로젝트 이력</a>
                        <a href="#contact" className="btn-secondary" style={{ padding: '1rem 2.4rem', borderRadius: '4px', border: '1px solid var(--glass-border)', fontSize: '0.9rem', fontWeight: 600 }}>문의하기</a>
                    </div>
                </div>
            </section>

            {/* Milestones (Timeline) */}
            <section id="milestones" className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title">히스토리</h2>
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
                    <h2 className="section-title">프로젝트 이력</h2>

                    <div className="filter-tabs">
                        {(['All', 'Products', 'C#', 'Web', 'DB', 'C++'] as const).map(t => (
                            <button
                                key={t}
                                className={`filter-tab ${filter === t ? 'active' : ''}`}
                                onClick={() => setFilter(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
                            * PM(관리) PL(리더) AD(설계) PG(개발) SP(시스템) SM(유지보수) OP(운영) DBA(DB)
                        </p>
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
                                {p.images && p.images.length > 0 && (
                                    <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                                        <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </div>
                                )}
                                {!p.images && p.imageUrl && (
                                    <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                                        <img src={p.imageUrl} alt={p.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </div>
                                )}
                                <p className="project-desc">{p.description}</p>
                                {p.features && (
                                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                                        {p.features.map((f, idx) => <li key={idx} style={{ marginBottom: '0.3rem' }}>{f}</li>)}
                                    </ul>
                                )}
                                <div className="project-footer">
                                    <div className="project-tags">
                                        {p.tech.map((t, i) => (
                                            <span key={i} className="project-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* About Section (Philosophy) */}
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

            {/* Contact Section */}
            <section id="contact" className="section contact">
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 className="section-title">언제든 문의해 주세요</h2>
                    <p style={{ marginBottom: '3rem' }}>
                        함께 고민하고 해결하는 즐거움을 아는 개발자입니다.<br />
                        아래 내용을 남겨주시면 정성껏 답변 드리겠습니다.
                    </p>

                    <form className="contact-form" noValidate onSubmit={(e) => {
                        e.preventDefault();

                        const formData = new FormData(e.currentTarget);
                        const nameValue = formData.get('from_name') as string;
                        const emailValue = formData.get('email') as string;
                        const phoneValue = formData.get('phone') as string;
                        const messageValue = formData.get('message') as string;

                        const isNameValid = validateField("from_name", nameValue);
                        const isEmailValid = validateField("email", emailValue);
                        const isPhoneValid = validateField("phone", phoneValue);
                        const isMessageValid = validateField("message", messageValue);

                        if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
                            return;
                        }

                        // --- 연동 및 보안 정보 ---
                        const SERVICE_ID = "service_r5yaf9g";
                        const TEMPLATE_ID = "template_b261ynr";
                        const PUBLIC_KEY = "iF3zOaoqrIAXxNmyX";
                        // ------------------

                        // Spam Honeypot Check
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
                                setPhone("");
                                setErrors({});
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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>문의 유형</label>
                                <select
                                    name="inquiry_type"
                                    value={inquiryType}
                                    onChange={(e) => setInquiryType(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none', cursor: 'pointer', appearance: 'none' }}
                                >
                                    <option value="general" style={{ background: '#1a1d23' }}>프로젝트 문의</option>
                                    <option value="solution" style={{ background: '#1a1d23' }}>솔루션 구매 문의</option>
                                    <option value="education" style={{ background: '#1a1d23' }}>1:1 개인 교육/멘토링</option>
                                </select>
                            </div>

                            {inquiryType === 'education' && (
                                <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.05)', border: '1px dashed rgba(56, 189, 248, 0.3)', marginBottom: '0.5rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.8rem', fontWeight: 600 }}>🎓 개인 교육 안내</h4>
                                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.7' }}>
                                        <li>1:1 맞춤형 실무 멘토링 (C#, WPF, 아키텍처 등)</li>
                                        <li>기본 교육: 시간당 7~15만원 (협의 가능)</li>
                                        <li>커리큘럼: 상담 후 개인의 레벨과 목표에 맞춰 구성</li>
                                    </ul>
                                </div>
                            )}

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>성함</label>
                                <input
                                    name="from_name"
                                    type="text"
                                    placeholder="성함을 입력해주세요"
                                    onBlur={(e) => validateField("from_name", e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: errors.from_name ? '1px solid #ef4444' : '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                />
                                {errors.from_name && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', marginLeft: '0.5rem' }}>{errors.from_name}</p>}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>이메일</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="이메일을 입력해 주세요."
                                    onBlur={(e) => validateField("email", e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: errors.email ? '1px solid #ef4444' : '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                />
                                {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', marginLeft: '0.5rem' }}>{errors.email}</p>}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>연락처</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onBlur={(e) => validateField("phone", e.target.value)}
                                    placeholder="010-0000-0000"
                                    maxLength={13}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: errors.phone ? '1px solid #ef4444' : '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                />
                                {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', marginLeft: '0.5rem' }}>{errors.phone}</p>}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>문의 내용</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="문의하실 내용을 정확히 입력해주세요"
                                    onBlur={(e) => validateField("message", e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--glass-bg)', border: errors.message ? '1px solid #ef4444' : '1px solid var(--glass-border)', color: 'white', outline: 'none', resize: 'none' }}
                                ></textarea>
                                {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', marginLeft: '0.5rem' }}>{errors.message}</p>}
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', marginTop: '1rem', fontSize: '1rem', fontWeight: '700' }}>
                                메시지 보내기
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </motion.div>
    );
}

export default Portfolio;
