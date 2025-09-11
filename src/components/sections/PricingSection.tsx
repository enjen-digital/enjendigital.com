import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import PricingCard from '../ui/PricingCard';
import { pricingTiers } from '../../data/pricingData';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business needs. No hidden fees, no long-term contracts."
          centered
        />
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className="flex-1 relative">
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              All Plans Include
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Free Setup & Onboarding',
                'Unlimited Bookings',
                'Unlimited Clients',
                'SSL Security',
                'Mobile App',
                'Email Reminders',
                'Custom Domain',
                'Site Customization',
                'Front Desk Tablet',
                '24/7 Self-Service Booking',
                'Automated Scheduling',
                'Regular Updates'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-primary-600 mr-2">
                    <Check size={18} />
                  </div>
                  <span className={`text-gray-700 ${feature === 'Front Desk Tablet' ? 'feature-highlight' : ''}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;