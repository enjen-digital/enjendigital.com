import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
      ]
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img src="/enjen-logo-black.png" alt="EnJen Digital Logo" className="h-10 w-auto" />
            </a>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              Transforming businesses through innovative digital solutions and strategic marketing expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <span className="text-gray-400 text-sm">support@enjendigital.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <span className="text-gray-400 text-sm">(920) 215-1802</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-500 mt-1" />
                <span className="text-gray-400 text-sm">
                  2800 E. Enterprise Ave,<br />
                  Suite 333<br />
                  Appleton, WI
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest digital marketing tips and exclusive promotions.
            </p>
            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
            }}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © {currentYear} Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;