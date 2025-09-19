import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  url: string;
}

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  const { name, price, description, features, highlighted, url } = tier;
  
  return (
    <div className={`
      rounded-xl p-8 h-full flex flex-col
      ${highlighted 
        ? 'bg-primary-50 border-2 border-primary-500 shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300 transform hover:-translate-y-2' 
        : 'bg-white border border-gray-200 shadow-sm hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300 transform hover:-translate-y-2'}
    `}>
      {highlighted && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg animate-pulse">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-3">
            <div className="text-primary-600 mr-3 mt-0.5">
              <Check size={18} />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={highlighted ? 'primary' : 'outline'} 
        size="lg" 
        fullWidth
        onClick={() => window.location.href = url}
      >
        Try it free for 30 days
      </Button>
    </div>
  );
};

export default PricingCard;