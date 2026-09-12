import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
import { ChevronRight, Star, ShieldAlert, Cpu, Network, Briefcase, ExternalLink, Activity, PlusCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import CyberGlossary from './CyberGlossary';
import initialProjects from '../data/initialProjects';
import GlitchTitle from './GlitchTitle';
export default function ProjectsSection({ projects = initialProjects }) {
  const { t, lang } = useLanguage();
  const { persona } = usePersona();
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [
    { id: 'all', label: t('projects.filterAll') || 'All' },
    { id: 'soc', label: t('projects.filterSoc') || 'SOC & IR' },
    { id: 'offensive', label: t('projects.filterOffensive') || 'Offensive' },
    { id: 'cloud', label: t('projects.filterCloud') || 'Cloud' },
    { id: 'lab', label: t('projects.filterLab') || 'Lab & OSINT' }
  ];
  const filteredProjects = projects.filter(p => 
    activeFilter === 'all' || p.category === activeFilter
  );
  return (
    <section id="projects" className="section-container py-20">
      <div className="mb-12 text-center md:text-left">
        <GlitchTitle as="h2" text={t('projects.title') || 'Progetti'} className="section-title text-3xl font-bold text-cyber-text mb-2" />
        <p className="section-subtitle text-cyber-muted text-lg">{t('projects.subtitle')}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === f.id 
                ? 'bg-cyber-accent text-white' 
                : 'bg-cyber-surface text-cyber-muted hover:text-cyber-text border border-cyber-border'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300">
        {filteredProjects.map((project, idx) => {
          const title = project.title?.[lang] || '';
          const subtitle = project.subtitle?.[lang] || '';
          return (
            <div key={project.id || idx} className="glass glass-hover p-6 rounded-xl flex flex-col h-full relative group bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 transition-colors">
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-cyber-accent text-white p-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-cyber-dim border border-cyber-border px-2 py-1 rounded">
                  {project.year}
                </span>
                <span className="text-xs text-cyber-accent font-medium uppercase tracking-wider">
                  {filters.find(f => f.id === project.category)?.label}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-cyber-text mb-2">{title}</h3>
              {project.pdfUrl && (
                <div className="flex items-center gap-1.5 mb-2 text-red-500 font-bold text-xs uppercase tracking-wide">
                  <FileText className="w-3.5 h-3.5" />
                  {lang === 'it' ? 'Presenta Allegati (PDF)' : 'Contains Attachments (PDF)'}
                </div>
              )}
              <p className="text-cyber-muted text-sm flex-grow mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.tools || []).slice(0, 4).map((tool, i) => (
                  <span key={i} className="tag-blue text-xs px-2 py-1 rounded bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20">
                    {tool}
                  </span>
                ))}
                {project.tools?.length > 4 && (
                  <span className="text-xs text-cyber-dim px-1 py-1">+{project.tools.length - 4}</span>
                )}
              </div>
              <Link 
                to={`/project/${project.id}`}
                className="mt-auto flex items-center justify-between w-full text-sm font-medium text-cyber-text group-hover:text-cyber-accent transition-colors pt-4 border-t border-cyber-border"
              >
                {t('projects.viewDetails') || 'View Details'}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
