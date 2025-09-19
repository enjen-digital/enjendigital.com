import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import Button from '../ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  onDemoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();
  
  const marketingLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  
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
  
  const navLinks = location.pathname === '/marketing' ? marketingLinks : bookingLinks;
  
  const industries = [
    {
      category: 'Beauty & Personal Care',
      businesses: ['Salon', 'Barber', 'Nail Salon', 'Hair Removal', 'Makeup Artist', 'Tanning', 'Tattoo', 'Booth Renter']
    },
    {
      category: 'Wellness & Health',
      businesses: ['Spa', 'Med Spa', 'Massage', 'Acupuncture', 'Chiropractor', 'Mental Health', 'Nutritionist', 'Coaching', 'Physical Therapy']
    },
    {
      category: 'Fitness & Movement',
      businesses: ['Gym', 'Yoga Studio', 'Personal Trainer', 'Pilates', 'Cross Training', 'Cycling', 'Dance Studio']
    },
    {
      category: 'Specialty Services',
      businesses: ['Pet Grooming']
    }
  ];

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
            <div className="relative">
              <button
                className={`font-medium transition-colors flex items-center ${
                  location.pathname === '/marketing' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isIndustriesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="p-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Perfect for these businesses:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {industries.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-xs font-medium text-primary-600 mb-2 uppercase tracking-wide">
                            {category.category}
                          </h4>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {category.businesses.map((business, businessIndex) => (
                              <span 
                                key={businessIndex}
                                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                              >
                                {business}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Don't see your business? <span className="text-primary-600 hover:text-primary-700 cursor-pointer">Contact us</span> - we work with many more!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  const footer = document.querySelector('footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={location.pathname === '/marketing' ? 'text-white border-white hover:bg-white hover:text-gray-900' : ''}
              >
                Contact Us
              </Button>
              {onDemoClick && location.pathname !== '/marketing' && (
                <Button onClick={onDemoClick}>View Demo</Button>
              )}
            </div>
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
            <div>
              <button
                className={`font-medium py-2 transition-colors flex items-center justify-between w-full ${
                  location.pathname === '/marketing'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isIndustriesOpen && (
                <div className="mt-2 pl-4 space-y-3">
                  {industries.map((category, index) => (
                    <div key={index}>
                      <h4 className={`text-xs font-medium mb-2 uppercase tracking-wide ${
                        location.pathname === '/marketing' ? 'text-gray-400' : 'text-primary-600'
                      }`}>
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {category.businesses.map((business, businessIndex) => (
                          <span 
                            key={businessIndex}
                            className={`inline-block px-2 py-1 text-xs rounded-md transition-colors ${
                              location.pathname === '/marketing'
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                            }`}
                          >
                            {business}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  const footer = document.querySelector('footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={location.pathname === '/marketing' ? 'text-white border-white hover:bg-white hover:text-gray-900' : ''}
              >
                Contact Us
              </Button>
              {onDemoClick && location.pathname !== '/marketing' && <Button fullWidth onClick={onDemoClick}>View Demo</Button>}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;