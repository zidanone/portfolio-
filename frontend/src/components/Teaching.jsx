import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Teaching.css';

function Teaching() {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  const lessons = [
    {
      title: 'Python Basics',
      icon: '🐍',
      description: 'Simplifying the fundamental concepts of Python for beginners.',
    },
    {
      title: 'Web Dev (React / Flask)',
      icon: '⚛️',
      description: 'Practical, project-based learning for building modern web apps.',
    },
    {
      title: 'Cybersecurity Fundamentals',
      icon: '🛡️',
      description: 'Understanding the core principles of digital security and defense.',
    },
  ];

  return (
    <section className="section teaching" id="teaching">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('teaching.label')}</span>
            <h2 className="section-title">{t('teaching.title')}</h2>
            <p className="section-subtitle">
              {t('teaching.subtitle')}
            </p>
          </div>

          <div className="teaching-style glass-card">
            <div className="style-header">
              <h3>{t('teaching.styles.title')}</h3>
              <p>{t('teaching.styles.subtitle')}</p>
            </div>
            <div className="style-grid">
              <div className="style-item">
                <span className="style-icon">🏗️</span>
                <h4>{t('teaching.styles.practical')}</h4>
                <p>{t('teaching.styles.practical_desc')}</p>
              </div>
              <div className="style-item">
                <span className="style-icon">💡</span>
                <h4>{t('teaching.styles.examples')}</h4>
                <p>{t('teaching.styles.examples_desc')}</p>
              </div>
              <div className="style-item">
                <span className="style-icon">🪜</span>
                <h4>{t('teaching.styles.stepbystep')}</h4>
                <p>{t('teaching.styles.stepbystep_desc')}</p>
              </div>
            </div>
          </div>

          <div className="lessons-grid">
            {lessons.map((lesson, idx) => (
              <div key={idx} className="lesson-card glass-card">
                <span className="lesson-icon">{lesson.icon}</span>
                <h3 className="lesson-title">{lesson.title}</h3>
                <p className="lesson-desc">{lesson.description}</p>
                <div className="proof-links">
                  <span className="proof-tag">Tutorials</span>
                  <span className="proof-tag">GitHub</span>
                  <span className="proof-tag">PDF Guides</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teaching;
