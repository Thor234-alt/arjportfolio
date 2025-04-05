
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
        className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background -z-10"
        style={{
          background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 50%)'
        }}
      />
      
      {/* Content */}
      <div className="section-container flex flex-col items-start">
        <div className="reveal max-w-4xl">
          <div className="inline-block rounded-full bg-accent px-4 py-1.5 mb-6 animate-fade-in">
            <span className="text-sm font-medium text-primary">3rd Year Computer Science Student</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6">
            Building intelligent solutions with code & AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Specializing in LLM technology, web development, and building intelligent chatbots that transform user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button size="lg" className="group">
              View Projects
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/ARJ2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/adarsh-jakkali-04008b230/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:adarshrj16@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={20} />
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
