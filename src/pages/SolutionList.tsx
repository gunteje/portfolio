
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_PROJECTS } from '../data';
import { LockIcon } from '../icons';

function SolutionList() {
    const navigate = useNavigate();
    const solutions = ALL_PROJECTS.filter(p => p.category === 'Products');

    return (
        <motion.section
            style={{ minHeight: '100vh', padding: '120px 10px 5rem 0' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Products</h2>
                <p style={{ textAlign: 'left', paddingLeft: '4px', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                    성장을 가속화하는 전문 제품을 만나보세요.
                </p>

                <div className="solution-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {solutions.map(p => (
                        <div
                            key={p.id}
                            className="solution-card"
                            style={{
                                cursor: 'pointer',
                                padding: '2rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => navigate(`/products/${p.id}`)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.background = 'var(--bg-secondary)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    padding: '1rem',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    borderRadius: '12px',
                                    color: '#38bdf8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <LockIcon />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.2rem' }}>{p.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Premium Trading Solution</p>
                                </div>
                            </div>

                            <div style={{ color: 'var(--text-secondary)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default SolutionList;
