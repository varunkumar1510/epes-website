
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" className="section-spacing relative">
      <div className="container-section" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title reveal-item opacity-0">Get In Touch</span>
          <h2 className="heading-lg mb-6 reveal-item opacity-0">Contact Excellent Power Engineering Services</h2>
          <p className="subtitle reveal-item opacity-0">
            Have questions about our services or want to request a quote? 
            We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-item opacity-0">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 94443 82546</p>
                    <p className="text-muted-foreground">+91 72990 65008</p>
                    <p className="text-muted-foreground">+91 72990 65034</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">expoengg15@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Excellent Power Engineering Services,<br />
                      New No. 648, Old No. 641, Ground Floor,<br />
                      Venus Complex, P.H. Road, Aminjikarai,<br />
                      Chennai - 600 030, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Business Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                <h4 className="font-medium mb-2">EA License Information</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">License Number:</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm text-primary font-medium">3071</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-item opacity-0">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="heading-md">Send Us a Message</h3>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScQ7Ui2PxuZJZTW9BbYhQD0eoYVGLdWGDYxIErasl3rWxD15Q/viewform?embedded=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center text-sm"
                >
                  Open in new tab
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden h-[500px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScQ7Ui2PxuZJZTW9BbYhQD0eoYVGLdWGDYxIErasl3rWxD15Q/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 reveal-item opacity-0">
          <div className="glass rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.576837598502!2d80.21996507489484!3d13.074513987250459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266849fb3673d%3A0x3cce58cfac95b5ff!2sExcellent%20Power%20Engineering%20Services!5e1!3m2!1sen!2sin!4v1741595038905!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EPES Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
