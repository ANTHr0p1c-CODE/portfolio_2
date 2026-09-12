import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePersona } from '../context/PersonaContext';
import { X } from 'lucide-react';
export default function TerminalDrawer({ isOpen, onClose, projects }) {
  const { lang, t } = useLanguage();
  const { persona } = usePersona();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      if (history.length === 0) {
        setHistory([{ type: 'output', content: t('terminal.welcome') || 'Welcome to the terminal. Type "help" to start.' }]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, history.length, t]);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);
  if (!isOpen) return null;
  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', content: cmd }];
    if (trimmedCmd === '') {
      setHistory(newHistory);
      return;
    }
    let output = '';
    switch (trimmedCmd) {
      case 'help':
        output = t('terminal.helpText') || 'Available commands: help, whoami, projects, skills, contact, cert, clear, exit';
        break;
      case 'whoami':
        output = t('terminal.whoami') || 'Anthony Candeloro - Cybersecurity Professional';
        break;
      case 'projects':
        output = projects.map(p => `- ${p.title[lang] || p.title.en} (${p.year})`).join('\n') || 'No projects found.';
        break;
      case 'skills':
        output = t('terminal.skills') || 'SIEM, EDR, Penetration Testing, Cloud Security';
        break;
      case 'contact':
        output = t('terminal.contact') || 'Email: contact@example.com';
        break;
      case 'cert':
        output = t('terminal.cert') || 'CompTIA Security+, eJPT, AWS Cloud Practitioner';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        output = (t('terminal.notFound') || 'Command not found: ') + trimmedCmd;
        break;
    }
    setHistory([...newHistory, { type: 'output', content: output }]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] animate-in slide-in-from-bottom duration-300">
      <div className="bg-cyber-bg border-t border-cyber-border rounded-t-xl shadow-2xl w-full max-w-4xl mx-auto h-[80vh] md:h-[60vh] flex flex-col font-mono text-sm border-x border-cyber-border">
        {}
        <div className="flex justify-between items-center bg-cyber-surface px-4 py-2 border-b border-cyber-border rounded-t-xl shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-cyber-red"></div>
            <div className="w-3 h-3 rounded-full bg-cyber-amber"></div>
            <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
          </div>
          <div className="text-cyber-muted font-bold text-xs">terminal@anthony:~</div>
          <button onClick={onClose} className="text-cyber-muted hover:text-cyber-text transition-colors">
            <X size={16} />
          </button>
        </div>
        {}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2 text-cyber-text">
          {history.map((line, idx) => (
            <div key={idx} className={line.type === 'input' ? 'text-cyber-cyan' : 'text-cyber-green whitespace-pre-wrap'}>
              {line.type === 'input' ? `$ ${line.content}` : line.content}
            </div>
          ))}
        </div>
        {}
        <form onSubmit={handleSubmit} className="p-4 border-t border-cyber-border flex items-center bg-cyber-bg/50 shrink-0">
          <span className="text-cyber-cyan mr-2 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-cyber-text font-mono focus:ring-0"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
