
const initialNews = [
  {
    id: 'welcome-post',
    date: '2026-09-12',
    tags: ['SOC Life'],
    title: {
      it: 'Il mio primo giorno da SOC Analyst',
      en: 'My first day as a SOC Analyst',
    },
    excerpt: {
      it: 'Riflessioni sulla transizione dalla teoria alla pratica nel mondo della cybersecurity operativa.',
      en: 'Reflections on the transition from theory to practice in the world of operational cybersecurity.',
    },
    content: {
      it: 'Dopo due anni di studio intenso, laboratori pratici e una tesi che mi ha permesso di simulare un incidente completo, oggi inizio ufficialmente il mio percorso come SOC Analyst. La teoria è fondamentale, ma la sensazione di analizzare alert reali in un ambiente di produzione è completamente diversa. Ogni log racconta una storia e il mio compito è capire quale. Sono grato per questa opportunità e determinato a crescere ogni giorno.',
      en: 'After two years of intensive study, hands-on labs and a thesis that allowed me to simulate a complete incident, today I officially begin my journey as a SOC Analyst. Theory is essential, but the feeling of analyzing real alerts in a production environment is completely different. Every log tells a story and my job is to figure out which one. I\'m grateful for this opportunity and determined to grow every day.',
    },
  },
  {
    id: 'security-plus-prep',
    date: '2026-09-10',
    tags: ['Certificazioni'],
    title: {
      it: 'Verso la CompTIA Security+: il mio piano di studio',
      en: 'Towards CompTIA Security+: my study plan',
    },
    excerpt: {
      it: 'Come mi sto preparando per l\'esame di novembre 2026 e le risorse che sto utilizzando.',
      en: 'How I\'m preparing for the November 2026 exam and the resources I\'m using.',
    },
    content: {
      it: 'La CompTIA Security+ è una delle certificazioni più riconosciute nel settore della sicurezza informatica. Il mio piano di studio si basa su un mix di risorse ufficiali, laboratori pratici e simulazioni d\'esame. Ogni giorno dedico tempo allo studio dei domini principali: threat management, architecture & design, implementation, operations & incident response, governance & compliance. L\'obiettivo non è solo superare l\'esame, ma consolidare le competenze che uso ogni giorno nel mio lavoro.',
      en: 'CompTIA Security+ is one of the most recognized certifications in the cybersecurity industry. My study plan is based on a mix of official resources, hands-on labs and exam simulations. Every day I dedicate time to studying the main domains: threat management, architecture & design, implementation, operations & incident response, governance & compliance. The goal is not just to pass the exam, but to solidify the skills I use every day in my work.',
    },
  },
];
export default initialNews;
