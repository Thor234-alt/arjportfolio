
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10 transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), hsl(var(--primary)/0.15) 0%, rgba(59, 130, 246, 0) 50%)'
        }}
      />
      
      {/* Floating accent elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl opacity-70 float-animation"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-70 float-animation" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="section-container flex flex-col items-start">
        <div className="reveal max-w-4xl">
          <div className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6 animate-fade-in shadow-sm">
            <span className="text-sm font-medium text-accent">3rd Year Computer Science Student</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6">
            Building <span className="text-primary highlight-text">intelligent solutions</span> with code & AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Specializing in LLM technology, web development, and building intelligent chatbots that transform user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button size="lg" className="group relative overflow-hidden border-gradient bg-background hover:bg-accent/5 transition-all duration-500">
              <span className="relative z-10">View Projects</span>
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
            </Button>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300" aria-label="GitHub">
                <Github size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300" aria-label="Email">
                <Mail size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-0.5 h-10 bg-muted-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-primary animate-scroll-down" style={{
              height: '30%',
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
