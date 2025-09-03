import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
  themeClasses: any;
  t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isDarkMode,
  toggleTheme,
  language,
  toggleLanguage,
  themeClasses,
  t
}) => {
  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${themeClasses.navBg} ${themeClasses.navBorder}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`font-bold text-xl transition-colors duration-300 ${themeClasses.accentText}`}>
            Saúl Padilla
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-200 px-3 py-1 rounded-md ${
                  activeSection === item 
                    ? `${themeClasses.navActiveText} font-semibold bg-blue-500/10` 
                    : `${themeClasses.navText} ${themeClasses.navHover}`
                }`}
              >
                {t(item)}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-all duration-300 group ${themeClasses.cardBg} ${themeClasses.border} hover:scale-110 ${themeClasses.cardHover}`}
              aria-label="Toggle language"
            >
              <div className="flex items-center space-x-1">
                <Languages className={`w-4 h-4 ${themeClasses.accentText} transition-transform group-hover:rotate-12`} />
                <span className={`text-xs font-bold ${themeClasses.accentText}`}>
                  {language.toUpperCase()}
                </span>
              </div>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border} hover:scale-110 ${themeClasses.cardHover}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className={`w-5 h-5 ${themeClasses.accentText} transition-transform hover:rotate-180`} />
              ) : (
                <Moon className={`w-5 h-5 ${themeClasses.accentText} transition-transform hover:rotate-12`} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;