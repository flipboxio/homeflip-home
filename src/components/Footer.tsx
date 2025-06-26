
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#5E1177] px-20 py-16 max-md:px-5 max-md:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-md:grid-cols-1 max-md:gap-6">
        {/* Logo e descrição */}
        <div className="md:col-span-2 max-md:col-span-1 max-md:text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/588ca80530d3bec06dda69c7fd03e3cc4bb06b4e?placeholderIfAbsent=true"
            alt="Company Logo"
            className="aspect-[4.48] object-contain w-[157px] mb-4 brightness-0 invert max-md:mx-auto max-md:w-[120px]"
          />
          <p className="text-gray-300 text-sm leading-6 max-w-md max-md:max-w-full max-md:text-xs max-md:leading-5">
            Encontre o imóvel dos seus sonhos com a nossa plataforma completa de busca e locação de propriedades.
          </p>
        </div>

        {/* Links principais */}
        <div className="max-md:text-center">
          <h3 className="text-white font-semibold text-lg mb-4 max-md:text-base">Menu</h3>
          <ul className="space-y-3 max-md:space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm max-md:text-xs">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm max-md:text-xs">
                Imóveis
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm max-md:text-xs">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm max-md:text-xs">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="max-md:text-center">
          <h3 className="text-white font-semibold text-lg mb-4 max-md:text-base">Contato</h3>
          <ul className="space-y-3 max-md:space-y-2">
            <li>
              <a href="tel:+5511999999999" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 max-md:justify-center max-md:text-xs">
                <span>(11) 9999-9999</span>
              </a>
            </li>
            <li>
              <a href="mailto:contato@empresa.com" className="text-gray-300 hover:text-white transition-colors text-sm max-md:text-xs">
                contato@empresa.com
              </a>
            </li>
            <li>
              <span className="text-gray-300 text-sm max-md:text-xs">
                São Paulo, SP
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-600 max-md:mt-8 max-md:pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-md:text-center">
          <p className="text-gray-400 text-sm max-md:text-xs">
            © 2024 Todos os direitos reservados.
          </p>
          <div className="flex gap-6 max-md:flex-col max-md:gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm max-md:text-xs">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm max-md:text-xs">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
