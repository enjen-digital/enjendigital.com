// Core imports
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

// Props interface
interface HeroSectionProps {
  onDemoClick: () => void;
}

/**
 * Hero section component
 * Displays the main landing section with call-to-action buttons
 * and social proof elements
 */
const HeroSection: React.FC<HeroSectionProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-white to-primary-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-200 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" aria-label="Grow Your Beauty Business with Seamless Booking">
              Grow Your Beauty Business with Seamless Booking
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-lg">
              All-in-one booking system with integrated website designed specifically for salons, spas, and barber shops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" onClick={onDemoClick}>
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>See Features</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
            
            <div className="mt-8 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              <div className="text-gray-700 text-center sm:text-left whitespace-nowrap mb-4 sm:hidden">
                <span className="font-bold">40+</span> salons & spas trust us
              </div>
              <div className="flex -space-x-2 mr-4">
                {[
                  {
                    name: ['J.', '✧'],
                    bg: 'bg-black',
                    text: 'text-white',
                    extraClasses: 'leading-[0.75] py-0.5'
                  },
                  { name: 'Hairapy', bg: 'bg-primary-600', text: 'text-white' },
                  { 
                    name: ['King', 'Kutz'],
                    bg: 'bg-accent-500',
                    text: 'text-white',
                    extraClasses: 'leading-[0.9]'
                  },
                  { 
                    name: ['Day', 'Spa'],
                    bg: 'bg-gray-900',
                    text: 'text-white',
                    extraClasses: 'leading-[0.9]'
                  }
                ].map((image, i) => (
                  <div key={i} className="w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <div className={`w-full h-full flex items-center justify-center ${image.bg} ${image.text} text-[8px] font-bold ${image.extraClasses || ''}`}>
                      {Array.isArray(image.name) ? (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-[10px] sm:text-[8px]">{image.name[0]}</span>
                          <span className="text-[12px] sm:text-[10px]">{image.name[1]}</span>
                        </div>
                      ) : (
                        <span className="text-[10px] sm:text-[8px]">{image.name}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-gray-700 text-center sm:text-left whitespace-nowrap hidden sm:block">
                <span className="font-bold">40+</span> salons & spas trust us
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-in-right px-4 sm:px-0">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/Screenshot Analytics.png"
                  alt="Analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-12 sm:-bottom-16 left-0 bg-white rounded-lg shadow-lg p-3 sm:p-4 w-36 sm:w-48 transform sm:-translate-x-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Today</div>
                </div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">+12 Bookings</div>
                <div className="text-green-600 text-xs sm:text-sm">↑ 18% from last week</div>
              </div>
              
              <div className="absolute -top-12 sm:-top-16 right-0 bg-white rounded-lg shadow-lg p-3 sm:p-4 w-36 sm:w-48 transform sm:translate-x-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Analytics</div>
                </div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">$2,540</div>
                <div className="text-accent-600 text-xs sm:text-sm">↑ 24% from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 65C1200 70 1320 80 1380 85L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;