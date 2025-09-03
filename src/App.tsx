import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const { isDarkMode, toggleTheme, themeClasses } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const activeSection = useScrollSpy();
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.primaryBg}`}>
      <Header
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        themeClasses={themeClasses}
        t={t}
      />
      
      <Hero themeClasses={themeClasses} t={t} />
      <About themeClasses={themeClasses} t={t} />
      <Experience themeClasses={themeClasses} t={t} />
      <Projects 
        themeClasses={themeClasses} 
        t={t} 
        onOpenModal={openProjectModal} 
      />
      <Skills themeClasses={themeClasses} t={t} />
      <Education themeClasses={themeClasses} t={t} />
      <Contact themeClasses={themeClasses} t={t} />
      <Footer themeClasses={themeClasses} t={t} />

      {showProjectModal && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
          themeClasses={themeClasses}
          t={t}
        />
      )}
    </div>
  );
}

export default App;