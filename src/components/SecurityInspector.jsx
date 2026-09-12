import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Check } from 'lucide-react';
export default function SecurityInspector() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const measures = ['xss', 'honeypot', 'privacy', 'rateLimit', 'csp'];
  return (
    <div ref={containerRef} className="fixed bottom-24 md:bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="glass p-4 rounded-xl border border-cyber-accent w-64 shadow-lg shadow-cyber-accent/20 animate-in fade-in zoom-in duration-200">
          <div className="flex justify-between items-center mb-3 border-b border-cyber-border pb-2">
            <h3 className="font-bold text-cyber-accent flex items-center gap-2">
              <ShieldCheck size={18} />
              {t('security.title')}
            </h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-cyber-muted hover:text-cyber-text text-xl leading-none"
            >
              &times;
            </button>
          </div>
          <ul className="space-y-2">
            {measures.map(measure => (
              <li key={measure} className="flex items-start gap-2 text-sm text-cyber-text">
                <Check size={16} className="text-cyber-green mt-0.5 shrink-0" />
                <span>{t(`security.${measure}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-cyber-accent px-4 py-2 rounded-full text-cyber-text shadow-lg transition-all"
        >
          <ShieldCheck size={20} className="text-cyber-accent" />
          <span className="text-sm font-medium hidden sm:inline">{t('security.badge')}</span>
        </button>
      )}
    </div>
  );
}
