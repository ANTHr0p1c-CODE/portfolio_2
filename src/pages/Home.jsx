import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import CertificationsSection from '../components/CertificationsSection';
export default function Home({ projects, news, config }) {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection config={config} />
      <ProjectsSection projects={projects} />
      <CertificationsSection config={config} />
      <NewsSection news={news} />
      <ContactSection />
    </main>
  );
}
