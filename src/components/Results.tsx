import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const testimonials = [
  { name: "Maria Silva", text: "Profissionalismo impecável. O tratamento facial devolveu minha autoestima!" },
  { name: "Ana Costa", text: "Melhor espaço de Pilates de Queimados. As dores nas costas sumiram." },
  { name: "Juliana Santos", text: "Ambiente luxuoso e atendimento que faz a gente se sentir única." },
  { name: "Fernanda Lima", text: "O Laser Day foi perfeito, zero dor e resultado impressionante." }
];

export const Results = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(sectionRef.current,
      { backgroundColor: '#ffffff' },
      {
        backgroundColor: '#3E2723', // brand-dark
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );

    // Floating animation for testimonials
    const floatingItems = document.querySelectorAll('.testimonial-item');
    floatingItems.forEach((item, i) => {
      gsap.to(item, {
        y: i % 2 === 0 ? -15 : 15,
        duration: 2 + (i % 3),
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });

  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section id="resultados" ref={sectionRef} className="py-24 md:py-32 overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.2em] font-medium text-sm mb-4 inline-block">Prova Social</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-white leading-tight">
              Resultados <span className="italic font-light">Poderosos</span>
            </h2>
          </div>
          <p className="text-brand-white/70 max-w-md font-light text-right">
            Nossa maior conquista é a sua satisfação. Deslize para ver algumas de nossas transformações.
          </p>
        </div>
      </div>

      {/* Draggable Carousel */}
      <div 
        ref={carouselRef}
        className="w-full flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing pb-12"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Placeholder Before & After Items */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="snap-center shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] h-[50vh] relative group overflow-hidden rounded-sm">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-brand-nude">
                <img src={`https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800`} alt="Antes" className="w-full h-full object-cover filter grayscale" />
                <span className="absolute bottom-4 left-4 bg-brand-dark/80 text-brand-white text-xs px-2 py-1 uppercase tracking-wider backdrop-blur-sm">Antes</span>
              </div>
              <div className="w-1/2 h-full bg-brand-white border-l-2 border-brand-gold">
                <img src={`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800`} alt="Depois" className="w-full h-full object-cover" />
                <span className="absolute bottom-4 right-4 bg-brand-gold/90 text-brand-white text-xs px-2 py-1 uppercase tracking-wider backdrop-blur-sm">Depois</span>
              </div>
            </div>
            {/* Reveal Overlay on Hover */}
            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
              <p className="text-brand-white font-serif text-xl italic px-8 text-center">Transformação visível em {item} sessões</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Testimonials */}
      <div className="container mx-auto px-6 mt-16 relative h-40 md:h-64 hidden md:block">
        {testimonials.map((testimony, i) => (
          <div 
            key={i} 
            className={`testimonial-item absolute bg-brand-white/10 backdrop-blur-md border border-brand-white/20 p-6 rounded-sm shadow-xl max-w-xs
              ${i === 0 ? 'top-0 left-[10%]' : i === 1 ? 'bottom-0 left-[40%]' : i === 2 ? 'top-10 right-[10%]' : 'bottom-10 right-[30%]'}
            `}
          >
            <p className="text-brand-white/90 text-sm font-light italic mb-4">"{testimony.text}"</p>
            <p className="text-brand-gold text-xs uppercase tracking-widest font-medium">— {testimony.name}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};
