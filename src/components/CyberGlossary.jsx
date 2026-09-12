import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
export default function CyberGlossary({ term, children }) {
  const { t } = useLanguage();
  const { persona } = usePersona();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);
  if (persona === 'analyst') {
    return <span className="font-medium">{children}</span>;
  }
  const glossaryText = t(`glossary.${term}`);
  return (
    <span 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="border-b border-dotted border-cyber-accent text-cyber-text cursor-help hover:text-cyber-accent transition-colors">
        {children}
      </span>
      {isOpen && glossaryText && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs animate-fade-in pointer-events-none">
          <div className="glass bg-cyber-card text-cyber-text text-xs p-3 rounded-lg shadow-xl border border-cyber-border relative">
            {glossaryText}
            {}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[6px] border-transparent border-t-cyber-border">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-px border-[5px] border-transparent border-t-cyber-card" />
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
