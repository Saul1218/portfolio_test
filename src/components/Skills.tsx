import React from 'react';
import { Code, Database, Shield, Languages, Wrench } from 'lucide-react';

interface SkillsProps {
  themeClasses: any;
  t: (key: string) => string;
}

const Skills: React.FC<SkillsProps> = ({ themeClasses, t }) => {
  const skills = [
    { 
      category: t('programmingLanguages'), 
      items: ['Python', 'JavaScript', 'PHP'], 
      icon: Code,
      color: 'blue'
    },
    { 
      category: t('frameworksLibraries'), 
      items: ['Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn'], 
      icon: Code,
      color: 'purple'
    },
    { 
      category: t('databases'), 
      items: ['MySQL', 'SQLite'], 
      icon: Database,
      color: 'green'
    },
    { 
      category: t('tools'), 
      items: ['Linux', 'Active Directory', 'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit'], 
      icon: Shield,
      color: 'red'
    },
    { 
      category: t('languages'), 
      items: ['Español (Nativo)', 'Inglés (B2)', 'Francés (A2)', 'Alemán (En curso)'], 
      icon: Languages,
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; icon: string } } = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', icon: 'text-blue-400' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', icon: 'text-purple-400' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', icon: 'text-green-400' },
      red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', icon: 'text-red-400' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', icon: 'text-cyan-400' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className={`py-20 transition-all duration-500 ${themeClasses.secondaryBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <Wrench className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('technicalSkills')}
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => {
            const colors = getColorClasses(skillGroup.color);
            return (
              <div 
                key={index} 
                className={`rounded-3xl shadow-2xl p-8 border transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 group ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardHover} ${themeClasses.cardShadow}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`rounded-2xl p-4 border transition-transform duration-300 group-hover:rotate-6 ${colors.bg} ${colors.border}`}>
                    <skillGroup.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 border group cursor-default ${colors.bg} ${colors.text} ${colors.border} hover:shadow-lg`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{skill}</span>
                        <div className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150 ${colors.text.replace('text-', 'bg-')}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;