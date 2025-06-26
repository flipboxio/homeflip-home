
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full px-[72px] py-[35px] max-md:px-5 max-md:py-4 relative">
      <nav className="flex w-full items-center gap-5 justify-between max-md:flex-row">
        {/* Logo */}
        <div className="flex items-stretch gap-1">
          <div className="flex w-[157px] items-center gap-2.5 h-full pt-1.5 max-md:w-[120px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
              alt="Company Logo"
              className="aspect-[4.48] object-contain w-[157px] self-stretch my-auto max-md:w-[120px]"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-base text-black font-medium">
          <a href="#" className="gap-2.5 whitespace-nowrap hover:text-[#7065F0] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#7065F0] transition-colors">
            Imóveis
          </a>
          <a href="#" className="gap-2.5 hover:text-[#7065F0] transition-colors">
            Sobre nós
          </a>
          <a href="#" className="gap-2.5 whitespace-nowrap hover:text-[#7065F0] transition-colors">
            Contato
          </a>
        </div>
        
        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex gap-6 text-base text-black font-medium">
          <button className="flex items-center gap-2 whitespace-nowrap hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
              alt="User icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[31px]"
            />
            <span className="gap-2.5 my-auto">Login</span>
          </button>
          
          <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/cb6116d39ca48572cd9b941082cd2232b29dc452?placeholderIfAbsent=true"
              alt="Phone icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <span className="gap-2.5 my-auto">(11) 9999-9999</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-black hover:text-[#7065F0] transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex flex-col px-5 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <a href="#" className="text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Home
            </a>
            <a href="#" className="text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Imóveis
            </a>
            <a href="#" className="text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Sobre nós
            </a>
            <a href="#" className="text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Contato
            </a>
            
            {/* Mobile Actions */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-2 text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
                  alt="User icon"
                  className="aspect-[1] object-contain w-5 rounded-[31px]"
                />
                <span>Login</span>
              </button>
              
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-base text-black font-medium hover:text-[#7065F0] transition-colors py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/cb6116d39ca48572cd9b941082cd2232b29dc452?placeholderIfAbsent=true"
                  alt="Phone icon"
                  className="aspect-[1] object-contain w-5"
                />
                <span>(11) 9999-9999</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
