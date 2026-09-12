import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Home, FolderKanban, Newspaper, Mail, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function MobileNav({ onAdminOpen }) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'news', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: t('nav.home', 'Home') },
    { id: 'projects', icon: <FolderKanban size={20} />, label: t('nav.projects', 'Projects') },
    { id: 'news', icon: <Newspaper size={20} />, label: t('nav.news', 'News') },
    { id: 'contact', icon: <Mail size={20} />, label: t('nav.contact', 'Contact') }
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 glass border-t border-cyber-border mobile-nav-safe pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${activeSection === item.id ? 'text-cyber-accent' : 'text-cyber-muted hover:text-cyber-text'}`}
            aria-label={item.label}
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
