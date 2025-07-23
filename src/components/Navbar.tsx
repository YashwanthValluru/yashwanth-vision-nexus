import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Calendar, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <div className="flex items-center space-x-2">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 bg-card-gradient backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-glow">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="px-3 py-1 text-sm text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="group hover:shadow-glow hover:scale-105 transition-all duration-300 hover:border-primary"
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Resume
          </Button>
          
          <Button 
            size="sm" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="mr-2 h-4 w-4 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Schedule Meet</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="outline"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-card-gradient backdrop-blur-md border border-border rounded-lg p-4 shadow-glow min-w-48">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded hover:bg-primary/10"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};