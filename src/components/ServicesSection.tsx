
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  ActivitySquare, 
  Zap, 
  FileText, 
  FlaskConical, 
  ShieldCheck, 
  Lightbulb,
  BarChart4,
  Thermometer,
  Briefcase,
  PaintBucket,
  Wrench,
  DropletIcon
} from 'lucide-react';

const services = [
  {
    icon: <ActivitySquare className="w-6 h-6 text-primary" />,
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing and commissioning of electrical equipment including transformers, CT/VT/isolators, and various breaker types (ACB/VCB/SF6/OCB).'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Transformer Services',
    description: 'Specialized services for transformer oil filtration, repairs, rewinding, commissioning, and OLTC service and repairs.'
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'High Voltage Testing',
    description: 'Professional high voltage testing of cables, transformers, and panels using advanced equipment to verify insulation integrity.'
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-primary" />,
    title: 'Relay Testing',
    description: 'Testing of relays in C & R Panel/MV Panels with precision equipment to ensure proper functioning and calibration.'
  },
  {
    icon: <ActivitySquare className="w-6 h-6 text-primary" />,
    title: 'Impedance & Safety Testing',
    description: 'Loop impedance testing, ELCB/RCCB testing, and comprehensive earthing system testing for electrical safety compliance.'
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    title: 'Power Quality Studies',
    description: 'Detailed analysis and studies of power quality issues to identify problems and recommend optimal solutions.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Maintenance Services',
    description: 'Preventive & predictive maintenance services, annual service maintenance contracts, and fault analysis & rectification.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: 'Lightning Protection',
    description: 'Expert assessment and implementation of lightning protection systems to safeguard facilities and equipment.'
  },
  {
    icon: <Thermometer className="w-6 h-6 text-primary" />,
    title: 'Thermal Imaging',
    description: 'Thermal imaging of electrical equipment to identify hotspots and potential failure points before they cause problems.'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: 'CEIG Liaison Works',
    description: 'Professional assistance with Chief Electrical Inspector to Government (CEIG) documentation and approval processes.'
  },
  {
    icon: <PaintBucket className="w-6 h-6 text-primary" />,
    title: 'Substation Painting',
    description: 'Professional painting services for substation equipment to extend lifespan and improve appearance.'
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: 'Equipment Erection',
    description: 'Erection of transformers and switchgear performed by experienced professionals with attention to safety and quality.'
  },
  {
    icon: <DropletIcon className="w-6 h-6 text-primary" />,
    title: 'Equipment Supply',
    description: 'Supply of high-quality transformer oil and breather units from trusted manufacturers.'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
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
    <section id="services" className="section-spacing bg-accent relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container-section relative z-10" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title reveal-item opacity-0 transition-opacity duration-300">Our Services</span>
          <h2 className="heading-lg mb-6 reveal-item opacity-0 transition-opacity duration-300">Comprehensive Electrical Engineering Solutions</h2>
          <p className="subtitle reveal-item opacity-0 transition-opacity duration-300">
            We offer a wide range of specialized electrical services designed to meet the needs of industrial, 
            commercial, and residential clients with a focus on reliability, efficiency, and safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal-item opacity-0 transition-opacity duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="heading-sm text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-item opacity-0 transition-opacity duration-300">
          <div className="glass-dark rounded-xl p-8 md:p-10">
            <h3 className="heading-md mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team of experts can develop tailored electrical solutions to meet your specific requirements.
            </p>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-standard inline-block focus-ring"
            >
              Contact Us for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
