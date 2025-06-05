import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket, Target, Code } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Innovative solutions for modern businesses. Choose your path to digital success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Sparkles, label: '40+', text: 'Active Clients' },
              { icon: Rocket, label: '98%', text: 'Client Satisfaction' },
              { icon: Target, label: '2.5x', text: 'Average ROI' },
              { icon: Code, label: '24/7', text: 'Support' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-800/50 border border-gray-700 p-6 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-primary-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Link 
              to="/booking" 
              className="group bg-gray-900 border border-gray-700 p-8 hover:border-primary-500 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Booking System
              </h2>
              <p className="text-gray-300 mb-6">
                Premium booking system for salons & spas. Streamline appointments, reduce no-shows, and grow your beauty business.
              </p>
              <div className="flex items-center text-primary-400 group-hover:text-primary-300">
                <span className="font-medium">Learn more</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/marketing" 
              className="group bg-gray-900 border border-gray-700 p-8 hover:border-primary-500 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Digital Marketing
              </h2>
              <p className="text-gray-300 mb-6">
                Data-driven digital marketing strategies that deliver measurable results and drive business growth.
              </p>
              <div className="flex items-center text-primary-400 group-hover:text-primary-300">
                <span className="font-medium">Learn more</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;