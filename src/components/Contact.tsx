import React from 'react';

export const Contact = () => {
  return (
    <section id="agendar" className="py-24 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold uppercase tracking-[0.2em] font-medium text-sm mb-4 inline-block">Agende seu horário</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-8">
              O primeiro passo para a sua <span className="italic font-light">melhor versão</span>.
            </h2>
            <p className="text-brand-dark/70 font-light mb-10">
              Preencha o formulário abaixo ou nos chame no WhatsApp. Nossa equipe de especialistas entrará em contato para agendar sua avaliação personalizada.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2 uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full border-b border-brand-nude py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors text-brand-dark"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2 uppercase tracking-wider">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full border-b border-brand-nude py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors text-brand-dark"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2 uppercase tracking-wider">Serviço de Interesse</label>
                <select className="w-full border-b border-brand-nude py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors text-brand-dark/70 appearance-none">
                  <option value="">Selecione uma opção</option>
                  <option value="pilates">Pilates</option>
                  <option value="facial">Estética Facial</option>
                  <option value="corporal">Estética Corporal</option>
                  <option value="laser">Depilação a Laser</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <button className="w-full bg-brand-dark text-brand-white py-4 mt-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors duration-500">
                Solicitar Agendamento
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between" id="localizacao">
            <div className="mb-10">
              <h3 className="text-2xl font-serif text-brand-dark mb-6">Nossa Localização</h3>
              <div className="space-y-4">
                <p className="flex items-start text-brand-dark/70 font-light">
                  <span className="text-brand-gold mr-4 mt-1">📍</span>
                  Avenida Tinguá, 166<br/>
                  Centro, Queimados - RJ<br/>
                  CEP: 26265-000
                </p>
                <p className="flex items-center text-brand-dark/70 font-light">
                  <span className="text-brand-gold mr-4">📞</span>
                  (21) 99999-9999
                </p>
                <p className="flex items-center text-brand-dark/70 font-light">
                  <span className="text-brand-gold mr-4">🕒</span>
                  Seg a Sex: 08h às 18h
                </p>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="w-full h-64 md:h-80 bg-brand-nude relative rounded-sm overflow-hidden grayscale contrast-75 hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0543666299446!2d-43.5594391!3d-22.716187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995738ab79b503%3A0x8e8334861cf1c1de!2sAv.%20Tingu%C3%A1%2C%20166%20-%20Centro%2C%20Queimados%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1714570000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização Lavitá Prime"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
