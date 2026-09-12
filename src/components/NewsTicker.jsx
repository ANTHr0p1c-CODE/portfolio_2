import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
export default function NewsTicker({ projects, news, config }) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const recentItems = useMemo(() => {
    const today = new Date();
    const fourteenDaysAgo = new Date(today);
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const items = [];
    projects?.forEach(p => {
      if (p.date) {
        items.push({ type: 'project', title: p.title?.[lang] || p.title?.en, date: new Date(p.date), id: p.id });
      }
    });
    news?.forEach(n => {
      if (n.date) {
        items.push({ type: 'news', title: n.title?.[lang] || n.title?.en, date: new Date(n.date), id: n.id });
      }
    });
    config?.achievements?.forEach(a => {
      if (a.date) {
        const titlePrefix = a.status === 'Completed' ? 'Nuovo Traguardo:' : 'In Corso:';
        items.push({ type: a.type === 'cert' ? 'cert' : 'badge', title: `${titlePrefix} ${a.name}`, date: new Date(a.date), id: a.id });
      }
    });
    return items
      .filter(item => !isNaN(item.date) && item.date >= fourteenDaysAgo && item.date <= today)
      .sort((a, b) => b.date - a.date)
      .slice(0, 5);
  }, [projects, news, config, lang]);
  if (!recentItems || recentItems.length === 0) return null;
  const handleNavClick = (type) => {
    let target = 'hero';
    if (type === 'project') target = 'projects';
    if (type === 'news') target = 'news';
    if (type === 'cert' || type === 'badge') target = 'certifications';
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-red-900/90 backdrop-blur-md border-b border-red-500/50 z-[100] flex items-center overflow-hidden">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[...recentItems, ...recentItems, ...recentItems, ...recentItems, ...recentItems].map((item, idx) => (
          <span key={idx} className="inline-flex items-center mx-8 text-[11px] uppercase tracking-wider font-mono text-white/90">
            <span className="text-red-400 font-bold mr-2">[{item.type}]</span>
            <button onClick={() => handleNavClick(item.type)} className="hover:text-white hover:underline transition-all">
              {item.title} ({item.date.toISOString().slice(0,10)})
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
