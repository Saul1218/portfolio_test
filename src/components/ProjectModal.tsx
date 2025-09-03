import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
  themeClasses: any;
  t: (key: string) => string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, themeClasses, t }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border transition-all duration-500 ${themeClasses.cardBg} ${themeClasses.border}`}>
        {/* Modal Header */}
        <div className={`flex items-center justify-between p-6 border-b ${themeClasses.border}`}>
          <div className="flex items-center gap-4">
            <img
              src={project.image}
              alt={typeof project.title === 'string' ? project.title : project.title.es}
              className="w-12 h-12 object-cover rounded-xl"
            />
            <div>
              <h3 className={`text-2xl font-bold transition-colors duration-300 ${themeClasses.primaryText}`}>
                {typeof project.title === 'string' ? project.title : project.title.es}
              </h3>
              <p className={`text-sm transition-colors duration-300 ${themeClasses.mutedText}`}>
                {typeof project.description === 'string' ? project.description : project.description.es}
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 hover:rotate-90 ${themeClasses.cardBg} ${themeClasses.border} hover:bg-red-500/10 hover:border-red-500/30`}
          >
            <X className={`w-6 h-6 transition-colors duration-300 ${themeClasses.mutedText} hover:text-red-400`} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Project Details */}
          <div className="mb-8">
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${themeClasses.primaryText}`}>
              Descripción del Proyecto
            </h4>
            <p className={`mb-6 text-lg leading-relaxed transition-colors duration-300 ${themeClasses.secondaryText}`}>
              {typeof project.description === 'string' ? project.description : project.description.es}
            </p>
            
            {/* Project Status */}
            {project.status && (
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                project.color === 'purple' 
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {typeof project.status === 'string' ? project.status : project.status.es}
              </div>
            )}
            
            {/* Project Features */}
            <div className={`border-l-4 p-6 mb-8 rounded-r-2xl border ${
              project.color === 'blue' ? 'border-blue-400 bg-blue-500/10' :
              project.color === 'cyan' ? 'border-cyan-400 bg-cyan-500/10' :
              'border-purple-400 bg-purple-500/10'
            } ${themeClasses.border}`}>
              <h5 className={`font-semibold mb-3 ${
                project.color === 'blue' ? 'text-blue-400' :
                project.color === 'cyan' ? 'text-cyan-400' :
                'text-purple-400'
              }`}>
                Características Principales:
              </h5>
              <ul className={`space-y-2 ${
                project.color === 'blue' ? 'text-blue-300' :
                project.color === 'cyan' ? 'text-cyan-300' :
                'text-purple-300'
              }`}>
                <li>• Generación aleatoria de 10 bases militares en coordenadas 2D</li>
                <li>• Cálculo de matriz de distancias euclidiana</li>
                <li>• Aplicación de heurística del vecino más cercano</li>
                <li>• Visualización gráfica de la ruta optimizada</li>
              </ul>
            </div>
          </div>
          
          {/* Code Section */}
          <div className="mb-8">
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${themeClasses.primaryText}`}>
              Código Fuente
            </h4>
            <div className={`rounded-2xl p-6 overflow-x-auto border transition-all duration-500 ${
              themeClasses.isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <pre className={`text-sm font-mono whitespace-pre-wrap leading-relaxed ${
                themeClasses.isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}>
                <code>{project.code}</code>
              </pre>
            </div>
          </div>
          
          {/* Technologies */}
          <div className={`border-l-4 border-blue-400 p-6 rounded-r-2xl border ${
            themeClasses.isDarkMode 
              ? 'bg-blue-500/10 border-blue-500/20' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            <h5 className="font-semibold text-blue-400 mb-4">
              Tecnologías Utilizadas:
            </h5>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string, index: number) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm font-semibold border border-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200/20">
            <a
              
              href={project.github}
              
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${themeClasses.primaryBtn}`}
            >
              <Github className="w-5 h-5"  />
              Ver en GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${themeClasses.secondaryBtn}`}
              >
                <ExternalLink className="w-5 h-5" />
                Demo en Vivo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
