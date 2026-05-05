import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    // Image reveal mask
    tl.fromTo(imageRef.current, 
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.inOut' }
    )
    // Content stagger
    .fromTo(contentRef.current?.children ? Array.from(contentRef.current.children) : [], 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
      "-=1"
    )
    // Badge pop
    .fromTo(badgeRef.current,
      { scale: 0, rotation: -45, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.5)' },
      "-=0.8"
    );

  }, []);

  return (
    <section id="a-clinica" ref={sectionRef} className="py-24 md:py-32 bg-brand-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Container */}
          <div className="w-full lg:w-1/2 relative">
            <div ref={imageRef} className="relative h-[500px] lg:h-[700px] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" 
                alt="Nossa Clínica Lavitá Prime" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 10 Years Badge */}
            <div ref={badgeRef} className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-dark text-brand-gold w-36 h-36 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center p-4 text-center shadow-2xl border-4 border-brand-white">
              <span className="text-4xl md:text-5xl font-serif font-bold">10</span>
              <span className="text-sm md:text-base uppercase tracking-widest font-light mt-1 border-t border-brand-gold/30 pt-1">Anos de<br/>Excelência</span>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2" ref={contentRef}>
            <span className="text-brand-gold uppercase tracking-[0.2em] font-medium text-sm mb-4 inline-block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark leading-tight mb-8">
              Tradição e Inovação em <span className="italic font-light">Estética Avançada</span>.
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-6 font-light">
              Na Lavitá Prime, acreditamos que a verdadeira beleza reflete o equilíbrio entre o corpo e a mente. Há uma década, somos o refúgio em Queimados para quem busca não apenas resultados estéticos, mas uma transformação completa de bem-estar.
            </p>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-10 font-light">
              Nossa equipe de especialistas altamente qualificados utiliza protocolos exclusivos e tecnologia de ponta para oferecer um atendimento personalizado. Cada detalhe da nossa clínica foi pensado para proporcionar a você uma experiência premium, do momento em que entra até o resultado final.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-brand-nude pt-8">
              <div>
                <h4 className="text-3xl font-serif text-brand-gold mb-2">10k+</h4>
                <p className="text-sm uppercase tracking-widest text-brand-dark/60">Atendimentos</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-brand-gold mb-2">100%</h4>
                <p className="text-sm uppercase tracking-widest text-brand-dark/60">Satisfação</p>
              </div>
            </div>

            <a href="#servicos" className="inline-flex items-center text-brand-dark uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors duration-300 group">
              Conheça nossa estrutura
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
