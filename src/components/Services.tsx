import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const services = [
  {
    title: 'Pilates',
    description: 'Fortalecimento, flexibilidade e reabilitação com acompanhamento personalizado.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Estética Facial',
    description: 'Protocolos avançados para rejuvenescimento, limpeza profunda e harmonização.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Estética Corporal',
    description: 'Tratamentos para redução de medidas, celulite, flacidez e contorno corporal.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Laser Day',
    description: 'Depilação a laser de alta tecnologia, indolor e para todos os tipos de pele.',
    image: 'https://images.unsplash.com/photo-1555820598-10903cbcd533?q=80&w=2070&auto=format&fit=crop'
  }
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
      duration: 0.5
    });
  };

  return (
    <section id="servicos" ref={sectionRef} className="py-24 md:py-32 bg-brand-nude/30 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-gold uppercase tracking-[0.2em] font-medium text-sm mb-4 inline-block">Nossas Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
            Serviços <span className="italic font-light">Exclusivos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-lg"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/40 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end transform translate-z-50">
                <h3 className="text-3xl font-serif text-brand-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-white/80 font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {service.description}
                </p>
                <div className="mt-6 w-12 h-[1px] bg-brand-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
