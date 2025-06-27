import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SearchFormProps {
  onSearch?: (searchData: SearchData) => void;
}

interface SearchData {
  type: string;
  category: string;
  propertyType: string;
  location: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchData, setSearchData] = useState<SearchData>({
    type: 'Alugar',
    category: '',
    propertyType: '',
    location: ''
  });

  const [activeFilter, setActiveFilter] = useState('Alugar');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchData);
  };

  const handleFilterChange = (filterType: string) => {
    setActiveFilter(filterType);
    setSearchData(prev => ({ ...prev, type: filterType }));
  };

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="relative bg-[rgba(234,232,255,1)] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.25)] w-full max-w-[1077px] mt-10 p-[25px] rounded-[19px] max-md:max-w-full max-md:px-5 max-md:mt-8">
        <div className="flex w-full items-center gap-[17px] text-lg text-[#100A55] font-medium flex-wrap max-md:flex-col max-md:gap-4 max-md:max-w-full">
          <div className="flex gap-2 max-md:w-full max-md:justify-center">
            <button
              type="button"
              onClick={() => handleFilterChange('Alugar')}
              className={`flex flex-col justify-center px-[50px] py-[11px] rounded-md max-md:px-4 max-md:flex-1 transition-colors ${
                activeFilter === 'Alugar'
                  ? 'border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white text-[#7065F0] font-bold border-2 border-solid'
                  : 'text-[#100A55] hover:opacity-80 bg-transparent'
              }`}
            >
              <span className="whitespace-nowrap tracking-[-0.09px] leading-none max-md:text-base">Alugar</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleFilterChange('Mensal')}
              className={`flex items-center justify-center gap-[9px] px-[25px] py-[11px] rounded-md max-md:px-4 max-md:flex-1 transition-colors ${
                activeFilter === 'Mensal'
                  ? 'border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white text-[#7065F0] font-bold border-2 border-solid'
                  : 'text-[#100A55] hover:opacity-80 bg-transparent'
              }`}
            >
              <span className="whitespace-nowrap tracking-[-0.09px] leading-none max-md:text-base">Mensal</span>
            </button>
          </div>
          
          <div className="border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] bg-[#F7F7FD] flex-1 flex items-stretch gap-4 text-base text-[#000929] px-[49px] py-5 rounded-lg border-2 border-solid max-md:px-4 max-md:w-full max-md:flex-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/953e0da856bde3cf775114dc0bc6888074e90d4b?placeholderIfAbsent=true"
              alt="Search icon"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
            <input
              type="text"
              placeholder="Pesquisar Imovel"
              className="opacity-50 flex-1 bg-transparent border-none outline-none"
              value={searchData.location}
              onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>
        </div>
        
        <div className="flex w-full items-stretch gap-4 text-base text-black font-normal leading-none mt-6 max-md:flex-col max-md:gap-3 max-md:max-w-full">
          <div className="flex-1 max-md:w-full">
            <div className="bg-[rgba(246,246,246,1)] flex min-h-[50px] w-full items-center justify-between px-4 py-[15px] rounded-md relative">
              <select
                className="self-stretch flex-1 bg-transparent border-none outline-none appearance-none pr-8"
                value={searchData.category}
                onChange={(e) => setSearchData(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="">Categoria</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="industrial">Industrial</option>
              </select>
              <ChevronDown className="absolute right-4 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex-1 max-md:w-full">
            <div className="bg-[rgba(246,246,246,1)] flex min-h-[50px] w-full items-center justify-between px-4 py-[15px] rounded-md relative">
              <select
                className="self-stretch flex-1 bg-transparent border-none outline-none appearance-none pr-8"
                value={searchData.propertyType}
                onChange={(e) => setSearchData(prev => ({ ...prev, propertyType: e.target.value }))}
              >
                <option value="">Tipo de Imovel</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="condominio">Condomínio</option>
                <option value="terreno">Terreno</option>
              </select>
              <ChevronDown className="absolute right-4 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex-1 max-md:w-full">
            <div className="bg-[rgba(246,246,246,1)] flex min-h-[50px] w-full items-center gap-2 px-4 py-[15px] rounded-md">
              <input
                type="text"
                placeholder="Localização"
                className="self-stretch flex-1 bg-transparent border-none outline-none"
                value={searchData.location}
                onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/5b84a4ab2a2bfdb3af0a9fdc0bc3fba77774b37e?placeholderIfAbsent=true"
                alt="Location icon"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
            </div>
          </div>
          
          <div className="flex gap-2 max-md:w-full">
            <button type="button" className="p-2 max-md:flex-1 max-md:flex max-md:justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/92aeac1abcdb05037adca1715dc5362ad65f8810?placeholderIfAbsent=true"
                alt="Filter icon"
                className="aspect-[1] object-contain w-6 shrink-0 my-auto"
              />
            </button>
            
            <button
              type="submit"
              className="bg-[rgba(94,17,119,1)] flex min-h-[50px] items-center gap-3 overflow-hidden text-white font-medium whitespace-nowrap uppercase justify-center px-8 py-[13px] rounded-md hover:bg-[rgba(94,17,119,0.9)] transition-colors flex-1 max-md:flex-2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/a2c8b7c31f1e98bd46ebeae47bd6f163e60e1113?placeholderIfAbsent=true"
                alt="Search icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <span className="self-stretch my-auto">Buscar</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
