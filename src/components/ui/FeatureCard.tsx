import React from 'react';
import { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const { title, description, icon: Icon } = feature;
  
  return (
    <div 
      className="flex flex-col p-4 sm:p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.1}s`, 
        animationFillMode: 'both' 
      }}
    >
      <div className="mb-3 sm:mb-4 text-primary-600">
        <Icon size={20} className="sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;