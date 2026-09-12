import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, ShieldCheck, Heart } from 'lucide-react';
export default function Footer({ onTerminalToggle }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-cyber-border bg-cyber-bg py-8 mt-20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-cyber-dim">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p>&copy; {year} AC. {t('footer.rights', 'All rights reserved.')}</p>
          <div className="flex items-center space-x-1 mt-1 text-xs text-cyber-dim">
            <span>Built with</span>
            <Heart size={12} className="text-red-500 mx-1" />
            <span>React + Tailwind</span>
          </div>
        </div>
        <a href="https://observatory.mozilla.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyber-surface border border-cyber-green/30 hover:border-cyber-green transition-colors group" title="Mozilla Observatory Security Rating">
          <ShieldCheck size={16} className="text-cyber-green group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <span className="text-xs font-mono font-bold text-cyber-green tracking-widest">SECURITY RATING A+</span>
        </a>
        <div className="flex items-center space-x-4">
          <button
            onClick={onTerminalToggle}
            className="flex items-center gap-2 text-cyber-muted hover:text-cyber-accent transition-colors group"
            aria-label="Toggle Terminal"
            title="Initialize Terminal"
          >
            <Terminal size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span className="font-mono text-xs hidden sm:inline">[ INIT_TERMINAL ]</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
