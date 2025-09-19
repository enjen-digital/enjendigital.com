import Button from '../ui/Button';
import { ArrowRight, BarChart3, Users, Calendar, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onDemoClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 to-transparent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="w-4 h-4 mr-2 text-primary-400" />
              Complete Business Management Platform
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center lg:text-left" aria-label="Transform Your Business Operations">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Smart Analytics</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Comprehensive booking system with powerful analytics, team management, and customer insights designed for modern salons and spas.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {[
                { icon: BarChart3, label: 'Analytics Dashboard' },
                { icon: Users, label: 'Team Management' },
                { icon: Calendar, label: 'Smart Scheduling' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <feature.icon className="w-4 h-4 mr-2 text-primary-400" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={onDemoClick}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25"
              >
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-white/30 text-white hover:bg-white hover:text-gray-900"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Features</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex -space-x-2">
                {[
                  { name: ['J.', '✧'], bg: 'bg-white', text: 'text-gray-900' },
                  { name: 'Hairapy', bg: 'bg-primary-600', text: 'text-white' },
                  { name: ['King', 'Kutz'], bg: 'bg-accent-500', text: 'text-white' },
                  { name: ['Day', 'Spa'], bg: 'bg-gray-700', text: 'text-white' }
                ].map((client, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden shadow-lg">
                    <div className={`w-full h-full flex items-center justify-center ${client.bg} ${client.text} text-xs font-bold`}>
                      {Array.isArray(client.name) ? (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-[8px]">{client.name[0]}</span>
                          <span className="text-[10px]">{client.name[1]}</span>
                        </div>
                      ) : (
                        <span className="text-[8px]">{client.name}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-gray-300 text-center sm:text-left">
                <div className="font-semibold">40+ businesses trust us</div>
                <div className="text-sm text-gray-400">Join successful salon owners</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-in-right mt-6 lg:mt-0">
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/Screenshot Analytic.png"
                    alt="Business Analytics Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 w-48 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-sm font-semibold text-gray-900">Revenue Growth</div>
                </div>
                <div className="text-gray-900 font-bold text-lg">+24%</div>
                <div className="text-green-600 text-sm">↑ This month</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 w-48 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <div className="text-sm font-semibold text-gray-900">Active Customers</div>
                </div>
                <div className="text-gray-900 font-bold text-lg">1,247</div>
                <div className="text-primary-600 text-sm">↑ 18% growth</div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-xl p-4 w-44 border border-gray-100 transform -translate-y-1/2">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                  <div className="text-sm font-semibold text-gray-900">Appointments</div>
                </div>
                <div className="text-gray-900 font-bold text-lg">156</div>
                <div className="text-accent-600 text-sm">This week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;