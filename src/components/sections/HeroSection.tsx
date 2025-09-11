import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onDemoClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-white to-primary-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-200 to-transparent opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight text-center lg:text-left" aria-label="Transform Your Business with Smart Booking">
              Transform Your Salon with Smart Booking
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              All-in-one booking system with integrated website designed specifically for salons and spas to streamline operations and boost revenue.
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
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              <div className="text-gray-700 text-center sm:text-left whitespace-nowrap mb-3 sm:hidden text-sm">
                <span className="font-bold">40+</span> salons & spas trust us
              </div>
              <div className="flex -space-x-1 sm:-space-x-2 mr-0 sm:mr-4">
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
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <div className={`w-full h-full flex items-center justify-center ${image.bg} ${image.text} text-[8px] font-bold ${image.extraClasses || ''}`}>
                      {Array.isArray(image.name) ? (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-[6px] sm:text-[8px]">{image.name[0]}</span>
                          <span className="text-[8px] sm:text-[10px]">{image.name[1]}</span>
                        </div>
                      ) : (
                        <span className="text-[6px] sm:text-[8px]">{image.name}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-gray-700 text-center sm:text-left whitespace-nowrap hidden sm:block text-sm">
                <span className="font-bold">40+</span> salons & spas trust us
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-in-right px-2 sm:px-0 mt-6 lg:mt-0">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden group">
                <img
                  src="/booking slide.png"
                  alt="Booking System Interface"
                  className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-105 lg:group-hover:scale-110 lg:group-hover:translate-y-[-25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">Smart Booking System</h3>
                    <p className="text-xs sm:text-sm opacity-90">Streamline your appointments with our intuitive booking interface</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 sm:-bottom-16 left-0 bg-white rounded-lg shadow-lg p-2 sm:p-4 w-28 sm:w-48 transform sm:-translate-x-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-[10px] sm:text-sm font-semibold text-gray-900">Today</div>
                </div>
                <div className="text-gray-700 font-medium text-xs sm:text-base">+12 Bookings</div>
                <div className="text-green-600 text-[10px] sm:text-sm">↑ 18% from last week</div>
              </div>
              
              <div className="absolute -top-8 sm:-top-16 right-0 bg-white rounded-lg shadow-lg p-2 sm:p-4 w-28 sm:w-48 transform sm:translate-x-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <div className="text-[10px] sm:text-sm font-semibold text-gray-900">Analytics</div>
                </div>
                <div className="text-gray-700 font-medium text-xs sm:text-base">$2,540</div>
                <div className="text-accent-600 text-[10px] sm:text-sm">↑ 24% from last month</div>
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