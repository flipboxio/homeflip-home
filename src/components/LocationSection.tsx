import React from 'react';

interface LocationTagProps {
  name: string;
  properties: string;
  className?: string;
}

const LocationTag: React.FC<LocationTagProps> = ({ name, properties, className = "" }) => (
  <div className={`flex flex-col items-stretch ${className}`}>
    <div className="text-white">{name}</div>
    <div className="bg-[#F8F8FF] text-[#2D7DFF] mt-1 px-4 py-0.5 rounded-[10px]">
      {properties}
    </div>
  </div>
);

export const LocationSection: React.FC = () => {
  return (
    <section className="bg-[rgba(112,101,240,1)] flex w-full flex-col overflow-hidden items-center text-xs font-normal justify-center px-20 py-[79px] max-md:max-w-full max-md:px-5">
      <div className="flex flex-col relative min-h-[563px] w-full max-w-[1248px] pl-6 pr-20 pt-[194px] pb-[17px] rounded-[28px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/040fe6f248e241579615f8e023273613/c924464366a9f119ddb8d3bcdb90ec0d4921ebe3?placeholderIfAbsent=true"
          alt="Brazil map"
          className="absolute h-full w-full object-cover inset-0"
        />
        
        <div className="relative self-center z-10 flex w-[438px] max-w-full flex-col">
          <LocationTag
            name="Salvador"
            properties="2 Propriedades"
            className="w-[122px] max-w-full"
          />
          
          <LocationTag
            name="Fernando de Noronha"
            properties="2 Propriedades"
            className="w-[133px] max-w-full mt-4"
          />
        </div>
        
        <div className="relative mt-[-33px] w-[122px] max-w-full">
          <LocationTag
            name="Balneário Camboriu"
            properties="2 Propriedades"
          />
        </div>
        
        <div className="relative z-10 flex w-[449px] max-w-full flex-col mt-[212px] max-md:mt-10">
          <LocationTag
            name="Brasilia"
            properties="2 Propriedades"
            className="z-10 w-[122px] max-w-full"
          />
          
          <LocationTag
            name="Florianópolis"
            properties="2 Propriedades"
            className="w-[122px] max-w-full -mt-8"
          />
        </div>
        
        <div className="relative flex mt-[-33px] w-[123px] max-w-full flex-col items-stretch">
          <LocationTag
            name="Rio de Janeiro"
            properties="2 Propriedades"
          />
        </div>
      </div>
    </section>
  );
};
