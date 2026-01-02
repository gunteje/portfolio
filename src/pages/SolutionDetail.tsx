
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_PROJECTS } from '../data';

function SolutionDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = ALL_PROJECTS.find(p => p.id.toString() === id);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <button className="btn-primary" onClick={() => navigate('/products')}>Back to Solutions</button>
            </div>
        );
    }

    return (
        <motion.section
            className="section"
            style={{ minHeight: '100vh', paddingTop: '100px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <div className="container">
                <div className="project-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem' }}>
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{project.title}</h1>

                    </div>

                    <div style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1rem auto' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Overview</h3>
                    </div>

                    {project.images && project.images.length > 0 ? (
                        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', marginBottom: '3rem' }}>
                            <img src={project.images[0]} alt={project.title} style={{ width: '100%', display: 'block' }} />
                        </div>
                    ) : project.imageUrl && (
                        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', marginBottom: '3rem' }}>
                            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', display: 'block' }} />
                        </div>
                    )}



                    {/* Sub Images */}
                    {project.images && project.images.length > 1 && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem', alignItems: 'start' }}>
                            {project.images.slice(1).map((img, idx) => (
                                <div key={idx} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                                    <img src={img} alt={`${project.title} detail ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            ))}
                        </div>
                    )}



                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Tech Stack</h3>
                        <div className="project-tags" style={{ justifyContent: 'left' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} className="project-tag" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default SolutionDetail;
