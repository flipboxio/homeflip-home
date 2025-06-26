import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <article className="grow max-md:mt-6">
    <img
      src={icon}
      alt={`${title} icon`}
      className="aspect-[1] object-contain w-16 rounded-[0px_0px_0px_0px]"
    />
    <div className="max-w-full w-[308px] mt-6">
      <h3 className="text-[#000929] text-2xl font-bold tracking-[-0.24px]">
        {title}
      </h3>
      <p className="text-[#4D5461] text-base font-normal leading-[26px] mt-4">
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
    <section className="self-center w-full max-w-[1120px] mt-[99px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch justify-center">
        <div className="w-[39%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative aspect-[0.832] pt-10 pb-[222px] px-10 rounded-[0px_0px_0px_0px] max-md:mt-10 max-md:pb-[100px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/8bbd0d4f8b0b548794e5a9e33b79a359740eee75?placeholderIfAbsent=true"
              alt="Benefits background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <div className="relative flex w-full flex-col items-stretch">
              <div className="max-w-full w-[336px] text-[#100A55]">
                <h2 className="text-[32px] font-bold leading-10 tracking-[-0.32px]">
                  A nova maneira de encontrar seu novo lar
                </h2>
                <p className="text-base font-medium leading-[26px] opacity-70 mt-4">
                  Encontre o lugar dos seus sonhos para morar entre mais de 10
                  mil imóveis listados.
                </p>
              </div>
              <button className="bg-[rgba(94,17,119,1)] gap-2 text-sm text-white font-bold text-center leading-[1.4] mt-6 px-4 py-2.5 rounded-lg hover:bg-[rgba(94,17,119,0.9)] transition-colors">
                Pesquisar Imóveis
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <BenefitCard {...benefits[0]} />
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <BenefitCard {...benefits[1]} />
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <BenefitCard {...benefits[2]} />
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <BenefitCard {...benefits[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
