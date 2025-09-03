import React from 'react';

interface FooterProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ themeClasses, t }) => {
  return (
    <footer className={`py-8 border-t transition-all duration-500 ${themeClasses.primaryBg} ${themeClasses.border}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`transition-colors duration-300 ${themeClasses.mutedText}`}>
          © 2025 Saúl Padilla. {t('builtWith')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;