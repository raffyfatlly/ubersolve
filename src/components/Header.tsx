import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

interface HeaderProps {
  onShowContactForm: () => void;
  onStudioClick: () => void;
}

export default function Header({ onShowContactForm, onStudioClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-lighter/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bot className="text-primary animate-float" size={32} />
            <span className="text-xl font-extrabold tracking-tight">Agentif<span className="text-primary">.ai</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">About</a>
            <a href="https://wa.link/f0ui3h" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex">
            <button 
              onClick={onStudioClick}
              className="relative group"
              data-contact-form-trigger
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium text-white shadow-xl shadow-green-500/20 transition-all duration-200 hover:shadow-green-500/10 group-hover:translate-y-[1px]">
                AI Studio
              </div>
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a href="#features" className="font-medium text-gray-300 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="font-medium text-gray-300 hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="font-medium text-gray-300 hover:text-primary transition-colors">About</a>
              <a href="https://wa.link/f0ui3h" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-300 hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-800">
                <button 
                  onClick={onStudioClick}
                  className="relative group w-full"
                  data-contact-form-trigger
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium text-white shadow-xl shadow-green-500/20 transition-all duration-200 hover:shadow-green-500/10 group-hover:translate-y-[1px] text-center">
                    AI Studio
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}