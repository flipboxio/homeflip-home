
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
    <section className="flex w-full flex-col items-center justify-center px-20 py-[62px] max-md:max-w-full max-md:px-5 max-md:py-[40px]">
      <div className="flex w-[544px] max-w-full flex-col items-stretch max-md:w-full">
        <form onSubmit={handleSubmit} className="flex w-full items-stretch gap-5 flex-wrap justify-between px-[25px] py-4 rounded-lg max-md:flex-col max-md:gap-4 max-md:max-w-full max-md:px-5 bg-gray-200">
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="" 
            className="text-[#000929] text-lg font-medium leading-none tracking-[-0.09px] opacity-50 my-auto bg-transparent border-none outline-none flex-1 max-md:text-base max-md:w-full max-md:mb-3" 
            required 
          />
          <button 
            type="submit" 
            className="text-white self-stretch bg-[rgba(94,17,119,1)] gap-2.5 text-base font-bold whitespace-nowrap text-center px-10 py-3 rounded-lg max-md:px-5 max-md:w-full hover:bg-[rgba(94,17,119,0.9)] transition-colors"
          >
            Enviar
          </button>
        </form>
        
        <p className="text-[#9ea3ae] text-center text-sm font-medium leading-5 self-center mt-6 max-md:text-xs max-md:max-w-full">
          Junte-se a <span style={{color: 'rgba(112,101,240,1)'}}>10,000+</span>{" "}
          outros proprietários em nossa comunidade imobiliária.
        </p>
      </div>
    </section>
  );
};
