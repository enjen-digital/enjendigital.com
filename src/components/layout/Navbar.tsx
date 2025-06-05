import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  onDemoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const bookingLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  const marketingLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  const navLinks = location.pathname === '/marketing' ? marketingLinks : bookingLinks;
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? (location.pathname === '/marketing' ? 'bg-gray-900 shadow-md py-2' : 'bg-white shadow-md py-2') : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={location.pathname === '/marketing' ? "/enjen-logo-white.png" : "/enjen-logo-black.png"} 
                alt="EnJen Digital Logo" 
                className="h-10 w-auto" 
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  location.pathname === '/marketing' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            {onDemoClick && location.pathname !== '/marketing' && <Button onClick={onDemoClick}>Request Demo</Button>}
          </div>
          
          <button 
            className={`md:hidden ${location.pathname === '/marketing' ? 'text-white' : 'text-gray-700'}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 shadow-lg ${
          location.pathname === '/marketing' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === '/marketing'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              {onDemoClick && location.pathname !== '/marketing' && <Button fullWidth onClick={onDemoClick}>Request Demo</Button>}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;