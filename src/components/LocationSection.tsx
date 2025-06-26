
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
      <div className="flex flex-col relative min-h-[563px] w-full max-w-[1248px] rounded-[28px] bg-gray-100 max-md:max-w-full">
        {/* Salvador - Nordeste */}
        <div className="absolute top-[100px] left-[200px] z-10">
          <LocationTag
            name="Salvador"
            properties="2 Propriedades"
          />
        </div>
        
        {/* Fernando de Noronha - Nordeste (mais ao norte) */}
        <div className="absolute top-[80px] left-[300px] z-10">
          <LocationTag
            name="Fernando de Noronha"
            properties="2 Propriedades"
          />
        </div>
        
        {/* Balneário Camboriú - Sul */}
        <div className="absolute bottom-[150px] right-[200px] z-10">
          <LocationTag
            name="Balneário Camboriu"
            properties="2 Propriedades"
          />
        </div>
        
        {/* Brasília - Centro */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <LocationTag
            name="Brasilia"
            properties="2 Propriedades"
          />
        </div>
        
        {/* Florianópolis - Sul */}
        <div className="absolute bottom-[120px] right-[150px] z-10">
          <LocationTag
            name="Florianópolis"
            properties="2 Propriedades"
          />
        </div>
        
        {/* Rio de Janeiro - Sudeste */}
        <div className="absolute bottom-[200px] left-[400px] z-10">
          <LocationTag
            name="Rio de Janeiro"
            properties="2 Propriedades"
          />
        </div>
      </div>
    </section>
  );
};
