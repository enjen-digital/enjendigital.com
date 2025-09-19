import React from 'react';
import { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const { title, description, icon: Icon } = feature;
  
  const cardColors = [
    'from-primary-500 to-primary-600',
    'from-accent-500 to-accent-600', 
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600'
  ];
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ 
        animationDelay: `${index * 0.1}s`, 
        animationFillMode: 'both' 
      }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[index % cardColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative p-6">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cardColors[index % cardColors.length]} text-white mb-4 shadow-lg`}>
          <Icon size={24} />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
        
        {/* Hover Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${cardColors[index % cardColors.length]} flex items-center justify-center text-white shadow-lg`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Border Gradient */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardColors[index % cardColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
};

export default FeatureCard;