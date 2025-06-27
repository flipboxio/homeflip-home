
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 md:px-8 lg:px-20 py-4 md:py-6 bg-gradient-to-r from-purple-50 via-purple-100 to-indigo-50 backdrop-blur-sm shadow-lg border-b border-purple-200/30 z-50">
      <nav className="flex w-full items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
            alt="Company Logo"
            className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-sm"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-xl xl:text-2xl font-medium">
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7065F0] after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7065F0] after:transition-all after:duration-300 hover:after:w-full">
            Imóveis
          </a>
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7065F0] after:transition-all after:duration-300 hover:after:w-full">
            Sobre nós
          </a>
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7065F0] after:transition-all after:duration-300 hover:after:w-full">
            Contato
          </a>
        </div>
        
        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xl xl:text-2xl font-medium">
          <button className="flex items-center gap-2 text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 bg-white/50 hover:bg-white/70 px-4 py-2 rounded-full shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
              alt="User icon"
              className="w-6 h-6 xl:w-7 xl:h-7 object-contain rounded-full"
            />
            <span>Login</span>
          </button>
          
          <a href="tel:+5511999999999" className="flex items-center gap-2 text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 bg-white/50 hover:bg-white/70 px-4 py-2 rounded-full shadow-sm">
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
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105">
            Imóveis
          </a>
          <button className="flex items-center gap-2 text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-105 bg-white/50 hover:bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
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
          className="md:hidden lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-110 bg-white/50 hover:bg-white/70 rounded-full shadow-sm"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Tablet Menu Toggle - Only for md screens */}
        <button
          className="hidden md:flex lg:hidden items-center justify-center w-10 h-10 text-gray-700 hover:text-[#7065F0] transition-all duration-300 hover:scale-110 bg-white/50 hover:bg-white/70 rounded-full shadow-sm ml-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle tablet menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-purple-50 to-purple-100 backdrop-blur-sm border-t border-purple-200/30 shadow-xl z-50">
          <div className="flex flex-col px-5 py-4 space-y-4">
            {/* Mobile/Tablet Navigation Links */}
            <a href="#" className="text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
              Home
            </a>
            <a href="#" className="text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
              Imóveis
            </a>
            <a href="#" className="text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
              Sobre nós
            </a>
            <a href="#" className="text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
              Contato
            </a>
            
            {/* Mobile/Tablet Actions */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-purple-200/50">
              <button className="flex items-center gap-3 text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2781467f260d3948127d5b381d6d68af509df5f9?placeholderIfAbsent=true"
                  alt="User icon"
                  className="w-6 h-6 md:w-7 md:h-7 object-contain rounded-full"
                />
                <span>Login</span>
              </button>
              
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-lg md:text-xl text-gray-700 font-medium hover:text-[#7065F0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50">
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
