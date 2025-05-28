import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { MessageSquare, Bell, Mail, Star } from 'lucide-react';

const StayConnectedSection: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'SMS Messaging',
      description: 'Direct text communication with your customers for quick updates and confirmations'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders and updates keep clients informed and reduce no-shows'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted campaigns and newsletters to keep your customers coming back'
    },
    {
      icon: Star,
      title: 'Booking History',
      description: 'Track and manage customer appointments and service history'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <SectionHeading
              title="Stay Connected with Your Customers"
              subtitle="Build lasting relationships and keep your clients engaged with our suite of communication tools."
              centered={false}
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-xl">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-start p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mb-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="/customers.png"
                alt="Customer engagement dashboard"
                className="w-full md:w-[120%] rounded-xl shadow-2xl transform md:translate-x-4 transition-all duration-500 hidden md:block hover:scale-150 hover:translate-x-[-25%] hover:z-20"
              />
              <img
                src="/customers.png"
                alt="Customer engagement dashboard"
                className="w-full rounded-xl shadow-2xl md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;