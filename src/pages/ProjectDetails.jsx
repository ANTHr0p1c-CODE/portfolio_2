import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
import { ArrowLeft, ExternalLink, Github, FileText } from 'lucide-react';
import CyberGlossary from '../components/CyberGlossary';
export default function ProjectDetails({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const { persona } = usePersona();
  const project = projects.find(p => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-cyber-text mb-4">Progetto non trovato</h2>
        <button onClick={() => navigate('/')} className="btn-primary px-4 py-2 bg-cyber-accent text-white rounded">
          Torna alla Home
        </button>
      </div>
    );
  }
  const title = project.title?.[lang];
  const subtitle = project.subtitle?.[lang];
  const description = project.description?.[lang]?.[persona];
  const highlights = project.highlights?.[lang]?.[persona] || [];
  return (
    <main className="pb-20 md:pb-12 pt-28 px-4 max-w-4xl mx-auto min-h-screen animate-fade-in">
      <button 
        onClick={() => navigate('/#projects')}
        className="flex items-center gap-2 text-cyber-muted hover:text-cyber-accent transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        {t('nav.home', 'Home')}
      </button>
      <div className="glass rounded-2xl p-6 md:p-10 border border-cyber-border bg-cyber-card shadow-2xl">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <span className="text-sm font-mono text-cyber-dim border border-cyber-border px-3 py-1 rounded bg-cyber-surface">
            {project.year}
          </span>
          <span className="text-sm text-cyber-accent font-medium uppercase tracking-wider bg-cyber-accent/10 px-3 py-1 rounded">
            {project.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-cyber-text mb-2">{title}</h1>
        <h2 className="text-lg md:text-xl text-cyber-dim mb-6">{subtitle}</h2>
        {project.pdfUrl && (
          <div className="mb-8">
            <a 
              href={project.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-red-600/10 border border-red-500/50 hover:bg-red-600/20 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] text-red-400 rounded-xl transition-all duration-300 group w-full md:w-auto justify-center"
            >
              <FileText size={24} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold tracking-wide uppercase text-sm md:text-base">
                {project.pdfLabel?.[lang] || 'Apri PDF Documento'}
              </span>
            </a>
          </div>
        )}
        {project.image && (
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 border border-cyber-border">
            <img src={project.image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="space-y-8">
          <div className="text-cyber-muted text-lg leading-relaxed prose prose-invert max-w-none">
            {typeof description === 'string' ? (
              <p className="whitespace-pre-wrap">{description}</p>
            ) : (
              description
            )}
          </div>
          {highlights.length > 0 && (
            <div className="bg-cyber-surface p-6 rounded-xl border border-cyber-border">
              <h3 className="text-md font-semibold text-cyber-text mb-4 uppercase tracking-wider">
                {t('projects.highlights') || 'Highlights & Impact'}
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-cyber-muted">
                    <span className="text-cyber-accent mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.tools && project.tools.length > 0 && (
            <div>
              <h3 className="text-md font-semibold text-cyber-text mb-4 uppercase tracking-wider">
                {t('projects.tools') || 'Technologies & Tools'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="tag-blue text-sm px-4 py-2 rounded-md bg-cyber-surface text-cyber-text border border-cyber-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          {}
          {(project.demoUrl || project.repoUrl || project.gallery) && (
            <div className="pt-8 mt-8 border-t border-cyber-border flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 px-6 py-3 rounded-md bg-cyber-accent text-white hover:bg-blue-600 transition-colors font-medium">
                  <ExternalLink size={18} />
                  Apri / Link Esterno
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-md border border-cyber-border text-cyber-text hover:bg-cyber-surface transition-colors font-medium">
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          )}
          {project.attachments && project.attachments.length > 0 && (
            <div className="pt-8">
              <h3 className="text-md font-semibold text-cyber-text mb-4 uppercase tracking-wider">
                Allegati & Documenti
              </h3>
              <div className="flex flex-col gap-3">
                {project.attachments.map((doc, idx) => (
                  <a key={idx} href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-cyber-surface rounded-lg border border-cyber-border hover:border-cyber-accent hover:bg-cyber-bg transition-all group">
                    <div className="p-2 bg-cyber-bg rounded-md text-cyber-muted group-hover:text-cyber-accent">
                      <ExternalLink size={18} />
                    </div>
                    <span className="text-cyber-text font-medium group-hover:text-cyber-accent">{doc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-8">
              <h3 className="text-md font-semibold text-cyber-text mb-4 uppercase tracking-wider">
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx+1}`} className="w-full h-48 object-cover rounded-lg border border-cyber-border" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
