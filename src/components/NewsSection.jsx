import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import initialNews from '../data/initialNews';
import GlitchTitle from './GlitchTitle';
export default function NewsSection({ news = initialNews }) {
  const { lang, t } = useLanguage();
  const [activeTag, setActiveTag] = useState('All');
  const [expandedItems, setExpandedItems] = useState({});
  const allTags = useMemo(() => {
    const tags = new Set();
    news.forEach(item => {
      if (item.tags) {
        item.tags.forEach(tag => tags.add(tag));
      }
    });
    return ['All', ...Array.from(tags)];
  }, [news]);
  const filteredNews = useMemo(() => {
    let filtered = news;
    if (activeTag !== 'All') {
      filtered = filtered.filter(item => item.tags && item.tags.includes(activeTag));
    }
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [news, activeTag]);
  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-US', options);
  };
  return (
    <section id="news" className="section-container">
      <div className="text-center mb-12">
        <GlitchTitle as="h2" text={t('news.title')} className="section-title text-cyber-accent" />
        <p className="section-subtitle text-cyber-muted">{t('news.subtitle')}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'bg-cyber-accent text-cyber-bg'
                : 'bg-cyber-surface text-cyber-text hover:bg-cyber-card border border-cyber-border'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map(item => (
          <div key={item.id} className="glass p-6 rounded-xl border border-cyber-border transition-all hover:border-cyber-accent">
            <div className="text-sm text-cyber-dim mb-2">{formatDate(item.date)}</div>
            <h3 className="text-xl font-bold text-cyber-text mb-3">{item.title[lang]}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags && item.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-cyber-bg text-cyber-accent rounded-md border border-cyber-border">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-cyber-muted mb-4">{item.excerpt[lang]}</p>
            {expandedItems[item.id] && (
              <div className="text-cyber-text mt-4 pt-4 border-t border-cyber-border whitespace-pre-wrap">
                {item.content[lang]}
              </div>
            )}
            <button 
              onClick={() => toggleExpand(item.id)}
              className="text-cyber-cyan hover:text-cyber-accent text-sm font-medium transition-colors mt-4"
            >
              {expandedItems[item.id] ? t('news.readLess') || 'Read less' : t('news.readMore') || 'Read more'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
