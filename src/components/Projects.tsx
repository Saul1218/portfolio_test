import React from 'react';
import { FolderOpen, Eye, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { techColors } from '../utils/techColors';

interface ProjectsProps {
  themeClasses: any;
  t: (key: string) => string;
  onOpenModal: (project: any) => void;
}

const Projects: React.FC<ProjectsProps> = ({ themeClasses, t, onOpenModal }) => {
  return (
    <section id="projects" className={`py-20 transition-all duration-500 ${themeClasses.primaryBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border ${themeClasses.border} ${themeClasses.cardBg}`}>
            <FolderOpen className={`w-6 h-6 ${themeClasses.accentText}`} />
            <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
              {t('projects')}
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 border group ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardHover} ${themeClasses.cardShadow}`}
            >
              {/* Project Image */}
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={typeof project.title === 'string' ? project.title : project.title.es}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Status Badge */}
              {project.status && (
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  project.color === 'purple' 
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {typeof project.status === 'string' ? project.status : project.status.es}
                </div>
              )}
              
              {/* Project Icon */}
              <div className={`w-14 h-14 rounded-2xl p-3 mb-6 ${
                project.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                project.color === 'cyan' ? 'bg-cyan-500/20 border border-cyan-500/30' :
                'bg-purple-500/20 border border-purple-500/30'
              }`}>
                <FolderOpen className={`w-8 h-8 ${
                  project.color === 'blue' ? 'text-blue-400' :
                  project.color === 'cyan' ? 'text-cyan-400' :
                  'text-purple-400'
                }`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${themeClasses.primaryText}`}>
                {typeof project.title === 'string' ? project.title : project.title.es}
              </h3>
              
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${themeClasses.secondaryText}`}>
                {typeof project.description === 'string' ? project.description : project.description.es}
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => onOpenModal(project)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    project.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    project.color === 'cyan' ? 'bg-cyan-600 hover:bg-cyan-700' :
                    'bg-purple-600 hover:bg-purple-700'
                  } text-white shadow-lg`}
                >
                  <Eye className="w-4 h-4" />
                  {t('viewCode')}
                </button>
                
                <a
                  href={project.github}
                  className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.cardHover}`}
                  aria-label="GitHub repository"
                >
                  <Github className={`w-5 h-5 ${themeClasses.accentText}`} />
                </a>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => {
                  const colors = techColors[tech] || techColors.default;
                  return (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${colors.bg} ${colors.text} border ${colors.border}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

