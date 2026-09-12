import React, { useState, useEffect, useRef } from 'react';
const characters = '0123456789ABCDEF!@#$%^&*<>[]{}';
export default function GlitchTitle({ text, className, as: Component = 'h2' }) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef(null);
  const triggerGlitch = () => {
    let iterations = 0;
    const maxIterations = 15;
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (index < (iterations / maxIterations) * text.length) {
          return text[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join(''));
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 40);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerGlitch();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [text]);
  return (
    <Component 
      ref={elementRef}
      className={`${className} font-mono cursor-default`} 
      onMouseEnter={triggerGlitch}
    >
      {displayText}
    </Component>
  );
}
