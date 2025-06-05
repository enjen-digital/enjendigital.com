import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Users, Shield, Star, Award, Zap, Check, LineChart, ShoppingCart, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const industries = [
    {
      title: 'Booking System',
      icon: Users,
      description: 'Enterprise booking platform with SEO optimization',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      path: '/booking'
    },
    {
      title: 'Web Design',
      icon: LineChart,
      description: 'Custom website development with SEO package',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg',
      path: '/marketing'
    },
    {
      title: 'E-Commerce',
      icon: ShoppingCart,
      description: 'Custom e-commerce solutions with SEO integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      path: '/e-commerce'
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
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-primary-900 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Static Marketing & Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-2xl">
                EnJen Digital is a premier web design and digital marketing agency specializing in creating impactful online experiences and driving business growth.
              </p>
              <p className="text-lg text-primary-300 mb-8">
                Every solution includes a comprehensive SEO package to maximize your online visibility.
              </p>
              
              <div className="flex gap-4 mb-8">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={index}
                      className={`relative p-3 rounded-lg cursor-pointer transition-all duration-300 w-1/3 hover:bg-opacity-90 ${
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
                      <div className="flex items-center mb-2">
                        <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
                        <h3 className="font-semibold">{industry.title}</h3>
                      </div>
                      <p className="text-sm opacity-80">{industry.description}</p>
                      {activeCard === index && (
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-1 animate-timer"
                          style={{ backgroundColor: 'currentColor', opacity: 0.3 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl h-[400px]">
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose EnJen Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            We combine creative excellence with data-driven strategies to deliver exceptional results for our clients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Proven Track Record',
                description: 'Over 15 years of experience delivering successful digital solutions across multiple industries.'
              },
              {
                icon: Shield,
                title: 'End-to-End Solutions',
                description: 'Comprehensive digital services from web design to marketing, all with built-in SEO optimization.'
              },
              {
                icon: Award,
                title: 'Results-Driven Approach',
                description: 'We focus on delivering measurable results that directly impact your business growth.'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Personal account manager and responsive support team available when you need them.'
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven Strategy',
                description: 'Strategic decisions backed by analytics and industry insights for maximum impact.'
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Quick deployment and efficient execution to get your solutions up and running fast.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-primary-50 rounded-lg inline-block mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/booking" 
              className="bg-white p-8 border-l-4 border-primary-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Booking Platform
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your service-based business with our comprehensive booking and management solution.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Online Booking System',
                  'Staff Management',
                  'Analytics Dashboard',
                  'Client Communication'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/marketing" 
              className="bg-white p-8 border-l-4 border-primary-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Digital Marketing Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Drive growth with our comprehensive digital marketing and analytics platform.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'SEO Optimization',
                  'Social Media Marketing',
                  'Content Strategy',
                  'Performance Analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Healthcare',
              'Professional Services',
              'Retail & E-commerce',
              'Manufacturing',
              'Financial Services',
              'Education',
              'Technology',
              'Hospitality'
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 border-l-4 border-primary-600 shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary-900 hover:bg-gray-100"
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