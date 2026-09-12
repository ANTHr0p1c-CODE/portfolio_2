import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';
import { PersonaProvider } from './context/PersonaContext';
import projects from './data/initialProjects.jsx';
import news from './data/initialNews';
import config from './data/initialConfig';
import NewsTicker from './components/NewsTicker';
import Header from './components/Header';
import TerminalDrawer from './components/TerminalDrawer';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const id = location.state.scrollTo;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return null;
}
export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [ctfUnlocked, setCtfUnlocked] = useState(false);
  useEffect(() => {
    let input = '';
    const flag = 'FLAG{C4ND3L0R0_1S_S3CUR3}';
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      input += e.key;
      if (input.length > flag.length) {
        input = input.slice(-flag.length);
      }
      if (input === flag) {
        setCtfUnlocked(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <LanguageProvider>
      <PersonaProvider>
        <BrowserRouter>
          <ScrollHandler />
          <div className="min-h-screen bg-cyber-bg text-cyber-text antialiased flex flex-col">
            {}
            {ctfUnlocked && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                <div className="bg-cyber-card border border-cyber-green rounded-xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(34,197,94,0.2)] animate-fade-in text-center">
                  <button onClick={() => setCtfUnlocked(false)} className="absolute top-4 right-4 text-cyber-muted hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                  <ShieldCheck size={64} className="text-cyber-green mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  <h2 className="text-2xl font-bold text-cyber-text mb-2 font-mono">SYSTEM COMPROMISED</h2>
                  <p className="text-cyber-dim mb-6 text-sm">Just kidding! You found the secret flag. This recruiter definitely knows their stuff.</p>
                  <p className="text-cyber-green font-mono bg-cyber-green/10 px-4 py-3 rounded-lg border border-cyber-green/30 tracking-widest text-lg font-bold">ACCESS GRANTED</p>
                </div>
              </div>
            )}
            <NewsTicker projects={projects} news={news} config={config} />
            <Header onTerminalToggle={() => setTerminalOpen((o) => !o)} />
            <div className="flex-grow pt-8">
              <Routes>
                <Route path="/" element={<Home projects={projects} news={news} config={config} />} />
                <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
              </Routes>
            </div>
            <Footer 
              onTerminalToggle={() => setTerminalOpen(true)} 
            />
            <MobileNav />
            <TerminalDrawer
              isOpen={terminalOpen}
              onClose={() => setTerminalOpen(false)}
              projects={projects}
            />
          </div>
        </BrowserRouter>
      </PersonaProvider>
    </LanguageProvider>
  );
}
