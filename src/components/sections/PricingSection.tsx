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
      </div>
    </section>
  );
};

export default PricingSection;