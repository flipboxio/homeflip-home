
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { PropertiesSection } from '../components/PropertiesSection';
import { StatsSection } from '../components/StatsSection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      
      <main className="flex-1 w-full">
        <HeroSection />
        <BenefitsSection />
        <PropertiesSection />
        <StatsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
