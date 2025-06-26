
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
    <section className="bg-[rgba(243,243,243,1)] flex w-full flex-col items-center mt-[86px] pt-[68px] pb-[120px] px-[72px] max-md:max-w-full max-md:mt-10 max-md:pb-[60px] max-md:px-5">
      <header className="flex w-[544px] max-w-full flex-col items-center text-[#000929] text-center max-md:w-full">
        <h2 className="text-[#000929] text-[40px] font-bold leading-[1.4] tracking-[-0.4px] max-md:text-[32px] max-md:leading-[1.3] max-md:max-w-full">
          Com base na sua localização
        </h2>
        <p className="text-[#000929] text-base font-normal leading-[26px] opacity-70 mt-4 max-md:text-sm max-md:leading-6 max-md:max-w-full">
          Algumas das propriedades selecionadas perto de você.
        </p>
      </header>
      
      <div className="w-full max-w-[1154px] mt-[15px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[61%] max-md:w-full max-md:ml-0">
            <div className="items-stretch border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] flex w-full flex-col text-lg text-[#100A55] font-medium whitespace-nowrap tracking-[-0.09px] leading-none justify-center bg-[#F0EFFB] mx-auto px-[42px] py-5 rounded-lg border-[1.5px] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex items-center gap-[29px] max-md:flex-col max-md:gap-4 max-md:max-w-full">
                <button
                  onClick={() => setActiveFilter('Alugar')}
                  className={`self-stretch w-[146px] my-auto rounded-[0px_0px_0px_0px] max-md:w-full ${
                    activeFilter === 'Alugar'
                      ? 'text-[#7065F0] font-bold'
                      : 'text-[#100A55]'
                  }`}
                >
                  <div className={`flex w-full flex-col justify-center px-[15px] py-[11px] rounded-md ${
                    activeFilter === 'Alugar'
                      ? 'border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid'
                      : ''
                  }`}>
                    <div className="flex items-center gap-2 max-md:justify-center">
                      <div className="self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Alugar</span>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveFilter('Temporada')}
                  className={`self-stretch flex flex-col justify-center w-[166px] my-auto px-[35px] py-[11px] rounded-md max-md:w-full ${
                    activeFilter === 'Temporada' 
                      ? 'text-[#7065F0] font-bold border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid' 
                      : 'text-[#100A55]'
                  }`}
                >
                  <div className="flex items-center gap-2 max-md:justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/f926be56f08010d951b7fe72480c09e3b01bbc65?placeholderIfAbsent=true"
                      alt="Temporada icon"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    />
                    <span className="self-stretch my-auto">Temporada</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveFilter('Mensal')}
                  className={`self-stretch flex flex-col justify-center w-[89px] my-auto px-[15px] py-[11px] rounded-md max-md:w-full ${
                    activeFilter === 'Mensal' 
                      ? 'text-[#7065F0] font-bold border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] bg-white border-2 border-solid' 
                      : 'text-[#100A55]'
                  }`}
                >
                  <span className="self-stretch my-auto max-md:text-center">Mensal</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stretch text-base text-[#000929] font-medium my-auto max-md:mt-4">
              <div className="border-[color:var(--Shades-of-Purple-Purple-92,#E0DEF7)] flex w-full flex-col justify-center bg-[#F7F7FD] px-4 py-5 rounded-lg border-2 border-solid max-md:pr-5">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/953e0da856bde3cf775114dc0bc6888074e90d4b?placeholderIfAbsent=true"
                    alt="Search icon"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  />
                  <input
                    type="text"
                    placeholder="Pesquisar Imovel"
                    className="text-[#000929] opacity-50 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="self-stretch mt-[35px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {properties.slice(0, 3).map((property, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="self-stretch mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {properties.slice(3, 6).map((property, index) => (
            <div key={index + 3} className="w-[33%] max-md:w-full max-md:ml-0">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
      
      <button className="text-white self-stretch bg-[rgba(94,17,119,1)] gap-2.5 overflow-hidden text-base font-bold text-center mt-[72px] -mb-6 px-8 py-4 rounded-lg max-md:mt-10 max-md:mb-2.5 max-md:px-5 max-md:w-full hover:bg-[rgba(94,17,119,0.9)] transition-colors">
        Ver mais Imóveis
      </button>
    </section>
  );
};
