import React, { useState } from 'react';
import { PropertyCard } from './PropertyCard';

export const PropertiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Alugar');

  const properties = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/c97f71fde8d0fdd69bed70a6211348c9d09cc4c2?placeholderIfAbsent=true",
      title: "Condomínio da Avenida Rockville",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      price: "$120000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "2", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/a79b7ab9c666db8992d39080f9416e2a75bc7b58?placeholderIfAbsent=true", value: "1", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "100", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/9f62ba507cdbbc7a67ab8801f2002ebd3d475552?placeholderIfAbsent=true", value: "2", label: "Garagens" }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/41161760a9f513a1cee339832f6821d3ff82d81f?placeholderIfAbsent=true",
      title: "Villa Escocesa de Ohio",
      address: "820 Ohio Road Scotch Plains, NJ 07076",
      price: "160000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "4", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/712a4614e4dcfae35bd3a3c1b5d26cb230eee944?placeholderIfAbsent=true", value: "2", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "984", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/9f62ba507cdbbc7a67ab8801f2002ebd3d475552?placeholderIfAbsent=true", value: "3", label: "Garagens" }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/2b46b948654914f06538f0fa3cd1b1096198eb3c?placeholderIfAbsent=true",
      title: "Vila de Enxofre",
      address: "9514 Smoky Hollow St. Sulphur, LA 70663",
      price: "$350000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "3", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/04a076acd57beab87bf9616c18605279c2b16982?placeholderIfAbsent=true", value: "1", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "480", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/9f62ba507cdbbc7a67ab8801f2002ebd3d475552?placeholderIfAbsent=true", value: "1", label: "Garagens" }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/c63a5d6c140bdb9e8806b7c1bfe661e2236c24e2?placeholderIfAbsent=true",
      title: "Apartamento na Avenida Pawnee",
      address: "29 W. Pawnee St. Bloomfield, NJ 07003",
      price: "$180000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "2", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/332aaddd66df69a9439ccee727e7c11d45a8c5f7?placeholderIfAbsent=true", value: "2", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "220", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/56ff287bf28cc764082e3a61bb8ef356d56c2dff?placeholderIfAbsent=true", value: "0", label: "Garagens" }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/c2f6d5762e148ac56981bad15a24153a28ee3750?placeholderIfAbsent=true",
      title: "Apartamento na Avenida Oxford",
      address: "3 W. Oxford Ave. Cary, NC 27511",
      price: "160000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "3", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/84d08eb0d014dfac819a14286fac62f2ac772505?placeholderIfAbsent=true", value: "2", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "120", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/56ff287bf28cc764082e3a61bb8ef356d56c2dff?placeholderIfAbsent=true", value: "0", label: "Garagens" }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/3e775167d06ddd3062edb5221c3b8795bb398924?placeholderIfAbsent=true",
      title: "Apartamento da Avenida Fremont",
      address: "60 Fremont Ave. Hamden, CT 06514",
      price: "$210000",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/552ef2bc51364a0ca74083137f538d290b6b2315?placeholderIfAbsent=true", value: "3", label: "Quartos" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/77440f142e4adcb04e6c46b44cd022a6403a0c2f?placeholderIfAbsent=true", value: "2", label: "Banheiros" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/d0bd1adc37fc80514c159d07e3c2727de87e2696?placeholderIfAbsent=true", value: "480", label: "Área total" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/56ff287bf28cc764082e3a61bb8ef356d56c2dff?placeholderIfAbsent=true", value: "0", label: "Garagens" }
      ]
    }
  ];

  return (
    <section className="bg-[rgba(243,243,243,1)] w-full mt-16 md:mt-[86px] pt-12 md:pt-[68px] pb-16 md:pb-[120px] px-4 md:px-8 lg:px-[72px]">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center text-[#000929] text-center mb-8 md:mb-[15px]">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[1.4] tracking-[-0.4px] mb-4">
            Com base na sua localização
          </h2>
          <p className="text-sm md:text-base font-normal leading-relaxed lg:leading-[26px] opacity-70 max-w-md">
            Algumas das propriedades selecionadas perto de você.
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-8 lg:mb-[35px]">
          <div className="w-full lg:w-[61%]">
            <div className="border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] flex flex-col md:flex-row items-stretch gap-4 md:gap-[29px] text-base md:text-lg text-[#100A55] font-medium whitespace-nowrap tracking-[-0.09px] leading-none bg-[#F0EFFB] p-4 md:px-[42px] md:py-5 rounded-lg border-[1.5px] border-solid">
              <div className="flex gap-2 md:gap-[29px] w-full md:w-auto">
                <button
                  onClick={() => setActiveFilter('Alugar')}
                  className={`flex-1 md:w-[146px] rounded-md transition-colors ${
                    activeFilter === 'Alugar'
                      ? 'text-[#7065F0] font-bold'
                      : 'text-[#100A55]'
                  }`}
                >
                  <div className={`flex justify-center px-4 md:px-[15px] py-[11px] rounded-md ${
                    activeFilter === 'Alugar'
                      ? 'border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid'
                      : ''
                  }`}>
                    <span>Alugar</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveFilter('Temporada')}
                  className={`flex-1 md:w-[166px] rounded-md transition-colors ${
                    activeFilter === 'Temporada' 
                      ? 'text-[#7065F0] font-bold border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid' 
                      : 'text-[#100A55]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 px-4 md:px-[35px] py-[11px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/f926be56f08010d951b7fe72480c09e3b01bbc65?placeholderIfAbsent=true"
                      alt="Temporada icon"
                      className="aspect-[1] object-contain w-4 md:w-5 shrink-0"
                    />
                    <span>Temporada</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveFilter('Mensal')}
                  className={`flex-1 md:w-[89px] rounded-md transition-colors ${
                    activeFilter === 'Mensal' 
                      ? 'text-[#7065F0] font-bold border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid' 
                      : 'text-[#100A55]'
                  }`}
                >
                  <div className="flex justify-center px-4 md:px-[15px] py-[11px]">
                    <span>Mensal</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[39%]">
            <div className="text-sm md:text-base text-[#000929] font-medium">
              <div className="border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] flex w-full bg-[#F7F7FD] px-4 py-4 md:py-5 rounded-lg border-2 border-solid">
                <div className="flex items-center gap-4 w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/953e0da856bde3cf775114dc0bc6888074e90d4b?placeholderIfAbsent=true"
                    alt="Search icon"
                    className="aspect-[1] object-contain w-5 md:w-6 shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Pesquisar Imovel"
                    className="text-[#000929] opacity-50 bg-transparent border-none outline-none flex-1 text-sm md:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 mb-6">
          {properties.slice(0, 3).map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 mb-12 md:mb-[72px]">
          {properties.slice(3, 6).map((property, index) => (
            <PropertyCard key={index + 3} {...property} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="text-white bg-[rgba(94,17,119,1)] text-sm md:text-base font-bold text-center px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[rgba(94,17,119,0.9)] transition-colors w-full md:w-auto">
            Ver mais Imóveis
          </button>
        </div>
      </div>
    </section>
  );
};
