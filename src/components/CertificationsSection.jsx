import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ShieldCheck, Server, Lock, Flag, FileBadge, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import GlitchTitle from './GlitchTitle';
const LogoMap = {
  'securityplus': { icon: ShieldCheck, color: 'text-blue-500', glow: 'shadow-[0_0_40px_rgba(59,130,246,0.3)]', border: 'border-blue-500/50', gradient: 'from-blue-500/10' },
  'ceh': { icon: Award, color: 'text-amber-500', glow: 'shadow-[0_0_40px_rgba(245,158,11,0.3)]', border: 'border-amber-500/50', gradient: 'from-amber-500/10' },
  'thm': { icon: Server, color: 'text-red-500', glow: 'shadow-[0_0_40px_rgba(239,68,68,0.3)]', border: 'border-red-500/50', gradient: 'from-red-500/10' },
  'htb': { icon: Flag, color: 'text-green-500', glow: 'shadow-[0_0_40px_rgba(34,197,94,0.3)]', border: 'border-green-500/50', gradient: 'from-green-500/10' },
  'letsdefend': { icon: Lock, color: 'text-blue-400', glow: 'shadow-[0_0_40px_rgba(96,165,250,0.3)]', border: 'border-blue-400/50', gradient: 'from-blue-400/10' },
  'ejpt': { icon: ShieldCheck, color: 'text-purple-500', glow: 'shadow-[0_0_40px_rgba(168,85,247,0.3)]', border: 'border-purple-500/50', gradient: 'from-purple-500/10' },
  'infobasic': { icon: Award, color: 'text-cyan-400', glow: 'shadow-[0_0_40px_rgba(34,211,238,0.3)]', border: 'border-cyan-400/50', gradient: 'from-cyan-400/10' },
  'default': { icon: FileBadge, color: 'text-cyber-accent', glow: 'shadow-[0_0_40px_rgba(37,99,235,0.3)]', border: 'border-cyber-accent/50', gradient: 'from-cyber-accent/10' },
};
export default function CertificationsSection({ config }) {
  const { t } = useLanguage();
  const achievements = config?.achievements || [];
  const certs = achievements.filter(a => a.type === 'cert');
  const badges = achievements.filter(a => a.type === 'badge');
  const getSizing = (count) => {
    if (count <= 2) return { wrapper: 'w-64 h-72 md:w-80 md:h-96', icon: 'w-24 h-24 md:w-32 md:h-32' };
    if (count <= 4) return { wrapper: 'w-56 h-64 md:w-72 md:h-80', icon: 'w-20 h-20 md:w-24 md:h-24' };
    return { wrapper: 'w-32 h-40 md:w-48 md:h-56', icon: 'w-12 h-12 md:w-16 md:h-16' };
  };
  const Carousel = ({ items }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;
      let animationId;
      const scroll = () => {
        if (!isDragging && !el.matches(':hover')) {
          el.scrollLeft += 1;
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        }
        animationId = requestAnimationFrame(scroll);
      };
      animationId = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationId);
    }, [isDragging]);
    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeftPos(scrollRef.current.scrollLeft);
    };
    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeftPos - walk;
    };
    const displayItems = [...items, ...items];
    return (
      <div className="relative w-full overflow-hidden flex group py-10 cursor-grab active:cursor-grabbing">
        {}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyber-bg to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyber-bg to-transparent z-30 pointer-events-none"></div>
        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-hidden gap-6 px-4 hide-scrollbar"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {displayItems.map((item, idx) => {
            const style = LogoMap[item.logoId] || LogoMap['default'];
            const Icon = style.icon;
            return (
              <div 
                key={`${item.id}-${idx}`} 
                className="relative flex flex-col items-center focus:outline-none shrink-0 group/card z-10 hover:z-50"
              >
                <div className="relative w-44 h-52 rounded-xl bg-cyber-card/40 backdrop-blur-lg flex flex-col items-center justify-between p-5 border border-cyber-border transition-all duration-300 group-hover/card:-translate-y-4 group-hover/card:scale-105 group-hover/card:bg-cyber-surface group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${style.gradient} to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  <div className={`self-end flex items-center gap-1 px-2 py-0.5 rounded bg-cyber-bg/80 border border-cyber-border backdrop-blur-sm`}>
                    <CheckCircle size={10} className="text-cyber-green" />
                  </div>
                  <div className="flex-1 flex items-center justify-center w-full my-3">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.issuer} className="w-16 h-16 object-contain drop-shadow-md group-hover/card:scale-110 transition-transform duration-300 bg-white/5 rounded-lg p-1" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} draggable={false} />
                    ) : null}
                    <Icon className={`w-14 h-14 text-cyber-muted group-hover/card:${style.color} transition-all duration-300 drop-shadow-md ${item.imageUrl ? 'hidden' : 'block'}`} strokeWidth={1.5} />
                  </div>
                  <div className="w-full text-center mt-2">
                    <h4 className="text-sm font-bold text-cyber-text leading-tight line-clamp-2" title={item.name}>{item.name}</h4>
                    <p className="text-cyber-dim text-[10px] uppercase font-mono mt-1">{item.issuer}</p>
                  </div>
                  {}
                  {item.attachment && (
                    <a 
                      href={item.attachment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-cyber-bg/90 opacity-0 group-hover/card:opacity-100 flex flex-col items-center justify-center transition-all duration-200 z-20"
                      draggable={false}
                    >
                      <ExternalLink size={24} className={style.color} />
                      <span className="text-xs font-bold uppercase mt-3 text-cyber-text tracking-wider">Vedi Badge</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    );
  };
  const renderGrid = (items, typeName) => {
    if (items.length === 0) return null;
    const sizing = getSizing(items.length);
    return (
      <div className="w-full max-w-7xl relative z-10 mt-10">
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div className="h-px bg-gradient-to-r from-transparent to-cyber-border/80 flex-grow max-w-[100px]"></div>
          <GlitchTitle as="h4" text={typeName} className="text-xl md:text-2xl font-mono text-cyber-text uppercase tracking-[0.2em] px-4 py-2 bg-cyber-surface/30 border border-cyber-border rounded-lg backdrop-blur-sm" />
          <div className="h-px bg-gradient-to-l from-transparent to-cyber-border/80 flex-grow max-w-[100px]"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {items.map(item => {
            const style = LogoMap[item.logoId] || LogoMap['default'];
            const Icon = style.icon;
            const CardComponent = item.attachment ? 'a' : 'div';
            return (
              <CardComponent 
                key={item.id} 
                href={item.attachment} 
                target={item.attachment ? "_blank" : undefined}
                rel={item.attachment ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col items-center focus:outline-none"
              >
                {}
                <div className={`relative ${sizing.wrapper} rounded-2xl bg-cyber-card/40 backdrop-blur-lg flex flex-col items-center justify-between p-6 border border-cyber-border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:scale-[1.02] overflow-hidden`}>
                  {}
                  <div className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.4)_360deg)] pointer-events-none -z-10"></div>
                  {}
                  <div className={`absolute inset-0 bg-gradient-to-b ${style.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  {}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${style.glow} rounded-2xl pointer-events-none`}></div>
                  {}
                  <div className={`self-end flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyber-bg/80 border border-cyber-border backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:scale-105`}>
                    {item.status === 'Completed' ? <CheckCircle size={12} className="text-cyber-green" /> : <Clock size={12} className="text-cyber-amber" />}
                    <span className="text-[10px] uppercase tracking-wider font-mono font-semibold text-cyber-text">
                      {item.status === 'Completed' ? '100%' : 'WIP'}
                    </span>
                  </div>
                  {}
                  <div className="flex-1 flex items-center justify-center w-full">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className={`${sizing.icon} object-contain filter grayscale-[0.4] group-hover:grayscale-0 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500`} />
                    ) : (
                      <Icon className={`${sizing.icon} text-cyber-muted group-hover:${style.color} transition-all duration-500 drop-shadow-lg`} strokeWidth={1.5} />
                    )}
                  </div>
                  {}
                  {item.attachment && (
                    <div className="absolute inset-0 bg-cyber-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
                      <div className={`p-4 rounded-full bg-cyber-surface border ${style.border} ${style.color} mb-2 shadow-lg`}>
                        <ExternalLink size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-cyber-text">Vedi Attestato</span>
                    </div>
                  )}
                  {}
                  <div className={`w-full text-center mt-4 transition-all duration-300 ${item.attachment ? 'group-hover:opacity-0 group-hover:translate-y-2' : ''}`}>
                    <h4 className="text-base md:text-lg font-bold text-cyber-text leading-tight">{item.name}</h4>
                    <p className="text-cyber-dim text-xs md:text-sm font-medium mt-1">{item.issuer}</p>
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    );
  };
  if (achievements.length === 0) return null;
  return (
    <section id="certifications" className="section-container py-32 flex flex-col items-center relative overflow-hidden">
      {}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="mb-20 text-center relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-cyber-text tracking-tighter mb-4 flex items-center justify-center gap-3">
          <ShieldCheck className="text-cyber-accent w-10 h-10 md:w-12 md:h-12" />
          Skillset & Credits
        </h3>
        <p className="text-cyber-muted text-lg max-w-xl mx-auto font-light">
          Certificazioni, attestati e piattaforme di training. Un percorso continuo di specializzazione e pratica sul campo.
        </p>
      </div>
      {renderGrid(certs, 'Certifications')}
      <div className="w-full max-w-7xl relative z-10 mt-10">
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div className="h-px bg-gradient-to-r from-transparent to-cyber-border/80 flex-grow max-w-[100px]"></div>
          <h4 className="text-xl md:text-2xl font-mono text-cyber-text uppercase tracking-[0.2em] px-4 py-2 bg-cyber-surface/30 border border-cyber-border rounded-lg backdrop-blur-sm">
            Platforms & Badges
          </h4>
          <div className="h-px bg-gradient-to-l from-transparent to-cyber-border/80 flex-grow max-w-[100px]"></div>
        </div>
        <Carousel items={badges} />
      </div>
    </section>
  );
}
