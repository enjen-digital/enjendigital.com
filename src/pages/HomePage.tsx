import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShoppingBag, Calendar, Store } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 pt-40 pb-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Digital Solutions for Modern Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We create integrated digital experiences that help businesses thrive online. From booking systems to e-commerce, we build solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group">
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your business needs to succeed online, seamlessly integrated into your website
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link 
              to="/booking" 
              className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-primary-50 rounded-full p-3 w-fit mb-6">
                  <Calendar className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Integrated Booking System
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A complete website solution with integrated booking capabilities. Perfect for salons, spas, and service-based businesses.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3 text-primary-600" />
                    Professional Website
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                    Online Booking System
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Store className="w-5 h-5 mr-3 text-primary-600" />
                    Business Management Tools
                  </li>
                </ul>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">View Booking Solutions</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              to="/marketing" 
              className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-primary-50 rounded-full p-3 w-fit mb-6">
                  <ShoppingBag className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Marketing & E-commerce
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive digital marketing solutions and e-commerce integration to help your business grow online.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Store className="w-5 h-5 mr-3 text-primary-600" />
                    E-commerce Integration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3 text-primary-600" />
                    Digital Marketing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ShoppingBag className="w-5 h-5 mr-3 text-primary-600" />
                    Online Store Management
                  </li>
                </ul>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="font-medium">View Marketing Solutions</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Integration Showcase */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integration for Your Business
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Whether you need a booking system or an online store, we create custom solutions that integrate perfectly with your website.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 mb-4">
                  <Calendar className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Booking Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamless appointment scheduling integrated directly into your website
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 mb-4">
                  <Store className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Store Integration</h3>
                <p className="text-gray-600 text-sm">
                  Full e-commerce capabilities for products or services
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 mb-4">
                  <Globe className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Marketing Tools</h3>
                <p className="text-gray-600 text-sm">
                  Built-in marketing and analytics tools to grow your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our integrated solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Schedule a Consultation</Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-primary-900"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;