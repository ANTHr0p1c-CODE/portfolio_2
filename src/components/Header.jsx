import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
import { Terminal, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Header({ onTerminalToggle }) {
  const { lang, t } = useLanguage();
  const { persona, setPersona } = usePersona();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  return (
    <header className="fixed top-8 left-0 w-full z-40 glass border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-cyber-text tracking-tighter cursor-pointer" onClick={(e) => handleNavClick(e, 'hero')}>
            AC<span className="text-cyber-accent">.</span>
          </span>
        </div>
        {}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={(e) => handleNavClick(e, 'hero')} className="text-sm font-medium text-cyber-muted hover:text-cyber-text transition-colors">{t('nav.home', 'Home')}</button>
          <button onClick={(e) => handleNavClick(e, 'projects')} className="text-sm font-medium text-cyber-muted hover:text-cyber-text transition-colors">{t('nav.projects', 'Projects')}</button>
          <button onClick={(e) => handleNavClick(e, 'news')} className="text-sm font-medium text-cyber-muted hover:text-cyber-text transition-colors">{t('nav.news', 'News')}</button>
          <button onClick={(e) => handleNavClick(e, 'contact')} className="text-sm font-medium text-cyber-muted hover:text-cyber-text transition-colors">{t('nav.contact', 'Contact')}</button>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center bg-cyber-surface rounded-md border border-cyber-border p-1">
            <button
              onClick={() => setPersona('recruiter')}
              className={`px-2 py-1 text-xs rounded transition-colors ${persona === 'recruiter' ? 'bg-cyber-accent text-white' : 'text-cyber-dim hover:text-cyber-muted'}`}
            >
              {t('persona.recruiter', 'Recruiter')}
            </button>
            <button
              onClick={() => setPersona('analyst')}
              className={`px-2 py-1 text-xs rounded transition-colors ${persona === 'analyst' ? 'bg-cyber-accent text-white' : 'text-cyber-dim hover:text-cyber-muted'}`}
            >
              {t('persona.analyst', 'Analyst')}
            </button>
          </div>
          <button
            onClick={onTerminalToggle}
            className="p-2 text-cyber-muted hover:text-cyber-text hover:bg-cyber-surface rounded transition-colors"
            title="Open Terminal"
          >
            <Terminal size={18} />
          </button>
          {}
          <button
            className="md:hidden p-2 text-cyber-muted"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-card border-b border-cyber-border px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <button onClick={(e) => handleNavClick(e, 'hero')} className="text-left text-cyber-muted hover:text-cyber-text">{t('nav.home', 'Home')}</button>
            <button onClick={(e) => handleNavClick(e, 'projects')} className="text-left text-cyber-muted hover:text-cyber-text">{t('nav.projects', 'Projects')}</button>
            <button onClick={(e) => handleNavClick(e, 'news')} className="text-left text-cyber-muted hover:text-cyber-text">{t('nav.news', 'News')}</button>
            <button onClick={(e) => handleNavClick(e, 'contact')} className="text-left text-cyber-muted hover:text-cyber-text">{t('nav.contact', 'Contact')}</button>
          </nav>
          <div className="flex space-x-2 pt-4 border-t border-cyber-border">
            <button
              onClick={() => { setPersona('recruiter'); toggleMobileMenu(); }}
              className={`px-3 py-1 text-xs rounded transition-colors flex-1 ${persona === 'recruiter' ? 'bg-cyber-accent text-white' : 'bg-cyber-surface text-cyber-dim'}`}
            >
              {t('persona.recruiter', 'Recruiter')}
            </button>
            <button
              onClick={() => { setPersona('analyst'); toggleMobileMenu(); }}
              className={`px-3 py-1 text-xs rounded transition-colors flex-1 ${persona === 'analyst' ? 'bg-cyber-accent text-white' : 'bg-cyber-surface text-cyber-dim'}`}
            >
              {t('persona.analyst', 'Analyst')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
