
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
    <article className="grow max-md:mt-6">
      <img
        src={image}
        alt={title}
        className="aspect-[1.49] object-contain w-full min-h-[280px] rounded-[12px_12px_0px_0px]"
      />
      
      <div className="bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.07)] w-full max-w-[416px] p-6 rounded-[0px_0px_12px_12px] max-md:px-5">
        <div className="flex w-full flex-col items-stretch">
          <div>
            <h3 
              className="text-black text-xl font-semibold leading-none cursor-pointer hover:text-[#7065F0] transition-colors"
              onClick={handleTitleClick}
            >
              {title}
            </h3>
            <p className="gap-1 text-base text-[rgba(122,116,116,1)] font-normal leading-none mt-4">
              {address}
            </p>
          </div>
          <div className="text-black text-[22px] font-semibold leading-none mt-5">
            {price}
          </div>
        </div>
        
        <div className="flex w-full gap-[40px_41px] text-[rgba(16,14,44,1)] font-medium justify-between mt-5 pt-3 border-[rgba(122,116,116,0.1)] border-t max-md:gap-2 max-md:justify-between">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex h-[38px] flex-col items-stretch whitespace-nowrap justify-center max-md:flex-1 max-md:text-center max-md:items-center"
            >
              <div className="flex w-full items-center gap-2 text-base leading-none max-md:justify-center max-md:gap-1 max-md:flex-col max-md:items-center">
                <img
                  src={feature.icon}
                  alt={`${feature.label} icon`}
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto max-md:w-4"
                />
                <span className="self-stretch min-h-3 my-auto max-md:text-sm">
                  {feature.value}
                </span>
              </div>
              <div className="text-sm leading-none mt-3 max-md:text-xs max-md:mt-1">
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleMoreInfoClick}
          className="w-full bg-[#117730] text-white text-base font-medium py-3 px-4 rounded-lg mt-6 hover:bg-[#0f6429] transition-colors"
        >
          Ver mais informações do Imóvel
        </button>
      </div>
    </article>
  );
};
