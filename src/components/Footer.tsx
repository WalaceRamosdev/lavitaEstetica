import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-brand-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-white/10 pb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-serif font-bold tracking-wider mb-6">
              LAVITÁ <span className="text-brand-gold font-light">PRIME</span>
            </div>
            <p className="text-brand-white/60 font-light text-sm max-w-xs leading-relaxed">
              10 anos transformando vidas em Queimados. Referência em estética avançada, bem-estar e pilates.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-brand-gold uppercase tracking-widest text-xs font-medium mb-6">Acesso Rápido</h4>
              <ul className="space-y-3">
                {['A Clínica', 'Serviços', 'Resultados', 'Agendar Avaliação'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-').replace('ç', 'c').replace('õ', 'o')}`} className="text-brand-white/70 hover:text-brand-white text-sm font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:items-end">
            <div>
              <h4 className="text-brand-gold uppercase tracking-widest text-xs font-medium mb-6 md:text-right">Redes Sociais</h4>
              <div className="flex space-x-4 justify-start md:justify-end mb-8">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">
                  {/* Instgram Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">
                  {/* Facebook Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Lavitá Prime. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};
