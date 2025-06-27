
import React from 'react';

interface PropertyFeature {
  icon: string;
  value: string;
  label: string;
}

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  features: PropertyFeature[];
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  address,
  price,
  features
}) => {
  const handleTitleClick = () => {
    console.log(`Navegando para detalhes do imóvel: ${title}`);
    // Aqui seria implementada a navegação para a página de detalhes
  };

  const handleMoreInfoClick = () => {
    console.log(`Ver mais informações do imóvel: ${title}`);
    // Aqui seria implementada a navegação para a página detalhada do imóvel
  };

  return (
    <article className="w-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <img
        src={image}
        alt={title}
        className="aspect-[1.49] object-cover w-full h-48 md:h-[280px] rounded-t-[12px]"
      />
      
      <div className="bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.07)] w-full p-4 md:p-6 rounded-b-[12px]">
        <div className="flex w-full flex-col">
          <div>
            <h3 
              className="text-black text-lg md:text-xl font-semibold leading-tight cursor-pointer hover:text-[#7065F0] transition-colors"
              onClick={handleTitleClick}
            >
              {title}
            </h3>
            <p className="text-sm md:text-base text-[rgba(122,116,116,1)] font-normal leading-tight mt-3 md:mt-4">
              {address}
            </p>
          </div>
          <div className="text-black text-lg md:text-[22px] font-semibold leading-none mt-4 md:mt-5">
            {price}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 text-[rgba(16,14,44,1)] font-medium mt-4 md:mt-5 pt-3 border-t border-[rgba(122,116,116,0.1)]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base leading-none mb-2 md:mb-3">
                <img
                  src={feature.icon}
                  alt={`${feature.label} icon`}
                  className="aspect-[1] object-contain w-4 md:w-6 shrink-0"
                />
                <span className="min-h-3">
                  {feature.value}
                </span>
              </div>
              <div className="text-xs md:text-sm leading-none">
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleMoreInfoClick}
          className="w-full bg-[#117730] text-white text-sm md:text-base font-medium py-3 px-4 rounded-lg mt-4 md:mt-6 hover:bg-[#0f6429] transition-colors"
        >
          Ver mais informações do Imóvel
        </button>
      </div>
    </article>
  );
};
