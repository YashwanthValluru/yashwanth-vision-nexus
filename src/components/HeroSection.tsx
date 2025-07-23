import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

const TypingEffect = () => {
  const roles = ['DevOps Engineer', 'ML Developer', 'Cloud Innovator'];
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRole];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRole, roles]);

  return (
    <span className="text-primary hero-text-shadow typing-cursor">
      {currentText}
    </span>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative web-pattern">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in-up">
          <blockquote className="text-2xl md:text-3xl italic text-muted-foreground mb-8 max-w-4xl mx-auto">
            "I'm Spiderman... because I build webs like this."
          </blockquote>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Valluru Yashwanth Reddy
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8">
            <TypingEffect />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="group hover:shadow-glow transition-all">
              <Linkedin className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group hover:shadow-glow transition-all">
              <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="group hover:shadow-glow transition-all">
              <Download className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              Resume PDF
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow animate-bounce-in">
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};