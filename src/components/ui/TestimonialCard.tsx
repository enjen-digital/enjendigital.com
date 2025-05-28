import React from 'react';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, company, content, image } = testimonial;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-purple-200 h-full flex flex-col transition-all duration-300">
      <div className="mb-4 text-accent-500">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;