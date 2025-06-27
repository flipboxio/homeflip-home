
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 md:px-8 lg:px-20 py-4 md:py-6 bg-white shadow-sm z-50">
      <nav className="flex w-full items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
            alt="Company Logo"
            className="h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-xl xl:text-2xl font-medium">
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Imóveis
          </a>
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Sobre nós
          </a>
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Contato
          </a>
        </div>
        
        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xl xl:text-2xl font-medium">
          <button className="flex items-center gap-2 text-black hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
              alt="User icon"
              className="w-6 h-6 xl:w-7 xl:h-7 object-contain rounded-full"
            />
            <span>Login</span>
          </button>
          
          <a href="tel:+5511999999999" className="flex items-center gap-2 text-black hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/cb6116d39ca48572cd9b941082cd2232b29dc452?placeholderIfAbsent=true"
              alt="Phone icon"
              className="w-6 h-6 xl:w-7 xl:h-7 object-contain"
            />
            <span>(11) 9999-9999</span>
          </a>
        </div>

        {/* Tablet Navigation - Show some items but not all */}
        <div className="hidden md:flex lg:hidden items-center gap-6 text-lg font-medium">
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#7065F0] transition-colors">
            Imóveis
          </a>
          <button className="flex items-center gap-2 text-black hover:text-[#7065F0] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
              alt="User icon"
              className="w-5 h-5 object-contain rounded-full"
            />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden lg:hidden flex items-center justify-center w-10 h-10 text-black hover:text-[#7065F0] transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Tablet Menu Toggle - Only for md screens */}
        <button
          className="hidden md:flex lg:hidden items-center justify-center w-10 h-10 text-black hover:text-[#7065F0] transition-colors ml-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle tablet menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex flex-col px-5 py-4 space-y-4">
            {/* Mobile/Tablet Navigation Links */}
            <a href="#" className="text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Home
            </a>
            <a href="#" className="text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Imóveis
            </a>
            <a href="#" className="text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Sobre nós
            </a>
            <a href="#" className="text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
              Contato
            </a>
            
            {/* Mobile/Tablet Actions */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-3 text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
                  alt="User icon"
                  className="w-6 h-6 md:w-7 md:h-7 object-contain rounded-full"
                />
                <span>Login</span>
              </button>
              
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-lg md:text-xl text-black font-medium hover:text-[#7065F0] transition-colors py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/cb6116d39ca48572cd9b941082cd2232b29dc452?placeholderIfAbsent=true"
                  alt="Phone icon"
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
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
