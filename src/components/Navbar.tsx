
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState('Your Name');

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8',
        isScrolled ? 'py-4 navbar-blur border-b border-white/10' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            {name}<span className="text-primary">.</span>
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-10">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="link-underline text-sm font-medium capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <ThemeToggle />
          
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="flex items-center justify-center mb-8">
          <ThemeToggle />
        </div>
        
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-2xl font-medium capitalize"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
