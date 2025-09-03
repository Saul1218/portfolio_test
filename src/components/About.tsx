import React from 'react';
import { User } from 'lucide-react';

interface AboutProps {
  themeClasses: any;
  t: (key: string) => string;
}

const About: React.FC<AboutProps> = ({ themeClasses, t }) => {
  return (
    <section id="about" className={`py-20 transition-all duration-500 ${themeClasses.primaryBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <User className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('professionalObjective')}
            </h2>
          </div>
        </div>
        
        <div className={`rounded-3xl p-8 md:p-12 border shadow-2xl transition-all duration-500 hover:scale-[1.02] ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardShadow}`}>
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-xl leading-relaxed transition-colors duration-300 ${themeClasses.secondaryText}`}>
              {t('aboutDescription')}
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center mt-8 space-x-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse`}></div>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 animate-pulse delay-100`}></div>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-400 animate-pulse delay-200`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;