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
  <div className={`w-full ${textColor} ${bgColor} mx-auto pt-8 pb-1.5 px-8 rounded-lg max-md:max-w-full max-md:mt-8 max-md:px-5`}>
    <div className="flex gap-6">
      <img
        src={icon}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-16 shrink-0"
      />
      <div className="min-w-60 w-96">
        <h3 className={`${textColor} text-2xl font-bold tracking-[-0.24px]`}>
          {title}
        </h3>
        <p className={`${textColor} text-base font-normal leading-[26px] opacity-70 mt-4`}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

interface StatItemProps {
  value: string;
  label: string;
  width?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, width = "w-60" }) => (
  <div className={`self-stretch flex flex-col items-stretch ${width} my-auto px-12 rounded-[0px_0px_0px_0px] max-md:px-5`}>
    <div className="text-white text-[40px] font-bold leading-[1.4] tracking-[-0.4px] self-center">
      {value}
    </div>
    <div className="text-white text-base font-medium leading-[26px] opacity-70 mt-2">
      {label}
    </div>
  </div>
);

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[rgba(16,10,85,1)] flex w-full flex-col items-center py-[87px] max-md:max-w-full">
      <header className="flex w-full max-w-[1107px] gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-white text-[40px] font-bold leading-[56px] tracking-[-0.4px] w-[501px] max-md:max-w-full">
          Nós facilitamos para
          <br />
          <span style={{color: 'rgba(112,101,240,1)'}}>inquilinos</span> e{" "}
          <span style={{color: 'rgba(112,101,240,1)'}}>proprietários.</span>
        </h2>
        <p className="text-white text-right text-base font-medium leading-[26px] opacity-70 w-[390px]">
          Seja para alugar um Imóvel para uma temporada ou anual, nós tornamos
          tudo fácil e eficiente. E a melhor parte? Você economizará muito
          tempo e dinheiro com nossos serviços.
        </p>
      </header>
      
      <div className="w-full max-w-[1104px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <StatCard
              icon="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/fb9a6f6d14923397af6889e4b7e800979965c912?placeholderIfAbsent=true"
              title="Visita virtual à casa"
              description="Você pode se comunicar diretamente com os proprietários e nós lhe forneceremos um tour virtual antes de comprar ou alugar o imóvel."
              bgColor="bg-white"
              textColor="text-white"
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <StatCard
              icon="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/51e7b67e70575fdec1e4b219b59ff7e38c6fa44c?placeholderIfAbsent=true"
              title="Encontre o melhor negócio"
              description="Navegue por milhares de imóveis, salve seus favoritos e configure alertas de pesquisa para não perder a melhor oferta de imóvel!"
              bgColor="bg-white"
              textColor="text-[#000929]"
            />
          </div>
        </div>
      </div>
      
      <div className="self-stretch shrink-0 h-px mt-[63px] border-[rgba(49,47,75,1)] border-solid border-2 max-md:max-w-full max-md:mt-10" />
      
      <div className="flex items-center gap-[40px_52px] text-white text-center justify-center flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
        <StatItem value="1.4%" label="Taxa de devolução" />
        
        <div className="bg-white self-stretch w-0 shrink-0 h-16 my-auto border-white border-solid border-2" />
        
        <StatItem value="3,856" label="Imóveis para venda e aluguel" width="w-60" />
        
        <div className="bg-white self-stretch w-0 shrink-0 h-16 my-auto border-white border-solid border-2" />
        
        <StatItem value="2,540" label="Transações diárias concluídas" width="w-60" />
      </div>
    </section>
  );
};
