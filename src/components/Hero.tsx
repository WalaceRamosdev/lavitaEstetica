import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Text Reveal
    if (textContainerRef.current) {
      const children = Array.from(textContainerRef.current.children);
      gsap.fromTo(children, 
        { y: 80, opacity: 0, rotateX: -30 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1.5, 
          stagger: 0.2, 
          ease: 'power4.out',
          delay: 0.2
        }
      );
    }

    // Floating Orbs Animation
    orbsRef.current.forEach((orb, i) => {
      if (!orb) return;
      gsap.to(orb, {
        x: 'random(-150, 150)',
        y: 'random(-150, 150)',
        duration: 'random(6, 12)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5
      });
    });

    // Parallax effect on the ambient background
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

  }, []);

  // Interactive Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { innerWidth, innerHeight } = window;

    // Move the cursor glow with slight delay for fluidity
    if (cursorGlowRef.current) {
      gsap.to(cursorGlowRef.current, {
        x: x,
        y: y,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    // 3D Tilt on the text container
    if (textContainerRef.current) {
      const xPos = (e.clientX / innerWidth - 0.5) * 20; 
      const yPos = (e.clientY / innerHeight - 0.5) * -20;
      
      gsap.to(textContainerRef.current, {
        rotateX: yPos,
        rotateY: xPos,
        transformPerspective: 1000,
        duration: 1,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (textContainerRef.current) {
      gsap.to(textContainerRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#170e0a] flex items-center justify-center pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Container for Scroll Parallax */}
      <div ref={containerRef} className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none">
        
        {/* Film Grain Texture (Premium Vibe) */}
        <div className="absolute inset-0 opacity-[0.04] z-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Floating Ambient Orbs */}
        <div ref={el => orbsRef.current[0] = el} className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] bg-brand-gold/15 rounded-full blur-[120px] mix-blend-screen"></div>
        <div ref={el => orbsRef.current[1] = el} className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-brand-nude/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div ref={el => orbsRef.current[2] = el} className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-[#A67C00]/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* Mouse Follower Glow (Interactive Aura) */}
      <div 
        ref={cursorGlowRef} 
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-screen hidden md:block"
      ></div>

      {/* Main Content */}
      <div 
        className="container mx-auto px-6 relative z-20 text-center flex flex-col justify-center items-center h-full pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div ref={textContainerRef} className="flex flex-col items-center">
          
          <div className="inline-flex items-center gap-4 mb-8 translate-z-[40px]">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-gold"></span>
            <span className="text-brand-gold uppercase tracking-[0.4em] font-medium text-xs md:text-sm">Experiência Imersiva</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-gold"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-white leading-tight mb-8 max-w-5xl translate-z-[80px] drop-shadow-2xl">
            A Arte de Cuidar <br/>
            <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-brand-nude via-brand-gold to-brand-white filter drop-shadow-lg">de Você.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-white/80 max-w-2xl font-light leading-relaxed mb-12 translate-z-[60px]">
            10 Anos de Referência em Queimados. Sinta a excelência e descubra a sua melhor versão em um ambiente projetado para a sua transformação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 translate-z-[100px] pointer-events-auto">
            <a href="#agendar" className="relative group overflow-hidden bg-gradient-to-r from-[#b38b1d] to-[#d4af37] text-brand-white px-10 py-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              <div className="absolute inset-0 w-full h-full bg-white/30 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative drop-shadow-md">Agendar Avaliação</span>
            </a>
            
            <a href="#servicos" className="group flex items-center justify-center gap-3 text-brand-white px-10 py-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-all duration-500 border border-brand-white/20 hover:bg-brand-white/5 hover:border-brand-gold/50 backdrop-blur-md">
              Nossos Serviços
              <svg className="w-4 h-4 text-brand-gold transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>



      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%) skewX(12deg);
          }
        }
      `}</style>
    </section>
  );
};
