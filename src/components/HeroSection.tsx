
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900/80 to-black/90"
      >
        <div 
          className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2574')] bg-center bg-cover opacity-50 mix-blend-overlay"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container-section text-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium mb-6">
            Govt. Authorized Electrical Contractor — EA No. 3071
          </span>
          
          <h1 className="heading-xl text-white mb-6 drop-shadow-sm">
            EXCELLENT POWER <br className="hidden sm:inline" />
            ENGINEERING SERVICES
          </h1>
          
          <p className="subtitle text-white/80 mx-auto mb-8">
            Delivering reliable and innovative power solutions with a commitment to excellence and safety since 2015.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-standard focus-ring"
            >
              Contact Us
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium transition-standard focus-ring"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-standard animate-float focus-ring rounded-full p-2"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>

      {/* Overlay Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
