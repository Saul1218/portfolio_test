import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ themeClasses, t }) => {
  return (
    <section id="contact" className={`py-20 transition-all duration-500 ${themeClasses.heroGradient}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <MessageCircle className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('workTogether')}
            </h2>
          </div>
        </div>
        
        <p className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${themeClasses.secondaryText}`}>
          {t('contactDescription')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:saulpadilla1811@gmail.com"
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:scale-105 hover:-translate-y-1 group ${themeClasses.primaryBtn}`}
          >
            <Mail className="w-6 h-6 transition-transform group-hover:rotate-12" />
            {t('sendEmail')}
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-6">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 animate-pulse delay-100"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-400 animate-pulse delay-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;