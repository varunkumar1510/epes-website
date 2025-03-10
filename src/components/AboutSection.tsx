
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Award, Clock, MapPin, Shield } from 'lucide-react';

const stats = [
  { icon: <Clock className="w-5 h-5 text-primary" />, label: 'Years of Experience', value: '10+' },
  { icon: <Shield className="w-5 h-5 text-primary" />, label: 'Safety Record', value: '100%' },
  { icon: <MapPin className="w-5 h-5 text-primary" />, label: 'Projects Completed', value: '1000+' }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll('.reveal-item');
    children?.forEach((child) => observer.observe(child));

    return () => {
      children?.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container-section" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="section-title reveal-item opacity-0">About Us</span>
            <h2 className="heading-lg mb-6 reveal-item opacity-0">Powering Chennai's Electrical Infrastructure Since 2008</h2>
            
            <div className="space-y-6 reveal-item opacity-0">
              <p className="text-muted-foreground leading-relaxed">
                Excellent Power Engineering Services (EPES) is a premier electrical contractor based in Aminjikarai, Chennai, 
                offering comprehensive electrical solutions for industrial, commercial, and residential clients.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With Electrical Agency Number 3071, we are a government-authorized contractor specializing in 
                a wide range of electrical services including testing, commissioning, maintenance, and repairs 
                of various electrical equipment and systems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our team of highly qualified engineers and technicians are committed to delivering reliable, 
                efficient, and safe electrical solutions that meet the highest industry standards.
              </p>
            </div>
            
            <div className="mt-8 reveal-item opacity-0">
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-primary hover:underline font-medium transition-standard focus-ring"
              >
                Explore our services
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="relative glass rounded-2xl p-8 overflow-hidden reveal-item opacity-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full transform translate-x-10 -translate-y-10 blur-3xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-standard">
                    <div className="flex items-center space-x-3 mb-3">
                      {stat.icon}
                      <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-display font-bold text-lg mb-2">Government Authorized</h3>
                <p className="text-muted-foreground text-sm mb-3">We are a licensed electrical contractor with all necessary certifications.</p>
                <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                  <span>EA Number:</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full">3071</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
