import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import './Skills.css';

function Skills({ skills }) {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useLanguage();

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'Tools & DevOps', icon: '🛠️' },
  ];

  const grouped = categories.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  }));

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-header">
            <span className="section-label">{t('skills.label')}</span>
            <h2 className="section-title">{t('skills.title')}</h2>
            <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
          </div>

          <div className="skills-categories">
            {grouped.map((cat) => (
              <div key={cat.key} className="skill-category glass-card">
                <h3 className="category-title">
                  <span className="category-icon">{cat.icon}</span>
                  {cat.label}
                </h3>
                <div className="skill-list">
                  {cat.items.map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon_class}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.proficiency}%` : '0%',
                            transitionDelay: `${0.1 * cat.items.indexOf(skill)}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
