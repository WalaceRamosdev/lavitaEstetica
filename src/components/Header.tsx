import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif font-bold tracking-wider cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-brand-white'}`}>
          LAVITÁ <span className="text-brand-gold font-light">PRIME</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['A Clínica', 'Serviços', 'Resultados', 'Localização'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${isScrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-brand-white/90 hover:text-brand-gold'}`}>
              {item}
            </a>
          ))}
          <a href="#agendar" className="bg-brand-gold text-brand-white px-6 py-3 rounded-sm text-sm uppercase tracking-widest hover:bg-brand-dark transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Agendar Avaliação
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-brand-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {['A Clínica', 'Serviços', 'Resultados', 'Localização'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-brand-dark text-lg py-2 border-b border-brand-nude" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#agendar" className="bg-brand-gold text-brand-white px-6 py-3 rounded-sm text-center font-medium mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Agendar Avaliação
          </a>
        </div>
      )}
    </header>
  );
};
