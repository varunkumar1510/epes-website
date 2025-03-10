
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-standard py-4 md:py-5",
        isScrolled ? "glass shadow-md" : "bg-transparent"
      )}
    >
      <div className="container-section">
        <nav className="flex items-center justify-between">
        <a 
            href="#home" 
            className="font-display font-bold text-primary text-xl md:text-2xl flex items-center gap-3"
            onClick={(e) => { 
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            {/* Logo image - replace the src with your actual logo path */}
            <img
              src="\src\components/epes-logo.png" 
              alt="EPES Logo" 
              className="h-10 w-auto" 
            />
            
            {/* Company Name */}
            <span className={cn(
              "transition-standard",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              EXCELLENT POWER ENGINEERING SERVICES
            </span>
          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-standard hover:text-primary focus-ring",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "px-4 py-2 rounded-full font-medium text-sm transition-standard focus-ring",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30 text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 focus-ring rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background md:hidden transition-standard flex flex-col pt-24",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-section flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-xl transition-standard hover:text-primary focus-ring"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-2.5 rounded-full font-medium text-white bg-primary hover:bg-primary/90 transition-standard focus-ring"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
