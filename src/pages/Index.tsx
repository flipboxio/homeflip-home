
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { PropertiesSection } from '../components/PropertiesSection';
import { LocationSection } from '../components/LocationSection';
import { StatsSection } from '../components/StatsSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden items-stretch bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <PropertiesSection />
        <LocationSection />
        <StatsSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
