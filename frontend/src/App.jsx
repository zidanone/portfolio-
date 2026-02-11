import { useState, useEffect } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import { getOverview } from './api';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Teaching from './components/Teaching';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOverview()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load portfolio data:', err);
        setError('Unable to connect to the server. Please try again later.');
        setLoading(false);
      });
  }, []);

  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader">
          <div className="loader-ring"></div>
          <span className="loader-text">{t('app_loading') || 'Loading...'}</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-screen">
        <div className="error-box">
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            {t('app_retry') || 'Retry'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero profile={data?.profile} />
        <About profile={data?.profile} />
        <Skills skills={data?.skills || []} />
        <Projects projects={data?.projects || []} />
        <Experience experiences={data?.experiences || []} />
        <Education education={data?.education || []} />
        <Teaching />
        <Certifications certifications={data?.certifications || []} />
        <Contact />
      </main>
      <Footer profile={data?.profile} />
    </div>
  );
}

export default App;
