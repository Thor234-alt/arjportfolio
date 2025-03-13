
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Edit } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState('Your Name');
  const [isEditing, setIsEditing] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    // Check localStorage for saved name
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNameEdit = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    localStorage.setItem('userName', name);
  };

  const handleClickOutside = () => {
    if (isEditing) {
      setIsEditing(false);
      localStorage.setItem('userName', name);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-8',
        isScrolled ? 'py-3 navbar-blur border-b border-white/10 shadow-md' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isEditing ? (
            <form onSubmit={handleNameSubmit} className="flex items-center">
              <input
                ref={nameInputRef}
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={handleClickOutside}
                className="bg-transparent border-b border-primary focus:outline-none focus:border-accent text-xl md:text-2xl font-bold tracking-tight"
                aria-label="Edit your name"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="ml-1 text-primary hover:text-accent"
              >
                <Edit size={16} />
              </Button>
            </form>
          ) : (
            <div className="flex items-center">
              <a 
                href="#home" 
                className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 hover:text-primary"
              >
                {name}<span className="text-gradient">.</span>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleNameEdit}
                className="ml-1 text-muted-foreground hover:text-primary"
              >
                <Edit size={16} />
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-10">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="link-underline text-sm font-medium capitalize transition-all duration-300 hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <ThemeToggle />
          
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transition-all duration-500 md:hidden',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="flex items-center justify-center mb-8">
          <ThemeToggle />
        </div>
        
        {['home', 'about', 'projects', 'skills', 'contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-2xl font-medium capitalize transition-all duration-300 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease'
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
