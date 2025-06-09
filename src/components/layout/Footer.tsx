import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { addToNewsletter, verifyEmail } from '../../lib/hunter';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Verify email first
      const emailVerification = await verifyEmail(newsletterEmail);
      
      // Only warn if email is definitely undeliverable
      if (emailVerification.result === 'undeliverable') {
        console.warn('Email may be undeliverable, but continuing with newsletter subscription');
      }

      // Add to newsletter list
      await addToNewsletter(newsletterEmail);

      setSubmitStatus('success');
      setNewsletterEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting newsletter subscription:', error);
      setSubmitStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img src="/enjen-logo-white.png" alt="EnJen Digital Logo" className="h-10 w-auto" />
            </a>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              Transforming businesses through innovative digital solutions and strategic marketing expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/enjendigital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/enjen_digital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/enjen-digital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
                <span className="text-gray-400 text-sm">(833) 575-8448</span>
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
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !newsletterEmail.trim()}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">
                  ✓ Thank you for subscribing to our newsletter!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">
                  ✗ There was an error. Please try again.
                </p>
              )}
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
            © {currentYear} EnJen Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;