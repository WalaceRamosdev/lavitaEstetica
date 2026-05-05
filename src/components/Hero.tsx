import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax Effect
    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Text Reveal Stagger
    if (textRef.current) {
      const elements = textRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/30 to-brand-nude z-10 mix-blend-multiply"></div>
        {/* Placeholder premium image */}
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
          alt="Mulher relaxando em tratamento estético" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center md:text-left h-full flex flex-col justify-center items-center md:items-start" ref={textRef}>
        <span className="text-brand-gold uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-6 inline-block">Bem-vindo à Lavitá Prime</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-white leading-tight mb-6 max-w-4xl drop-shadow-lg">
          A Arte de Cuidar <br/>
          <span className="italic font-light">de Você.</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-white/90 max-w-xl font-light leading-relaxed mb-10 drop-shadow-md">
          10 Anos de Referência em Queimados. Descubra a sua melhor versão com nossos tratamentos exclusivos de estética e pilates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#agendar" className="bg-brand-gold hover:bg-brand-white hover:text-brand-dark text-brand-white px-10 py-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-all duration-500 shadow-xl">
            Agendar Avaliação
          </a>
          <a href="#servicos" className="border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark px-10 py-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-all duration-500">
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};
