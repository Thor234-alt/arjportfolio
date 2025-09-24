
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const flowLineRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
      
      // Parallax effect
      if (parallaxRef.current) {
        const parallaxSpeed = scrolled * 0.5;
        parallaxRef.current.style.transform = `translateY(${parallaxSpeed}px)`;
      }
      
      // Flow line animation
      if (flowLineRef.current) {
        const progress = Math.min(scrolled / window.innerHeight, 1);
        flowLineRef.current.style.setProperty('--flow-progress', `${progress}`);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      setMousePos({ x, y });
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-section"
      ref={containerRef}
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 -z-20">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"
          style={{
            background: `
              radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
                hsl(var(--primary) / 0.15) 0%, 
                hsl(var(--primary) / 0.05) 30%, 
                transparent 70%),
              linear-gradient(135deg, 
                hsl(var(--primary) / 0.03) 0%, 
                hsl(var(--secondary) / 0.08) 50%, 
                hsl(var(--accent) / 0.05) 100%)
            `
          }}
        />
      </div>

      {/* Interactive Flow Lines */}
      <div 
        ref={flowLineRef}
        className="absolute inset-0 -z-10 pointer-events-none flow-lines-container"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d={`M${mousePos.x * 100},${mousePos.y * 100} Q50,20 80,50 T20,80`}
            stroke="url(#flowGradient)"
            strokeWidth="0.2"
            fill="none"
            className="flow-path animate-flow"
            style={{ 
              strokeDasharray: '10 5',
              strokeDashoffset: scrollY * 0.1
            }}
          />
          <path
            d={`M${(1 - mousePos.x) * 100},${mousePos.y * 100} Q30,80 70,30 T90,70`}
            stroke="url(#flowGradient)"
            strokeWidth="0.15"
            fill="none"
            className="flow-path animate-flow"
            style={{ 
              strokeDasharray: '15 8',
              strokeDashoffset: -scrollY * 0.15,
              animationDelay: '1s'
            }}
          />
        </svg>
      </div>

      {/* Glass Content Container */}
      <div className="section-container flex flex-col items-start relative z-10">
        <div className="reveal max-w-4xl relative">
          {/* Glass backdrop */}
          <div className="absolute -inset-4 glass-backdrop rounded-3xl opacity-80" />
          
          <div className="relative z-10 p-6">
            <div className="inline-block rounded-full glass px-6 py-2 mb-6 animate-fade-in border border-primary/20">
              <span className="text-sm font-medium text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4th Year Engineering Student
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent parallax-text">
              Building intelligent solutions with code & AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl backdrop-blur-sm">
              Specializing in DevOps, cloud infrastructure (AWS & Azure), and building intelligent solutions that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Button size="lg" className="group glass-button relative overflow-hidden">
                <span className="relative z-10">View Projects</span>
                <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>
              
              <div className="flex items-center gap-4">
                <a href="https://github.com/ARJ2004" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/adarsh-jakkali-04008b230/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:adarshrj16@gmail.com" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-sm text-muted-foreground mb-3 glass px-3 py-1 rounded-full">Scroll to explore</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary animate-scroll-down rounded-full" style={{
              height: '40%',
            }}></div>
          </div>
        </div>
      </div>

      {/* Smooth transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
