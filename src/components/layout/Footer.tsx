import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Booking System', href: '/booking' },
        { name: 'Digital Marketing', href: '/marketing' },
        { name: 'Web Design', href: '/marketing' },
        { name: 'SEO Services', href: '/marketing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Case Studies', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Support', href: '#contact' },
        { name: 'Documentation', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center mb-6">
              <img src="/enjen-logo-white.png" alt="EnJen Digital Logo" className="h-12 w-auto" />
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions and strategic marketing expertise. 
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/enjendigital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/enjen_digital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/enjen-digital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <a href="mailto:support@enjendigital.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  support@enjendigital.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="tel:+18335758448" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (833) 575-8448
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-500 mt-1" />
                <span className="text-gray-400 text-sm">
                  2800 E. Enterprise Ave,<br />
                  Suite 333<br />
                  Appleton, WI 54911
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} EnJen Digital. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;