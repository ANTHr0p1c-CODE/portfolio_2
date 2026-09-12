import React from 'react';
const initialProjects = [
  {
    id: 'cyber-portfolio',
    category: 'lab',
    year: 2026,
    featured: true,
    tools: ['React', 'Tailwind', 'Vite', 'Client-Side Security', 'Formspree', 'SHA-256 Hashing'],
    title: {
      it: 'Architettura Zero-Trust Portfolio',
      en: 'Zero-Trust Portfolio Architecture',
    },
    subtitle: {
      it: 'Sito web personale protetto e dinamico, senza backend o database (Static-Site SPA)',
      en: 'Protected and dynamic personal website, without backend or database (Static-Site SPA)',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Per il mio spazio personale online, non volevo un semplice sito vetrina. Ho progettato questa piattaforma mettendomi nei panni di un attaccante, chiedendomi: <strong>"Come posso rendere questo sito inattaccabile?"</strong>. La risposta è stata rimuovere completamente il bersaglio principale: il backend.
            </p>
            <p>
              Ho costruito una Single Page Application (SPA) dinamica e interattiva <em>senza alcun database vulnerabile</em>. Sfruttando le moderne potenzialità del <strong>Vibe Coding</strong> (sviluppo assistito da IA), ho accelerato la creazione, ma ho <strong>ispezionato, validato e testato manualmente ogni riga di codice</strong> per garantire zero vulnerabilità e performance ottimali. Il sito include protezioni avanzate, Easter Egg nascosti (prova a premere F12) e animazioni in stile decrittazione dati, dimostrando le mie competenze in modo pratico.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              L'obiettivo di questo progetto era sviluppare un portfolio interattivo completamente <strong>"Stateless"</strong> e <strong>"Serverless"</strong>, azzerando la Attack Surface lato server e applicando le best practice di sicurezza web difensiva e offensiva.
            </p>
            <p>
              Questo progetto è stato realizzato con un approccio di <strong>Vibe Coding</strong> assistito dall'Intelligenza Artificiale. Tuttavia, a differenza del codice generato passivamente, ogni singola riga di codice, libreria e architettura è stata <strong>rigorosamente revisionata, testata e validata manualmente</strong> per garantire i massimi standard di sicurezza, performance e clean code, applicando i principi del <em>Secure by Design</em>.
            </p>
            <h4 className="text-xl font-bold text-cyber-text pt-2">Funzionalità e Protezioni Implementate:</h4>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li>
                <strong>Assenza di Backend/DB:</strong> Nessun server in ascolto per richieste SQL o API, mitigando nativamente le vulnerabilità OWASP Top 10 come <em>SQLi, Command Injection, e IDOR</em>. I contenuti sono elaborati staticamente tramite file JSON locali.
              </li>
              <li>
                <strong>Security Headers & CSP:</strong> Configurazione di regole server-side rigorose (HSTS preload, X-Frame-Options, no-sniff) per impedire Clickjacking e MITM, raggiungendo un punteggio <strong>A+ su Mozilla Observatory</strong>.
              </li>
              <li>
                <strong>Animazioni "Cipher Text":</strong> Sviluppo di un React Hook custom (IntersectionObserver + setInterval) per simulare l'offuscamento e la decrittazione esadecimale dei titoli allo scroll.
              </li>
              <li>
                <strong>Mini-CTF (Easter Egg):</strong> Inserimento di una <em>Flag</em> segreta nei log della console (DevTools). Lo script intercetta i keydown globali (keylogger benigno) e sblocca un payload visivo (accesso di sistema) se la sequenza di tasti corrisponde all'hash della flag.
              </li>
              <li>
                <strong>Sicurezza Form & Routing:</strong> Form di contatto senza PHP basato su endpoint isolato. Implementazione di Rate-limiting lato client, Honeypot invisibile anti-bot (CSS scrambling) e DOM escaping nativo in React per prevenire <em>XSS (Cross-Site Scripting)</em>.
              </li>
            </ul>
          </div>
        )
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              For my personal space online, I didn't want a simple showcase site. I designed this platform putting myself in the shoes of an attacker, asking: <strong>"How can I make this site unhackable?"</strong>. The answer was to completely remove the main target: the backend.
            </p>
            <p>
              I built a dynamic and interactive Single Page Application (SPA) <em>without any vulnerable database</em>. Leveraging the modern power of <strong>Vibe Coding</strong> (AI-assisted development), I accelerated creation, but I <strong>manually inspected, validated, and tested every line of code</strong> to ensure zero vulnerabilities and optimal performance. The site includes advanced protections, hidden Easter Eggs (try pressing F12), and data-decryption style animations, demonstrating my skills practically.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              The goal of this project was to develop a fully <strong>"Stateless"</strong> and <strong>"Serverless"</strong> interactive portfolio, zeroing out the server-side Attack Surface and applying defensive and offensive web security best practices.
            </p>
            <p>
              This project was built using an AI-assisted <strong>Vibe Coding</strong> approach. However, unlike passively generated code, every single line of code, library, and architectural decision was <strong>strictly reviewed, tested, and manually validated</strong> to ensure the highest standards of security, performance, and clean code, applying <em>Secure by Design</em> principles.
            </p>
            <h4 className="text-xl font-bold text-cyber-text pt-2">Features & Protections Implemented:</h4>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li>
                <strong>No Backend/DB:</strong> No listening server for SQL or API requests, natively mitigating OWASP Top 10 vulnerabilities like <em>SQLi, Command Injection, and IDOR</em>. Content is processed statically via local JSON files.
              </li>
              <li>
                <strong>Security Headers & CSP:</strong> Configuration of strict server-side rules (HSTS preload, X-Frame-Options, no-sniff) to prevent Clickjacking and MITM, achieving an <strong>A+ score on Mozilla Observatory</strong>.
              </li>
              <li>
                <strong>"Cipher Text" Animations:</strong> Development of a custom React Hook (IntersectionObserver + setInterval) to simulate hex obfuscation and decryption of titles on scroll.
              </li>
              <li>
                <strong>Mini-CTF (Easter Egg):</strong> Insertion of a secret <em>Flag</em> in the console logs (DevTools). The script intercepts global keydowns (benign keylogger) and unlocks a visual payload (system access) if the keystrokes match the flag.
              </li>
              <li>
                <strong>Form & Routing Security:</strong> PHP-less contact form based on an isolated endpoint. Implementation of client-side Rate-limiting, invisible anti-bot Honeypot, and native React DOM escaping to prevent <em>XSS (Cross-Site Scripting)</em>.
              </li>
            </ul>
          </div>
        )
      }
    },
    highlights: {
      it: {
        recruiter: [
          'Architettura 100% statica: Zero rischio di violazioni server-side',
          'Mini CTF integrato per i recruiter più attenti',
          'Certificazione "Security Rating A+" da Mozilla Observatory'
        ],
        analyst: [
          'Design Serverless: Mitigazione totale di SQLi e Injection',
          'Strict Security Headers (.htaccess) per grado A+ su Observatory',
          'React Hook custom: Animazione Cipher Text e Keylogger benigno per CTF',
          'Prevenzione XSS tramite DOM escaping e Honeypot anti-bot nativi'
        ]
      },
      en: {
        recruiter: [
          '100% Static Architecture: Zero risk of server-side breaches',
          'Integrated Mini CTF for sharp-eyed recruiters',
          '"Security Rating A+" Certification from Mozilla Observatory'
        ],
        analyst: [
          'Serverless Design: Total mitigation of SQLi and Injection',
          'Strict Security Headers (.htaccess) for A+ Observatory grade',
          'Custom React Hooks: Cipher Text animation and benign keylogger for CTF',
          'XSS Prevention via DOM escaping and native anti-bot Honeypots'
        ]
      }
    }
  },
  {
    id: 'soc-ir-thesis',
    category: 'soc',
    year: 2026,
    featured: true,
    tools: ['NIST SP 800-61', 'MITRE ATT&CK', 'Suricata', 'Elastic Stack', 'KQL', 'Palo Alto', 'EDR'],
    title: {
      it: 'SOC e Incident Response',
      en: 'SOC & Incident Response',
    },
    subtitle: {
      it: 'Tesi di fine corso — Analisi e contenimento di un attacco avanzato al Reparto Finance',
      en: 'Final Course Thesis — Analysis and containment of an advanced attack on the Finance Department',
    },
    pdfUrl: '/assets/projects/tesi.pdf',
    pdfLabel: {
      it: '📄 Leggi la Tesi di Fine Corso (PDF)',
      en: '📄 Read the Final Thesis (PDF)',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Simulazione completa di un incidente di sicurezza in cui ho ricostruito un attacco informatico mirato ai dati finanziari aziendali. Ho coordinato la risposta: <strong>individuazione rapida della minaccia</strong>, isolamento dei sistemi compromessi e implementazione di misure correttive per impedire danni futuri.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Analisi end-to-end di un incidente simulato gestito secondo <strong>NIST SP 800-61 Rev. 2</strong> e mappato su <strong>MITRE ATT&CK</strong>.
            </p>
            <h4 className="text-xl font-bold text-cyber-text pt-2">Fasi dell'Operazione:</h4>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Analisi Statica:</strong> Esame di un DLL loader malevolo (persistence via Registry Run keys).</li>
              <li><strong>Correlazione Eventi:</strong> Match tra alert IDS <em>Suricata</em> con telemetria <em>EDR</em> e firewall <em>Palo Alto</em>.</li>
              <li><strong>Threat Hunting:</strong> Ricerca su SIEM <em>Elastic</em> tramite query <strong>KQL</strong>.</li>
              <li><strong>Contenimento:</strong> Isolamento host, blocco C2 su firewall, e DNS sinkhole.</li>
            </ul>
            <p className="mt-4 border-l-4 border-cyber-accent pl-4 text-cyber-text font-mono">
              METRICHE: MTTD 12 min — MTTR 28 min
            </p>
          </div>
        ),
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Full simulation of a security incident where I reconstructed a cyberattack targeting corporate financial data. I coordinated the response: <strong>rapid threat identification</strong>, isolation of compromised systems and implementation of corrective measures to prevent future damage.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              End-to-end analysis of a simulated incident managed under <strong>NIST SP 800-61 Rev. 2</strong> and mapped to <strong>MITRE ATT&CK</strong>.
            </p>
            <h4 className="text-xl font-bold text-cyber-text pt-2">Operation Phases:</h4>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Static Analysis:</strong> Examination of a malicious DLL loader (persistence via Registry Run keys).</li>
              <li><strong>Event Correlation:</strong> Matching <em>Suricata</em> IDS alerts with <em>EDR</em> telemetry and <em>Palo Alto</em> firewall.</li>
              <li><strong>Threat Hunting:</strong> Searching on <em>Elastic</em> SIEM via <strong>KQL</strong> queries.</li>
              <li><strong>Containment:</strong> Host isolation, C2 block on firewall, and DNS sinkhole.</li>
            </ul>
            <p className="mt-4 border-l-4 border-cyber-accent pl-4 text-cyber-text font-mono">
              METRICS: MTTD 12 min — MTTR 28 min
            </p>
          </div>
        ),
      },
    },
    highlights: {
      it: {
        recruiter: [
          'Gestione completa di un incidente: dalla scoperta al contenimento',
          'Riduzione del rischio di esfiltrazione dati sensibili',
          'Documentazione chiara e metriche di efficienza della risposta',
        ],
        analyst: [
          'Reverse engineering base su DLL loader con analisi di persistenza',
          'Correlazione cross-source: Suricata + EDR + Palo Alto + SIEM',
          'Threat hunting avanzato con KQL su Elastic Stack',
          'MTTD: 12 min — MTTR: 28 min — Dwell Time minimizzato',
        ],
      },
      en: {
        recruiter: [
          'Full incident management: from detection to containment',
          'Reduced risk of sensitive data exfiltration',
          'Clear documentation and response efficiency metrics',
        ],
        analyst: [
          'Basic reverse engineering on DLL loader with persistence analysis',
          'Cross-source correlation: Suricata + EDR + Palo Alto + SIEM',
          'Advanced threat hunting with KQL on Elastic Stack',
          'MTTD: 12 min — MTTR: 28 min — Minimized Dwell Time',
        ],
      },
    },
  },
  {
    id: 'password-token',
    category: 'offensive',
    year: 2026,
    featured: false,
    tools: ['John the Ripper', 'Hydra', 'Hashing Analysis', 'Token Security'],
    title: {
      it: 'Studio di Password e Token',
      en: 'Password & Token Study',
    },
    subtitle: {
      it: 'Analisi della robustezza dei meccanismi di autenticazione',
      en: 'Analysis of authentication mechanism resilience',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Studio pratico sulla sicurezza delle password e dei sistemi di accesso, testando la resistenza dei meccanismi di protezione utilizzati da applicazioni web e servizi. 
            </p>
            <p>
              <strong>L'obiettivo:</strong> dimostrare quali configurazioni sono sicure e quali vulnerabili.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Test di cracking <em>offline</em> e <em>online</em> per la verifica della resistenza degli algoritmi di hashing.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Offline Cracking:</strong> Analisi comparativa di MD5, SHA-256 e bcrypt con <em>John the Ripper</em>.</li>
              <li><strong>Online Brute-force:</strong> Attacchi dizionario su servizi di rete (SSH/HTTP) tramite <em>Hydra</em>.</li>
              <li><strong>Web Sessions:</strong> Analisi della gestione dei token di sessione (JWT, cookies) per identificare vulnerabilità di <em>Session Hijacking</em>.</li>
            </ul>
          </div>
        ),
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Hands-on study on password security and access systems, testing the resilience of protection mechanisms used by web applications and services.
            </p>
            <p>
              <strong>Goal:</strong> demonstrate which configurations are secure and which are vulnerable.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              <em>Offline</em> and <em>online</em> cracking tests to verify hashing algorithm resilience.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Offline Cracking:</strong> Comparative analysis of MD5, SHA-256, and bcrypt using <em>John the Ripper</em>.</li>
              <li><strong>Online Brute-force:</strong> Dictionary attacks on network services (SSH/HTTP) via <em>Hydra</em>.</li>
              <li><strong>Web Sessions:</strong> Session token management analysis (JWT, cookies) to identify <em>Session Hijacking</em> vulnerabilities.</li>
            </ul>
          </div>
        ),
      },
    },
    highlights: {
      it: {
        recruiter: [
          'Verifica della sicurezza dei sistemi di login',
          'Identificazione di configurazioni deboli e proposte di miglioramento',
        ],
        analyst: [
          'Cracking offline: confronto prestazioni MD5 vs bcrypt',
          'Brute-force su SSH e HTTP con Hydra',
          'Analisi token di sessione e prevenzione hijacking',
        ],
      },
      en: {
        recruiter: [
          'Login system security verification',
          'Identification of weak configurations and improvement proposals',
        ],
        analyst: [
          'Offline cracking: MD5 vs bcrypt performance comparison',
          'SSH and HTTP brute-force with Hydra',
          'Session token analysis and hijacking prevention',
        ],
      },
    },
  },
  {
    id: 'ad-pentest',
    category: 'offensive',
    year: 2025,
    featured: false,
    tools: ['BloodHound', 'Impacket', 'Responder', 'Metasploit'],
    title: {
      it: 'Internal Pentest: Active Directory',
      en: 'Internal Pentest: Active Directory',
    },
    subtitle: {
      it: 'Simulazione di attacco in ambiente Windows Domain',
      en: 'Attack simulation in a Windows Domain environment',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Simulazione autorizzata di un attacco all'interno di una rete aziendale Windows per identificare punti deboli nella gestione degli utenti e dei permessi. 
            </p>
            <p>
              L'esercizio ha permesso di individuare le aree critiche e proporre contromisure per rafforzare la sicurezza dell'infrastruttura.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Enumerazione e sfruttamento della struttura Active Directory in ambiente di test isolato.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Recon:</strong> Enumerazione AD tramite <em>BloodHound</em> per individuare attack paths e vettori di privilege escalation.</li>
              <li><strong>Poisoning:</strong> Exploitation di protocolli vulnerabili (LLMNR/NBT-NS) con <em>Responder</em>.</li>
              <li><strong>Lateral Movement:</strong> Relay di credenziali NTLMv2 con <em>Impacket</em> e remote code execution.</li>
              <li><strong>Remediation:</strong> Post-exploitation logging e hardening correttivo (disabilitazione LLMNR, SMB Signing).</li>
            </ul>
          </div>
        ),
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Authorized attack simulation inside a corporate Windows network to identify weaknesses in user and permission management. 
            </p>
            <p>
              The exercise helped pinpoint critical areas and propose countermeasures to strengthen infrastructure security.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Enumeration and exploitation of an Active Directory structure in an isolated test environment.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Recon:</strong> AD enumeration via <em>BloodHound</em> to identify attack paths and privilege escalation vectors.</li>
              <li><strong>Poisoning:</strong> Exploitation of vulnerable protocols (LLMNR/NBT-NS) with <em>Responder</em>.</li>
              <li><strong>Lateral Movement:</strong> NTLMv2 credential relaying with <em>Impacket</em> and remote code execution.</li>
              <li><strong>Remediation:</strong> Post-exploitation logging and corrective hardening (disabling LLMNR, enforcing SMB Signing).</li>
            </ul>
          </div>
        ),
      },
    },
    highlights: {
      it: {
        recruiter: [
          'Individuazione di punti deboli nella gestione dei permessi aziendali',
          'Proposte concrete di hardening per la rete interna',
        ],
        analyst: [
          'BloodHound: shortest path to Domain Admin',
          'LLMNR/NBT-NS poisoning + NTLMv2 relay',
          'Privilege Escalation e movimento laterale',
        ],
      },
      en: {
        recruiter: [
          'Identification of weaknesses in corporate permission management',
          'Concrete hardening proposals for the internal network',
        ],
        analyst: [
          'BloodHound: shortest path to Domain Admin',
          'LLMNR/NBT-NS poisoning + NTLMv2 relay',
          'Privilege Escalation and lateral movement',
        ],
      },
    },
  },
  {
    id: 'aws-hardening',
    category: 'cloud',
    year: 2024,
    featured: false,
    tools: ['AWS IAM', 'Security Groups', 'SSH Hardening', 'VPS Linux'],
    title: {
      it: 'Security Hardening AWS Cloud',
      en: 'AWS Cloud Security Hardening',
    },
    subtitle: {
      it: 'Deployment sicuro di un\'infrastruttura cloud',
      en: 'Secure deployment of a cloud infrastructure',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Progettazione e configurazione sicura di un server cloud su <strong>Amazon Web Services (AWS)</strong>, applicando regole di accesso minime e protezioni per impedire accessi non autorizzati.
            </p>
            <p>Un esercizio di difesa perimetrale orientato al mondo reale.</p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Deployment di VPS Linux su AWS con focus assoluto sull'hardening sistemistico e di rete:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Cloud Sec:</strong> Policy IAM restrittive (<em>Least Privilege</em>) e Security Groups configurati con regole Inbound/Outbound minimali.</li>
              <li><strong>OS Hardening:</strong> Disabilitazione accesso root SSH, configurazione esclusiva di key-based auth (Ed25519).</li>
              <li><strong>Active Defense:</strong> Installazione e tuning di <em>fail2ban</em> per prevenire attacchi brute-force.</li>
              <li><strong>Monitoring:</strong> Setup rigoroso di audit logging.</li>
            </ul>
          </div>
        ),
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Secure design and configuration of a cloud server on <strong>Amazon Web Services (AWS)</strong>, applying minimal access rules and protections to prevent unauthorized access.
            </p>
            <p>A real-world-oriented perimeter defense exercise.</p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Linux VPS deployment on AWS with absolute focus on system and network hardening:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>Cloud Sec:</strong> Restrictive IAM policies (<em>Least Privilege</em>) and Security Groups configured with minimal Inbound/Outbound rules.</li>
              <li><strong>OS Hardening:</strong> SSH root access disabled, exclusive configuration of key-based auth (Ed25519).</li>
              <li><strong>Active Defense:</strong> Installation and tuning of <em>fail2ban</em> to prevent brute-force attacks.</li>
              <li><strong>Monitoring:</strong> Rigorous audit logging setup.</li>
            </ul>
          </div>
        ),
      },
    },
    highlights: {
      it: {
        recruiter: [
          'Configurazione sicura di un server nel cloud',
          'Applicazione del principio del minimo privilegio',
        ],
        analyst: [
          'IAM Least Privilege + Security Groups minimali',
          'SSH hardening: key-only auth, fail2ban, audit log',
        ],
      },
      en: {
        recruiter: [
          'Secure cloud server configuration',
          'Application of the least privilege principle',
        ],
        analyst: [
          'IAM Least Privilege + minimal Security Groups',
          'SSH hardening: key-only auth, fail2ban, audit log',
        ],
      },
    },
  },
  {
    id: 'homelab-wazuh',
    category: 'lab',
    year: 2025,
    featured: false,
    tools: ['Wazuh', 'Suricata IDS', 'Docker', 'pfSense', 'Wireshark'],
    title: {
      it: 'Home Lab: Wazuh & Suricata',
      en: 'Home Lab: Wazuh & Suricata',
    },
    subtitle: {
      it: 'Ambiente di monitoraggio e difesa perimetrale',
      en: 'Monitoring and perimeter defense environment',
    },
    description: {
      it: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Creazione di un <strong>laboratorio domestico (Home Lab)</strong> per simulare e testare scenari di sicurezza: un ambiente dove poter sperimentare il monitoraggio dei sistemi, la rilevazione delle minacce e la risposta agli incidenti in modo sicuro e controllato.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Progettazione e deploy di un Lab in <em>Docker</em> completo di stack difensivo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>SIEM/XDR:</strong> <em>Wazuh</em> per il log management, monitoraggio centralizzato e active response.</li>
              <li><strong>Network Security:</strong> <em>Suricata IDS</em> per l'analisi profonda del traffico di rete, con tuning delle signature e regole custom.</li>
              <li><strong>Routing & Firewall:</strong> Integrazione con <em>pfSense</em> per il filtraggio avanzato del traffico.</li>
              <li><strong>Packet Analysis:</strong> Analisi granulare dei PCAP tramite <em>Wireshark</em>.</li>
            </ul>
          </div>
        ),
      },
      en: {
        recruiter: (
          <div className="space-y-4">
            <p>
              Creation of a <strong>Home Lab</strong> to simulate and test security scenarios: an environment for safely experimenting with system monitoring, threat detection, and incident response.
            </p>
          </div>
        ),
        analyst: (
          <div className="space-y-4">
            <p>
              Design and deployment of a full defensive stack Lab in <em>Docker</em>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cyber-muted">
              <li><strong>SIEM/XDR:</strong> <em>Wazuh</em> for log management, centralized monitoring, and active response.</li>
              <li><strong>Network Security:</strong> <em>Suricata IDS</em> for deep network traffic analysis, with signature tuning and custom rules.</li>
              <li><strong>Routing & Firewall:</strong> Integration with <em>pfSense</em> for advanced traffic filtering.</li>
              <li><strong>Packet Analysis:</strong> Granular PCAP analysis using <em>Wireshark</em>.</li>
            </ul>
          </div>
        ),
      },
    },
    highlights: {
      it: {
        recruiter: [
          'Laboratorio funzionante per test e simulazioni di sicurezza',
          'Monitoraggio continuo dei sistemi e rilevazione anomalie',
        ],
        analyst: [
          'Wazuh SIEM/XDR: agent deployment + custom rules',
          'Suricata: signature tuning + custom alert rules',
          'Analisi pacchetti con Wireshark e filtraggio con pfSense',
        ],
      },
      en: {
        recruiter: [
          'Working lab for security testing and simulations',
          'Continuous system monitoring and anomaly detection',
        ],
        analyst: [
          'Wazuh SIEM/XDR: agent deployment + custom rules',
          'Suricata: signature tuning + custom alert rules',
          'Packet analysis with Wireshark and filtering with pfSense',
        ],
      },
    },
  },
];
export default initialProjects;