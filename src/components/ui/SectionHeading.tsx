import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ''
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;