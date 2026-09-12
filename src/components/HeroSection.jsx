import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
import { Shield, MapPin, Mail, Globe, ArrowRight, Linkedin, Github, Youtube, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import GlitchTitle from './GlitchTitle';
export default function HeroSection({ config }) {
  const { t } = useLanguage();
  const { persona } = usePersona();
  const navigate = useNavigate();
  const location = useLocation();
  const handleScroll = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'projects' } });
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="relative section-container min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center animate-fade-in text-center">
      {}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen transform -translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen transform translate-x-1/3 translate-y-1/4" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto z-10">
        <div className="w-full space-y-6 animate-slide-up flex flex-col items-center">
          <div className="space-y-2">
            <p className="text-cyber-muted text-lg">{t('hero.greeting')}</p>
            <GlitchTitle as="h1" text={t('hero.name') || 'Anthony Candeloro'} className="text-4xl md:text-6xl font-bold text-cyber-text tracking-tight" />
            <GlitchTitle as="h2" text={t('hero.role') || 'SOC Analyst & Cybersecurity Specialist'} className="text-xl md:text-3xl text-cyber-accent font-semibold" />
          </div>
          <p className="text-cyber-dim text-lg leading-relaxed max-w-2xl">
            {t('hero.description')?.[persona]}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center flex-wrap">
            <button onClick={handleScroll} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-cyber-accent text-white hover:bg-blue-600 transition-colors font-medium">
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://www.linkedin.com/in/anthony-candeloro-869126379" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0A66C2]/10 border border-[#0A66C2]/50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://www.youtube.com/channel/UCVB6MxXGKWAA8jDsyQEZm1g" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#FF0000]/10 border border-[#FF0000]/50 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all font-medium"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
            <div className="flex items-center gap-3 justify-center">
              {config?.socials?.github && (
                <a href={config.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {config?.socials?.tryhackme && (
                <a href={config.socials.tryhackme} target="_blank" rel="noopener noreferrer" title="TryHackMe" className="p-3 rounded-full bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors">
                  <span className="font-mono font-bold text-sm">THM</span>
                </a>
              )}
              {config?.socials?.hackthebox && (
                <a href={config.socials.hackthebox} target="_blank" rel="noopener noreferrer" title="HackTheBox" className="p-3 rounded-full bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors">
                  <span className="font-mono font-bold text-sm">HTB</span>
                </a>
              )}
            </div>
          </div>
          {}
        </div>
      </div>
    </section>
  );
}
