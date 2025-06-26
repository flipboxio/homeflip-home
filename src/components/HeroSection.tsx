

import React from 'react';
import { SearchForm } from './SearchForm';

export const HeroSection: React.FC = () => {
  const handleSearch = (searchData: any) => {
    console.log('Search data:', searchData);
    // Handle search functionality here
  };

  return (
    <section className="flex flex-col relative min-h-[692px] mt-[52px] pt-[122px] pb-12 px-20 rounded-[12px_12px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/f65bc982d7ba9a21703bcbe77732bbcfa243bc19?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-[calc(100%-100px)] object-cover inset-0 mx-auto transform scale-y-[-1]"
      />
      
      <div className="relative z-10">
        <h1 className="text-white text-6xl font-bold leading-[50px] w-[467px] max-md:text-[40px] max-md:leading-[37px]">
          Encontre o Imóvel perfeito para seu estilo de vida!
        </h1>
        
        <p className="text-white text-base font-normal leading-5 mt-8">
          Lorem ipsum dolor sit amet consectetur. Nec risus quis viverra
          libero tellus eget. Leo morbi faucibus mattis pharetra tellus velit
          ultricies duis rhoncus. Porttitor fermentum eu urna eget
        </p>
        
        <SearchForm onSearch={handleSearch} />
      </div>
    </section>
  );
};

