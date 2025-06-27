
import React from 'react';

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-[#000929]"
}) => (
  <div className={`w-full ${textColor} ${bgColor} p-6 md:p-[35px] rounded-lg`}>
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
      <img src={icon} alt={`${title} icon`} className="aspect-[1] object-contain w-12 md:w-16 shrink-0" />
      <div className="flex-1">
        <h3 className={`${textColor} text-xl md:text-2xl font-bold tracking-[-0.24px] mb-3 md:mb-4`}>
          {title}
        </h3>
        <p className={`${textColor} text-sm md:text-base font-normal leading-relaxed md:leading-[26px] opacity-70`}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex flex-col items-center text-center px-4 md:px-12">
    <div className="text-white text-3xl md:text-[40px] font-bold leading-tight tracking-[-0.4px] mb-2">
      {value}
    </div>
    <div className="text-white text-sm md:text-base font-medium leading-relaxed md:leading-[26px] opacity-70">
      {label}
    </div>
  </div>
);

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[rgba(16,10,85,1)] w-full py-12 md:py-[87px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] justify-between items-center lg:items-start text-center lg:text-left mb-12 md:mb-16">
          <h2 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[56px] tracking-[-0.4px] max-w-none lg:max-w-[501px]">
            Nós facilitamos para
            <br />
            <span style={{color: 'rgba(112,101,240,1)'}}>inquilinos</span> e{" "}
            <span style={{color: 'rgba(112,101,240,1)'}}>proprietários.</span>
          </h2>
          <p className="text-white text-sm md:text-base font-medium leading-relaxed md:leading-[26px] opacity-70 max-w-none lg:max-w-[390px] lg:text-right">
            Seja para alugar um Imóvel para uma temporada ou anual, nós tornamos
            tudo fácil e eficiente. E a melhor parte? Você economizará muito
            tempo e dinheiro com nossos serviços.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 mb-12 md:mb-[63px]">
          <StatCard 
            icon="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/fb9a6f6d14923397af6889e4b7e800979965c912?placeholderIfAbsent=true" 
            title="Visita virtual à casa" 
            description="Você pode se comunicar diretamente com os proprietários e nós lhe forneceremos um tour virtual antes de comprar ou alugar o imóvel." 
            bgColor="bg-white" 
            textColor="text-[#000929]" 
          />
          <StatCard 
            icon="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/51e7b67e70575fdec1e4b219b59ff7e38c6fa44c?placeholderIfAbsent=true" 
            title="Encontre o melhor negócio" 
            description="Navegue por milhares de imóveis, salve seus favoritos e configure alertas de pesquisa para não perder a melhor oferta de imóvel!" 
            bgColor="bg-white" 
            textColor="text-[#000929]" 
          />
        </div>
        
        <div className="w-full h-px bg-[rgba(49,47,75,1)] mb-12 md:mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[52px] text-white text-center">
          <StatItem value="1.4%" label="Taxa de devolução" />
          <StatItem value="3,856" label="Imóveis para venda e aluguel" />
          <StatItem value="2,540" label="Transações diárias concluídas" />
        </div>
      </div>
    </section>
  );
};
