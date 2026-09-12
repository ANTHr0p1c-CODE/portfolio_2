import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sanitize, isBot, checkRateLimit } from '../utils/security';
import { Terminal, User, Mail, MessageSquare, Send, Lock, ShieldCheck } from 'lucide-react';
import GlitchTitle from './GlitchTitle';
export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState('idle'); 
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isBot(formData.honeypot, 3000)) { 
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setStatus('success');
      return;
    }
    const rateLimit = checkRateLimit('contact', 60000, 3);
    if (!rateLimit) {
      setStatus('rateLimit');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }
    setStatus('encrypting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('sending');
    const sanitizedData = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      message: sanitize(formData.message)
    };
    try {
      const response = await fetch('https://formspree.io/f/xppzegpg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sanitizedData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };
  return (
    <section id="contact" className="section-container py-24 relative overflow-hidden">
      {}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="text-center mb-16 relative z-10">
        <GlitchTitle as="h2" text="Secure Channel" className="section-title text-4xl md:text-5xl font-bold text-cyber-accent mb-4 tracking-tight" />
        <p className="section-subtitle text-cyber-muted text-lg max-w-xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        {}
        <div className="glass rounded-xl border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden backdrop-blur-md">
          {}
          <div className="flex items-center justify-between px-4 py-3 bg-cyber-surface border-b border-cyber-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-cyber-red/80"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-amber/80"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-green/80"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-dim">
              <Lock size={12} className="text-cyber-accent" />
              <span>SECURE_TRANSMISSION</span>
            </div>
          </div>
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${status === 'success' ? 'max-h-0 opacity-0' : 'max-h-[800px] opacity-100'}`}>
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                style={{ position: 'absolute', left: '-9999px' }} 
                tabIndex={-1} 
                aria-hidden="true" 
              />
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-muted group-focus-within:text-cyber-accent transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name') || 'Nome / Alias'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-cyber-bg/50 border border-cyber-border rounded-lg text-cyber-text placeholder:text-cyber-dim focus:outline-none focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-muted group-focus-within:text-cyber-accent transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email') || 'Email protetta'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-cyber-bg/50 border border-cyber-border rounded-lg text-cyber-text placeholder:text-cyber-dim focus:outline-none focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute top-3 left-3 pointer-events-none text-cyber-muted group-focus-within:text-cyber-accent transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    name="message"
                    placeholder={t('contact.message') || 'Inserisci il messaggio...'}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-cyber-bg/50 border border-cyber-border rounded-lg text-cyber-text placeholder:text-cyber-dim focus:outline-none focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                disabled={status === 'encrypting' || status === 'sending'}
                className="w-full relative overflow-hidden group btn-primary py-3 px-4 bg-cyber-surface border border-cyber-border text-cyber-text rounded-lg font-bold hover:bg-cyber-accent hover:border-cyber-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'idle' && (
                  <>
                    <Lock size={18} className="group-hover:hidden" />
                    <Send size={18} className="hidden group-hover:block" />
                    <span>Invia Messaggio</span>
                  </>
                )}
                {status === 'encrypting' && (
                  <>
                    <Terminal size={18} className="animate-pulse text-cyber-cyan" />
                    <span className="font-mono text-cyber-cyan">Elaborazione in corso...</span>
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Send size={18} className="animate-bounce" />
                    <span>Trasmissione pacchetti...</span>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className={`transition-all duration-700 ease-in-out overflow-hidden flex flex-col items-center justify-center ${status === 'success' ? 'max-h-[400px] opacity-100 py-12' : 'max-h-0 opacity-0 py-0'}`}>
            <ShieldCheck size={64} className="text-cyber-green mb-4 animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-bold text-cyber-text mb-2">Connessione Terminata</h3>
            <p className="text-cyber-muted text-center max-w-sm">Messaggio consegnato al destinatario in modo sicuro. Riceverai presto una risposta sul canale protetto.</p>
          </div>
          {status === 'error' && (
            <div className="m-6 mt-0 p-4 bg-cyber-red/10 border border-cyber-red/50 text-cyber-red rounded-lg text-center animate-in fade-in duration-300">
              {t('contact.error') || 'Errore di trasmissione. Riprova.'}
            </div>
          )}
          {status === 'rateLimit' && (
            <div className="m-6 mt-0 p-4 bg-cyber-amber/10 border border-cyber-amber/50 text-cyber-amber rounded-lg text-center animate-in fade-in duration-300">
              {t('contact.rateLimit') || 'Troppi tentativi. Attendi.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
