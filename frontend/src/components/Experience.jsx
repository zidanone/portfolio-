import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import './Experience.css';

function Experience({ experiences }) {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('nav.experience')}</span>
            <h2 className="section-title">{t('projects.label')}</h2>
            <p className="section-subtitle">My professional journey so far</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="timeline-item"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="timeline-marker">
                  <div className={`marker-dot ${exp.current ? 'active' : ''}`}></div>
                  {idx < experiences.length - 1 && <div className="marker-line"></div>}
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-company">
                        {exp.company_url ? (
                          <a href={exp.company_url} target="_blank" rel="noopener noreferrer">
                            {exp.company} ↗
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>
                    <span className="timeline-date">
                      {new Date(exp.start_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      {' — '}
                      {exp.current
                        ? 'Present'
                        : new Date(exp.end_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <p className="timeline-desc">{exp.description}</p>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
