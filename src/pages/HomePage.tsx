import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Users, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 pt-40 pb-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              #1 Software Solutions for Business Growth
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              EnJen Digital delivers enterprise-grade software solutions that drive innovation and accelerate business transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-4 gap-8 md:gap-4">
              {[
                { icon: Shield, value: '99.99%', label: 'Enterprise Security' },
                { icon: Users, value: '100K+', label: 'Active Users' },
                { icon: BarChart, value: '2.5x', label: 'Growth Rate' },
                { icon: Globe, value: '24/7', label: 'Global Support' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-center text-white">
                    <Icon className="w-6 h-6 mr-3 text-primary-400" />
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our platforms can transform your business operations and drive growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link 
              to="/booking" 
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="bg-primary-50 rounded-lg p-3 w-fit mb-6">
                  <img
                    src="/booking-icon.svg"
                    alt="Booking System"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Booking Platform
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your service-based business with our comprehensive booking and management solution. Built for enterprise scalability and performance.
                </p>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              to="/marketing" 
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="bg-primary-50 rounded-lg p-3 w-fit mb-6">
                  <img
                    src="/marketing-icon.svg"
                    alt="Marketing Technology"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketing Technology Suite
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade marketing automation and analytics platform. Drive growth with AI-powered insights and automation.
                </p>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust EnJen Digital for their enterprise software needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Schedule Consultation</Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;