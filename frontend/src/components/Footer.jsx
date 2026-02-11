import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

function Footer({ profile }) {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Zidane.code</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>{t('nav.home')}</h4>
            <ul>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#skills">{t('nav.skills')}</a></li>
              <li><a href="#projects">{t('nav.projects')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              {profile?.github && <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
              {profile?.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
              {profile?.twitter && <li><a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>}
              {profile?.email && <li><a href={`mailto:${profile.email}`}>Email</a></li>}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Portfolio'}. All rights reserved.</p>
          <p className="footer-tech">Built with Django & React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
