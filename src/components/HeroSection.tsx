
import React from 'react';
import { SearchForm } from './SearchForm';

export const HeroSection: React.FC = () => {
  const handleSearch = (searchData: any) => {
    console.log('Search data:', searchData);
    // Handle search functionality here
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[692px] pt-32 md:pt-40 pb-8 md:pb-12 px-4 md:px-8 lg:px-20 rounded-t-[12px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/f65bc982d7ba9a21703bcbe77732bbcfa243bc19?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover transform scale-y-[-1] rounded-[25px]"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center md:text-left max-w-none md:max-w-[467px]">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-[50px] mb-6 md:mb-0">
            Encontre o Imóvel perfeito para seu estilo de vida!
          </h1>
          
          <p className="text-white text-sm md:text-base font-normal leading-relaxed md:leading-5 mt-4 md:mt-8 mb-8 md:mb-0">
            Lorem ipsum dolor sit amet consectetur. Nec risus quis viverra
            libero tellus eget. Leo morbi faucibus mattis pharetra tellus velit
            ultricies duis rhoncus. Porttitor fermentum eu urna eget
          </p>
        </div>
        
        <SearchForm onSearch={handleSearch} />
      </div>
    </section>
  );
};
