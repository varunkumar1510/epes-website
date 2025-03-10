
import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Contact } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground/5 py-12 md:py-16">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-display font-bold text-2xl text-orange-500 mb-2">EXCELLENT POWER ENGINEERING SERVICES</div>
            <p className="text-black-400 text-sl">
            "Reliable Power, Sustainable Solutions."
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.linkedin.com/in/soban-babu-n-8aba2877 " className="text-muted-foreground hover:text-primary transition-standard">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:expoengg15@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-standard"
            >
              <Contact className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
        </div>
        </div>
        
        <hr className="border-foreground/10 my-8" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Excellent Power Engineering Services. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
