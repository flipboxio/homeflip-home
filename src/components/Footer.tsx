
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#5E1177] px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
        {/* Logo e descrição */}
        <div className="md:col-span-2 lg:col-span-2 text-center md:text-left">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
            alt="Company Logo"
            className="aspect-[4.48] object-contain w-32 md:w-[157px] mb-4 brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-gray-300 text-sm md:text-sm leading-relaxed md:leading-6 max-w-md mx-auto md:mx-0">
            Encontre o imóvel dos seus sonhos com a nossa plataforma completa de busca e locação de propriedades.
          </p>
        </div>

        {/* Links principais */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold text-base md:text-lg mb-4">Menu</h3>
          <ul className="space-y-3 md:space-y-3">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm">
                Imóveis
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold text-base md:text-lg mb-4">Contato</h3>
          <ul className="space-y-3 md:space-y-3">
            <li>
              <a href="tel:+5511999999999" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm flex items-center justify-center md:justify-start gap-2">
                <span>(11) 9999-9999</span>
              </a>
            </li>
            <li>
              <a href="mailto:contato@empresa.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-sm">
                contato@empresa.com
              </a>
            </li>
            <li>
              <span className="text-gray-300 text-sm md:text-sm">
                São Paulo, SP
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2024 Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
