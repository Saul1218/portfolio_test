import React from 'react';
import { Briefcase, Calendar, Shield } from 'lucide-react';

interface ExperienceProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Experience: React.FC<ExperienceProps> = ({ themeClasses, t }) => {
  const experiences = [
    {
      title: t('dataAnalystIntern'),
      company: 'ARTECH | Fundación Pescar',
      period: 'Julio 2025 – Diciembre 2025',
      icon: Briefcase,
      color: 'cyan',
      responsibilities: [
        'Formación en Habilidades Interpersonales con orientación a la inserción laboral en el sector IT',
        'Capacitación Técnica en Python, SQL, Power BI, Databricks y Power Apps (237 Hs.)',
        'Desarrollo de competencias en análisis de datos empresariales'
      ]
    },
    {
      title: t('itSupportIntern'),
      company: 'Mutualidad Argentina de Hipoacúsicos',
      period: 'Agosto 2022 – Diciembre 2022',
      icon: Shield,
      color: 'blue',
      responsibilities: [
        'Administración de usuarios y permisos en Active Directory',
        'Mantenimiento preventivo y correctivo de equipos informáticos',
        'Configuración de redes y diagnóstico de problemas técnicos'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 transition-all duration-500 ${themeClasses.secondaryBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <Briefcase className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('workExperience')}
            </h2>
          </div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`rounded-3xl shadow-2xl p-8 border-l-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                exp.color === 'cyan' 
                  ? 'border-cyan-400' 
                  : 'border-blue-400'
              } border ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardShadow}`}
            >
              <div className="flex items-start gap-6">
                <div className={`rounded-xl p-4 border ${
                  exp.color === 'cyan' 
                    ? 'bg-cyan-500/20 border-cyan-500/30' 
                    : 'bg-blue-500/20 border-blue-500/30'
                }`}>
                  <exp.icon className={`w-8 h-8 ${
                    exp.color === 'cyan' 
                      ? 'text-cyan-400' 
                      : 'text-blue-400'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${themeClasses.primaryText}`}>
                    {exp.title}
                  </h3>
                  <p className={`font-semibold mb-3 text-lg ${
                    exp.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                  }`}>
                    {exp.company}
                  </p>
                  <p className={`mb-6 flex items-center gap-2 transition-colors duration-300 ${themeClasses.mutedText}`}>
                    <Calendar className="w-5 h-5" />
                    {exp.period}
                  </p>
                  
                  <ul className={`space-y-3 transition-colors duration-300 ${themeClasses.secondaryText}`}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'
                        }`}></div>
                        <span className="text-lg">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;