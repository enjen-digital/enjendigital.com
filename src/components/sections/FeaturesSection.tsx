import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { features } from '../../data/featureData';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything You Need to Succeed"
          subtitle="Our booking system is packed with features designed specifically for salon, spa, and barber shop owners."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="mt-12 sm:mt-20">
          <div className="bg-primary-50 rounded-2xl p-4 sm:p-8 md:p-12 overflow-hidden relative isolate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative">
              <div className="relative z-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center md:text-left">
                  Powerful Analytics
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 text-center md:text-left">
                  Make data-driven decisions with our comprehensive analytics suite. Track key metrics, identify trends, and grow your business with actionable insights.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  'Customer Growth Dashboard: Track total customers with month-over-month trends',
                  'Appointment Analytics: Monitor booking volume and growth patterns',
                  'Service Insights: Analyze popular services and booking patterns',
                  'Revenue Dashboard: Real-time financial overview with forecasting',
                  'Staff Performance: Track productivity and service efficiency'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
                </ul>
              </div>
            
              <div className="relative mt-6 md:mt-0 group order-first md:order-last">
                <img 
                  src="/Screenshot Analytic.png" 
                  alt="Analytics Dashboard"
                  className="w-full md:w-[120%] rounded-xl shadow-2xl transform md:translate-x-4 transition-all duration-500 hidden md:block hover:scale-125 lg:hover:scale-150 hover:translate-x-[-25%] hover:z-20"
                />
                <img 
                  src="/Screenshot Analytic.png" 
                  alt="Analytics Dashboard"
                  className="w-full rounded-xl shadow-2xl md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <div className="bg-primary-50 rounded-2xl p-4 sm:p-8 md:p-12 overflow-hidden relative isolate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative">
              <div className="relative mt-6 md:mt-0 group">
                <img 
                  src="/team members.png" 
                  alt="Team Management Dashboard"
                  className="w-full md:w-[120%] rounded-xl shadow-2xl transform md:-translate-x-8 transition-all duration-500 hidden md:block hover:scale-125 lg:hover:scale-150 hover:translate-x-[25%] hover:z-20 relative"
                />
                <img 
                  src="/team members.png" 
                  alt="Team Management Dashboard"
                  className="w-full rounded-xl shadow-2xl md:hidden"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center md:text-left">
                  Team Management
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 text-center md:text-left">
                  Showcase your talented team and let clients choose their preferred stylist. Make scheduling efficient with our comprehensive staff management tools.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    'Beautiful staff profiles with photos and specialties',
                    'Real-time availability management',
                    'Individual service menus per stylist',
                    'Client preferred stylist selection',
                    'Staff mobile app for schedule management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;