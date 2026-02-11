import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Certifications.css';

function Certifications({ certifications }) {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('certificates.label')}</span>
            <h2 className="section-title">{t('certificates.title')}</h2>
            <p className="section-subtitle">
              {t('teaching.subtitle')}
            </p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card-v2 glass-card">
                <div className="cert-image-container">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="cert-photo" />
                  ) : (
                    <div className="cert-placeholder">
                      <span className="cert-placeholder-icon">📜</span>
                    </div>
                  )}
                  {cert.verification_url && (
                    <a 
                      href={cert.verification_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-badge-link"
                    >
                      {t('certificates.verify')}
                    </a>
                  )}
                </div>
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-date-tag">
                      {new Date(cert.date_issued).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
