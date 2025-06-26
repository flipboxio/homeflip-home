import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Handle newsletter signup here
    setEmail('');
  };

  return (
    <section className="flex w-full flex-col items-center justify-center px-20 py-[62px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[544px] max-w-full flex-col items-stretch">
        <header className="z-10 flex flex-col items-center max-md:max-w-full">
          <div className="text-[#7065F0] text-center text-2xl font-bold tracking-[-0.24px]">
            Ofertas ùnicas
          </div>
          <div className="flex w-full flex-col items-center text-[#000929] mt-2">
            <h2 className="text-[#000929] text-[40px] font-bold leading-[1.4] tracking-[-0.4px]">
              Você é um senhorio?
            </h2>
            <p className="text-[#000929] text-center text-base font-medium leading-[26px] opacity-50 mt-4 max-md:max-w-full">
              Descubra maneiras de aumentar o valor do seu imóvel e
              anunciá-lo. Sem spam.
            </p>
          </div>
        </header>
        
        <form 
          onSubmit={handleSubmit}
          className="flex w-full items-stretch gap-5 flex-wrap justify-between bg-white -mt-5 px-[25px] py-4 rounded-lg max-md:max-w-full max-md:px-5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu endereço de e-mail"
            className="text-[#000929] text-lg font-medium leading-none tracking-[-0.09px] opacity-50 my-auto bg-transparent border-none outline-none flex-1"
            required
          />
          <button
            type="submit"
            className="text-white self-stretch bg-[rgba(94,17,119,1)] gap-2.5 text-base font-bold whitespace-nowrap text-center px-10 py-3 rounded-lg max-md:px-5 hover:bg-[rgba(94,17,119,0.9)] transition-colors"
          >
            Enviar
          </button>
        </form>
        
        <p className="text-[#9ea3ae] text-center text-sm font-medium leading-5 self-center mt-6 max-md:max-w-full">
          Junte-se a <span style={{color: 'rgba(112,101,240,1)'}}>10,000+</span>{" "}
          outros proprietários em nossa comunidade imobiliária.
        </p>
      </div>
    </section>
  );
};
