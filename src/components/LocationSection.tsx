
import React from 'react';

interface LocationCardProps {
  name: string;
  properties: string;
  imageUrl: string;
  className?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, properties, imageUrl, className = "" }) => (
  <div className={`relative overflow-hidden rounded-[20px] group cursor-pointer transition-transform hover:scale-105 ${className}`}>
    <img
      src={imageUrl}
      alt={`${name} city view`}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    <div className="absolute bottom-4 left-4 right-4 text-white">
      <h3 className="text-lg font-semibold mb-1 max-md:text-base">{name}</h3>
      <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm inline-block max-md:text-xs">
        {properties}
      </div>
    </div>
  </div>
);

export const LocationSection: React.FC = () => {
  return (
    <section className="bg-[rgba(112,101,240,1)] flex w-full flex-col overflow-hidden items-center text-xs font-normal justify-center px-20 py-[79px] max-md:max-w-full max-md:px-5 max-md:py-[40px]">
      <div className="w-full max-w-[1248px]">
        <div className="grid grid-cols-4 gap-4 h-[563px] max-md:grid-cols-1 max-md:h-auto max-md:gap-6">
          {/* Salvador */}
          <div className="col-span-1 row-span-2 max-md:col-span-1 max-md:row-span-1 max-md:h-[250px]">
            <LocationCard
              name="Salvador"
              properties="2 Propriedades"
              imageUrl="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=600&fit=crop"
              className="h-full"
            />
          </div>
          
          {/* Florianópolis */}
          <div className="col-span-1 row-span-1 max-md:col-span-1 max-md:h-[250px]">
            <LocationCard
              name="Florianópolis"
              properties="2 Propriedades"
              imageUrl="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=280&fit=crop"
              className="h-full"
            />
          </div>
          
          {/* Brasília */}
          <div className="col-span-2 row-span-1 max-md:col-span-1 max-md:h-[250px]">
            <LocationCard
              name="Brasília"
              properties="2 Propriedades"
              imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=280&fit=crop"
              className="h-full"
            />
          </div>
          
          {/* Rio de Janeiro */}
          <div className="col-span-1 row-span-1 max-md:col-span-1 max-md:h-[250px]">
            <LocationCard
              name="Rio de Janeiro"
              properties="2 Propriedades"
              imageUrl="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=280&fit=crop"
              className="h-full"
            />
          </div>
          
          {/* Balneário Camboriú */}
          <div className="col-span-2 row-span-1 max-md:col-span-1 max-md:h-[250px]">
            <LocationCard
              name="Balneário Camboriú"
              properties="2 Propriedades"
              imageUrl="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=280&fit=crop"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
