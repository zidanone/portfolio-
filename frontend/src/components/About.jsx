import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

function About({ profile }) {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  if (!profile) return null;

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('about.label')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.subtitle')}</p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>{profile.bio}</p>

              <div className="about-details">
                {profile.location && (
                  <div className="about-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{profile.location}</span>
                  </div>
                )}
                <div className="about-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{profile.email}</span>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card glass-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('about.stats.projects')}</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">{t('about.stats.experience')}</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t('about.stats.teaching')}</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('about.stats.openSource')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
