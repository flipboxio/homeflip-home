
import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <article className="w-full">
    <img
      src={icon}
      alt={`${title} icon`}
      className="aspect-[1] object-contain w-12 md:w-16 mx-auto md:mx-0"
    />
    <div className="w-full mt-4 md:mt-6 text-center md:text-left">
      <h3 className="text-[#000929] text-lg md:text-2xl font-bold tracking-[-0.24px]">
        {title}
      </h3>
      <p className="text-[#4D5461] text-sm md:text-base font-normal leading-relaxed md:leading-[26px] mt-3 md:mt-4">
        {description}
      </p>
    </div>
  </article>
);

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/ee4b3177b0849003147a7e9242a7df5b2fad9fdf?placeholderIfAbsent=true",
      title: "Seguro de propriedade",
      description: "Imóveis Segurados, com cobertura de responsabilidade civil e seguro para uma vida melhor."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/4d8807204e33447feb805c36b8744955b0da229d?placeholderIfAbsent=true",
      title: "Melhor preço",
      description: "Não sabe quanto cobrar pelo seu imóvel? Não se preocupe, deixe que nós fazemos as contas para você."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/982952d02d61a2c5ebf99e34ca71c014190fdde3?placeholderIfAbsent=true",
      title: "Comissão mais baixa",
      description: "Você não precisa mais negociar comissões e pechinchar com outros agentes, pois custa apenas 2%!"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/77e9b0c96319b562c27f8a43aa08def2f08a1670?placeholderIfAbsent=true",
      title: "Controle Geral",
      description: "Faça um tour virtual e agende visitas antes de alugar ou comprar qualquer imóvel. Você tem controle total."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto mt-16 md:mt-[99px] px-4 md:px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-center">
        {/* Left side - Call to action */}
        <div className="w-full lg:flex-1 lg:max-w-md order-2 lg:order-1">
          <div className="relative aspect-square lg:aspect-[0.832] bg-gradient-to-br from-purple-100 to-blue-100 p-6 md:p-10 rounded-2xl lg:rounded-[0px] overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/8bbd0d4f8b0b548794e5a9e33b79a359740eee75?placeholderIfAbsent=true"
              alt="Benefits background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center lg:justify-start">
              <div className="w-full text-[#100A55]">
                <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight lg:leading-10 tracking-[-0.32px] mb-4">
                  A nova maneira de encontrar seu novo lar
                </h2>
                <p className="text-sm md:text-base font-medium leading-relaxed lg:leading-[26px] opacity-70">
                  Encontre o lugar dos seus sonhos para morar entre mais de 10
                  mil imóveis listados.
                </p>
              </div>
              <button className="bg-[rgba(94,17,119,1)] text-sm md:text-sm text-white font-bold text-center leading-[1.4] mt-6 px-6 py-3 rounded-lg hover:bg-[rgba(94,17,119,0.9)] transition-colors w-full lg:w-auto">
                Pesquisar Imóveis
              </button>
            </div>
          </div>
        </div>
        
        {/* Right side - Benefits grid */}
        <div className="w-full lg:flex-1 lg:max-w-lg order-1 lg:order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="w-full">
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
