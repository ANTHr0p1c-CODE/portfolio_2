#  Zero-Trust Cybersecurity Portfolio

![Security Rating](https://img.shields.io/badge/Mozilla_Observatory-A+-success.svg)
![Architecture](https://img.shields.io/badge/Architecture-Stateless_SPA-blue.svg)
![Security](https://img.shields.io/badge/Security-Secure_by_Design-green.svg)

Welcome to the source code of my personal Cybersecurity Portfolio. 
As a **SOC Analyst & Cybersecurity Specialist**, I wanted my personal space on the web to reflect my mindset. Instead of building a standard website with a traditional backend, I asked myself: *"How can I make this platform unhackable?"*. The answer was to completely eliminate the attack surface.

##  Architecture & Security Features

This project is a **100% Stateless and Serverless Single Page Application (SPA)**.
By removing the database and the backend server, traditional OWASP Top 10 vulnerabilities (like SQL Injection, Command Injection, or IDOR) are natively mitigated.

### Key Defensive Implementations:
- **Strict Security Headers:** Implemented via Apache .htaccess, enforcing HSTS Preload, strict Content-Security-Policy (CSP), X-Frame-Options (SAMEORIGIN), and X-Content-Type-Options (nosniff).
- **Zero-Trust Data Handling:** All project and news data are served statically via JSON data structures. The contact form uses a sandboxed third-party relay (Formspree) with strict rate-limiting and honeypot anti-bot mechanisms.
- **Client-Side Sanitization:** Custom sanitization scripts to prevent DOM-based XSS when parsing localized strings.

### The "Analyst" Vibe:
- **Cipher Text Animation:** Custom React IntersectionObserver hook that scrambles text into hex codes and dynamically "decrypts" them on scroll.
- **Mini-CTF (Easter Egg):** The site features a hidden keylogger that listens for a specific flag. Try opening the DevTools Console on the live site to find the first clue, and type the flag directly on your keyboard to trigger a "System Compromised" payload.

##  Tech Stack
- **Frontend:** React.js, Tailwind CSS, Lucide Icons
- **Build Tool:** Vite
- **Hosting:** IONOS (Apache Web Server)

##  Vibe Coding & Code Review
This project was accelerated using **Vibe Coding** (AI-assisted development). However, unlike passively generated codebases, *every single line of code, dependency, and architectural decision was strictly reviewed, manually tested, and validated* to ensure zero vulnerabilities and clean code architecture.

##  About Me
I am Anthony Candeloro, passionate about Blue Teaming, Threat Intelligence, and secure infrastructures. Connect with me on [LinkedIn](https://www.linkedin.com/in/anthony-candeloro-869126379) or visit the live site.

---
*Developed with a security-first approach.*
