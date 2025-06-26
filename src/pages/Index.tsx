import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { PropertiesSection } from '../components/PropertiesSection';
import { LocationSection } from '../components/LocationSection';
import { StatsSection } from '../components/StatsSection';
import { NewsletterSection } from '../components/NewsletterSection';

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
      
      <footer>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/672b7004541a9fc12a6382fa47962efee951167e?placeholderIfAbsent=true"
          alt="Footer decoration"
          className="aspect-[2.87] object-contain w-full shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)] mt-1 max-md:max-w-full max-md:mr-0.5"
        />
      </footer>
    </div>
  );
};

export default Index;
