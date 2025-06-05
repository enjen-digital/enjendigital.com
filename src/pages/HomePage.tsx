import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Users, Shield, Star, Award, Zap, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-primary-900 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Software Development & Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              EnJen Digital delivers enterprise-grade software solutions and digital marketing services to drive business transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Get a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-100">
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

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose EnJen Digital
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Industry Expertise',
                description: '15+ years of experience in software development and digital marketing'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security measures to protect your business data'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Consistently delivering measurable business outcomes'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-start">
                  <div className="p-3 bg-primary-50 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
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

      {/* Industries */}
      <div className="py-16 bg-gray-100">
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