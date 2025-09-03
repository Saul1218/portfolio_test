import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Education: React.FC<EducationProps> = ({ themeClasses, t }) => {
  const education = [
    {
      title: 'Licenciatura en Ciberdefensa',
      institution: 'Universidad de la Defensa Nacional',
      period: '2025 – En curso',
      color: 'blue'
    },
    {
      title: 'Tecnicatura Superior en Ciencia de Datos e IA',
      institution: 'IFTS Nº11',
      period: '2024 – En curso',
      color: 'cyan'
    },
    {
      title: 'Técnico en Computación',
      institution: 'Escuela Técnica 7 D.E 5',
      period: '2017 – 2022',
      color: 'purple'
    }
  ];

  const certifications = [
    {
      title: 'Instalador y Administrador de Redes Informáticas',
      institution: 'Centro de Formación Profesional Nº8',
      duration: '360 Horas',
      details: [
        'Organización del computador',
        'Tecnología, instalación y mantenimiento de redes (CISCO)',
        'Administración de redes informáticas'
      ]
    },
    {
      title: 'Programación en Python - Trayecto Analista de Datos',
      institution: 'Talento Tech',
      duration: '80 Horas',
      details: [
        'Fundamentos de Programación en Python',
        'Estructuras de Datos',
        'Funciones y Modularidad',
        'Bases de Datos SQL'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="education" className={`py-20 transition-all duration-500 ${themeClasses.primaryBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <GraduationCap className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('educationCertifications')}
            </h2>
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300 ${themeClasses.primaryText}`}>
              <GraduationCap className={`w-7 h-7 ${themeClasses.accentText}`} />
              {t('education')}
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => {
                const colors = getColorClasses(edu.color);
                return (
                  <div 
                    key={index}
                    className={`rounded-2xl p-6 border-l-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-x-2 ${colors.border.replace('/30', '')} border ${themeClasses.cardBg} ${themeClasses.border}`}
                  >
                    <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${themeClasses.primaryText}`}>
                      {edu.title}
                    </h4>
                    <p className={`font-semibold mb-2 ${colors.text}`}>
                      {edu.institution}
                    </p>
                    <p className={`flex items-center gap-2 transition-colors duration-300 ${themeClasses.mutedText}`}>
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300 ${themeClasses.primaryText}`}>
              <Award className={`w-7 h-7 ${themeClasses.accentText}`} />
              {t('coursesAndCertifications')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`rounded-3xl shadow-2xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardShadow}`}
                >
                  <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${themeClasses.primaryText}`}>
                    {cert.title}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-2">
                    {cert.institution}
                  </p>
                  <p className={`mb-4 transition-colors duration-300 ${themeClasses.mutedText}`}>
                    {cert.duration}
                  </p>
                  <ul className={`text-sm space-y-2 transition-colors duration-300 ${themeClasses.secondaryText}`}>
                    {cert.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* CISCO Certification */}
            <div className={`rounded-3xl p-8 border-l-4 border-orange-400 border shadow-2xl transition-all duration-500 hover:scale-[1.02] ${themeClasses.cardBg} ${themeClasses.border}`}>
              <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${themeClasses.primaryText}`}>
                Certificación CISCO Networking Essentials
              </h4>
              <p className="text-orange-400 font-semibold mb-2">
                Certificación Internacional
              </p>
              <p className={`transition-colors duration-300 ${themeClasses.secondaryText}`}>
                Conocimientos fundamentales en networking y administración de redes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;