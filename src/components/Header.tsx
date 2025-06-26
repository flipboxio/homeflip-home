import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full px-[72px] py-[35px] max-md:max-w-full max-md:px-5">
      <nav className="flex w-full items-center gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="self-stretch flex items-stretch gap-1">
          <div className="flex w-[157px] items-center gap-2.5 h-full pt-1.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
              alt="Company Logo"
              className="aspect-[4.48] object-contain w-[157px] self-stretch my-auto"
            />
          </div>
        </div>
        
        <div className="self-stretch flex items-center gap-6 text-base text-black font-medium my-auto">
          <a href="#" className="self-stretch gap-2.5 whitespace-nowrap my-auto hover:text-[#7065F0] transition-colors">
            Home
          </a>
          <a href="#" className="self-stretch my-auto hover:text-[#7065F0] transition-colors">
            Imóveis
          </a>
          <a href="#" className="self-stretch gap-2.5 my-auto hover:text-[#7065F0] transition-colors">
            Sobre nós
          </a>
          <a href="#" className="self-stretch gap-2.5 whitespace-nowrap my-auto hover:text-[#7065F0] transition-colors">
            Contato
          </a>
        </div>
        
        <div className="self-stretch flex gap-6 text-base text-black font-medium my-auto">
          <button className="flex items-center gap-2 whitespace-nowrap hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
              alt="User icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[31px]"
            />
            <span className="self-stretch gap-2.5 my-auto">Login</span>
          </button>
          
          <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/cb6116d39ca48572cd9b941082cd2232b29dc452?placeholderIfAbsent=true"
              alt="Phone icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch gap-2.5 my-auto">(11) 9999-9999</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
