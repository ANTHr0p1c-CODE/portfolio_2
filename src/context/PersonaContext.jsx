import { createContext, useContext, useState, useCallback } from 'react';
const PersonaContext = createContext();
function detectPersona() {
  try {
    const stored = localStorage.getItem('portfolio-persona');
    if (stored === 'recruiter' || stored === 'analyst') return stored;
    const params = new URLSearchParams(window.location.search);
    const paramPersona = params.get('persona');
    if (paramPersona === 'analyst' || paramPersona === 'recruiter') return paramPersona;
    const ref = document.referrer.toLowerCase();
    if (ref.includes('github') || ref.includes('hackthebox') || ref.includes('tryhackme') || ref.includes('reddit.com/r/netsec')) {
      return 'analyst';
    }
    return 'recruiter'; 
  } catch {
    return 'recruiter';
  }
}
export function PersonaProvider({ children }) {
  const [persona, setPersonaState] = useState(detectPersona);
  const setPersona = useCallback((p) => {
    setPersonaState(p);
    try { localStorage.setItem('portfolio-persona', p); } catch {}
  }, []);
  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}
export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error('usePersona must be used within PersonaProvider');
  return ctx;
}
