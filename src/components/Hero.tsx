import React from 'react';
import { Mail, Linkedin, Github, MapPin, ChevronDown, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

interface HeroProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ themeClasses, t }) => {
  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:saulpadilla1811@gmail.com',
      text: 'saulpadilla1811@gmail.com'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/saul-padilla-/',
      text: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Saul1218',
      text: 'GitHub'
    }
  ];

  return (
    <section id="home" className={`pt-16 min-h-screen flex items-center justify-center transition-all duration-500 ${themeClasses.heroGradient}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="w-36 h-36 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-blue-500/20 transition-transform duration-500 hover:scale-105">
            <img
              src="https://i.postimg.cc/br02gt3y/b.jpg"
              alt="Foto de perfil de Saúl Padilla"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient`}>
            Saúl Padilla
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-semibold mb-8 transition-colors duration-300 ${themeClasses.accentText}`}>
            {t('profession')}
          </h2>
          
          <p className={`text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed transition-colors duration-300 ${themeClasses.secondaryText}`}>
            {t('heroDescription')}
          </p>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contactLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group ${themeClasses.contactCard} ${themeClasses.border}`}
            >
              <link.icon className={`w-5 h-5 ${themeClasses.accentText} transition-transform group-hover:rotate-12`} />
              <span className={`${themeClasses.secondaryText} font-medium`}>{link.text}</span>
            </a>
          ))}
          
          {/* Location */}
          <div className={`flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg ${themeClasses.contactCard} ${themeClasses.border}`}>
            <MapPin className={`w-5 h-5 ${themeClasses.accentText}`} />
            <span className={`${themeClasses.secondaryText} font-medium`}>CABA, Argentina</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:animate-pulse transition-transform duration-300 hover:scale-110"
          aria-label="Scroll to about section"
        >
          <ChevronDown className={`w-10 h-10 transition-colors duration-300 ${themeClasses.accentText}`} />
        </button>
      </div>
    </section>
  );
};

export default Hero;