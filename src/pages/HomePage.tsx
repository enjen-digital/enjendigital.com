import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, BarChart, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-900/20" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-900/40" />
        
        <div className="container mx-auto px-4 pt-32 pb-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise Software Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EnJen Digital delivers powerful software solutions that drive business growth. Specializing in booking systems and digital marketing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Code, value: '99.9%', label: 'Uptime' },
              { icon: Users, value: '40+', label: 'Enterprise Clients' },
              { icon: BarChart, value: '2.5x', label: 'Revenue Growth' },
              { icon: Globe, value: '24/7', label: 'Support' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Our Solutions
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link 
              to="/booking" 
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Booking System
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive booking and business management platform designed for salons, spas, and professional service providers. Streamline operations, reduce no-shows, and increase revenue.
                </p>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">Explore Platform</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <Link 
              to="/marketing" 
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketing Technology
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced marketing automation and analytics platform that delivers measurable results. Drive growth with data-driven strategies and powerful automation tools.
                </p>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">Discover Platform</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;