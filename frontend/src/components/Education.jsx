import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import './Education.css';

function Education({ education }) {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="section education" id="education">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('nav.education')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">My educational journey and certifications</p>
          </div>

          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="education-card glass-card">
                <div className="edu-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5" />
                  </svg>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-field">{edu.field}</p>
                <p className="edu-institution">{edu.institution}</p>
                <span className="edu-dates">
                  {new Date(edu.start_date).getFullYear()} — {edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present'}
                </span>
                {edu.description && <p className="edu-desc">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
