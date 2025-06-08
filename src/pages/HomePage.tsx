import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Users, Shield, Star, Award, Zap, Check, LineChart, ShoppingCart, TrendingUp, Calendar, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import HomeNavbar from '../components/layout/HomeNavbar';
import Footer from '../components/layout/Footer';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('why-choose-us');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress for background transition
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.5)));
        
        // Apply background transition
        if (scrollProgress > 0) {
          section.style.background = `linear-gradient(to bottom right, 
            rgba(255, 255, 255, ${scrollProgress}) ${scrollProgress * 100}%, 
            rgba(0, 255, 255, ${0.05 * (1 - scrollProgress)}) ${100 - scrollProgress * 50}%
          )`;
        }
        
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('animate-fade-in');
          section.style.transform = 'translateY(0)';
          
          // Animate individual cards with staggered timing
          const cards = section.querySelectorAll('.float-up');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 200); // 200ms delay between each card
          });
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const industries = [
    {
      title: 'Booking System',
      icon: Users,
      description: 'Enterprise booking platform with SEO optimization',
      image: '/Booking Slide.png',
      path: '/booking'
    },
    {
      title: 'Web Design',
      icon: LineChart,
      description: 'Custom website development with SEO package',
      image: '/Web Design 2.png',
      path: '/marketing'
    },
    {
      title: 'E-Commerce',
      icon: ShoppingCart,
      description: 'Custom e-commerce solutions with SEO integration',
      image: '/ecommerce.jpg',
      path: '/marketing'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-primary-900 pt-20 sm:pt-32 pb-8 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                Static Marketing & Digital Transformation
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-3 sm:mb-4 max-w-2xl text-center lg:text-left">
                EnJen Digital is a premier web design and digital marketing agency specializing in creating impactful online experiences and driving business growth.
              </p>
              <p className="text-sm sm:text-lg text-primary-300 mb-6 sm:mb-8 text-center lg:text-left">
                Every solution includes a comprehensive SEO package to maximize your online visibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={index}
                      className={`relative p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-300 flex-1 hover:bg-opacity-90 ${
                        activeCard === index
                          ? 'bg-white text-gray-900'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                      onClick={() => {
                        setActiveCard(index);
                        setTimeout(() => {
                          window.location.href = industry.path;
                        }, 300);
                      }}
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-1 sm:mb-2">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-2 flex-shrink-0" />
                        <h3 className="font-semibold text-xs sm:text-sm text-center sm:text-left">{industry.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm opacity-80 text-center sm:text-left hidden sm:block">{industry.description}</p>
                      {activeCard === index && (
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-1 animate-timer"
                          style={{ backgroundColor: '#00ffff', opacity: 0.8 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative bg-gray-800 overflow-hidden shadow-2xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-lg mx-auto max-w-md sm:max-w-none">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      activeCard === index 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeCard 
                          ? 'opacity-0 -translate-x-full'
                          : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className={`w-full h-full object-contain sm:object-cover ${activeCard === index ? 'slow-zoom' : ''}`}
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${industry.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback content if image fails to load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center opacity-0 transition-opacity duration-300">
                      <div className="text-center text-white p-4">
                        <div className="text-lg sm:text-2xl font-bold mb-2">{industry.title}</div>
                        <div className="text-xs sm:text-sm opacity-90">{industry.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Mobile indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 sm:hidden">
                  {industries.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCard(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        activeCard === index ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section 
        className="py-10 sm:py-20 opacity-0 transition-opacity duration-[2500ms] transform translate-y-8 transition-transform" 
        id="why-choose-us"
        style={{
          background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(0, 255, 255, 0.05) 50%)'
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-12 text-center lg:text-left">
            Why Choose EnJen Digital
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:divide-x lg:divide-gray-300 gap-6 lg:gap-0">
            {[
              {
                icon: Globe,
                title: 'Web Design',
                description: 'Custom website development with responsive design and SEO optimization to establish your professional online presence.'
              },
              {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description: 'Comprehensive marketing strategies including SEO, social media, and PPC campaigns to drive growth and visibility.'
              },
              {
                icon: Calendar,
                title: 'Booking Systems',
                description: 'Advanced appointment scheduling and management platforms designed specifically for service-based businesses.'
              },
              {
                icon: ShoppingCart,
                title: 'E-Commerce',
                description: 'Complete online store solutions with payment processing, inventory management, and conversion optimization.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex-1 px-4 lg:px-8 float-up text-center lg:text-left">
                  <div className="p-3 bg-primary-50 rounded-full inline-block mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="py-10 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link 
              to="/booking" 
              className="bg-white p-4 sm:p-8 border-l-4 border-primary-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Enterprise Booking Platform
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Transform your service-based business with our comprehensive booking and management solution.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  'Online Booking System',
                  'Staff Management',
                  'Analytics Dashboard',
                  'Client Communication'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600 text-sm sm:text-base">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/marketing" 
              className="bg-white p-4 sm:p-8 border-l-4 border-primary-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Digital Marketing Solutions
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Drive growth with our comprehensive digital marketing and analytics platform.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  'SEO Optimization',
                  'Social Media Marketing',
                  'Content Strategy',
                  'Performance Analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600 text-sm sm:text-base">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-10 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-12 text-center lg:text-left">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              'Salons',
              'Retail & E-commerce',
              'Automotive',
              'Hospitality',
              'Insurance',
              'Restaurant',
              'Technology',
             'Music',
            ].map((industry, index) => (
              <div 
                key={index}
               onClick={() => {
                 const footer = document.querySelector('footer');
                 footer?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-white text-primary-900 hover:bg-gray-100 font-semibold px-3 sm:px-8 py-3 sm:py-4 cursor-pointer transition-colors rounded-lg"
              >
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 text-center">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-10 sm:py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white hover:bg-gray-800"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;