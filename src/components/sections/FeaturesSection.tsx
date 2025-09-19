import React from 'react';
import { BarChart3, Users, UserCheck, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { features } from '../../data/featureData';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Complete Business Management Platform"
          subtitle="Everything you need to run your salon or spa efficiently, from analytics to appointment scheduling."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
        
        {/* Dashboard Feature Highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics Dashboard
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Data-Driven Business Insights
                </h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Make informed decisions with comprehensive analytics that track every aspect of your business performance.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Total Revenue', value: 'Real-time tracking' },
                    { label: 'Customer Growth', value: 'Month-over-month trends' },
                    { label: 'Appointment Volume', value: 'Booking analytics' },
                    { label: 'Service Distribution', value: 'Performance insights' }
                  ].map((metric, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
                      <div className="text-white font-semibold text-sm">{metric.label}</div>
                      <div className="text-primary-200 text-xs mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <img 
                    src="/Screenshot Analytic.png" 
                    alt="Analytics Dashboard Interface"
                    className="w-full rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Management Feature */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                    <Users className="w-4 h-4 mr-2" />
                    Team Management
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Streamlined Staff Operations
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Effortlessly manage your team with comprehensive staff profiles, scheduling, and availability management.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Add, edit, or remove team member profiles',
                      'Set individual schedules and availability',
                      'Track staff performance and productivity',
                      'Manage service assignments per team member'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 flex items-center">
                <div className="w-full">
                  <img 
                    src="/team members.png" 
                    alt="Team Management Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Management Feature */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex items-center order-2 lg:order-1">
                <div className="w-full">
                  <img 
                    src="/customers.png" 
                    alt="Customer Management Dashboard"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex items-center order-1 lg:order-2">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-accent-200 text-accent-800 rounded-full text-sm font-medium mb-6">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Customer Management
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Complete Customer Control
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Keep all customer information organized with powerful tools for communication and data management.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Data Management</h4>
                      <p className="text-gray-600 text-sm">Import from previous platforms, export when needed, and maintain full control over customer profiles.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Communication Tools</h4>
                      <p className="text-gray-600 text-sm">Send targeted messages to individual customers or bulk promotional campaigns to your entire base.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Scheduling Feature */}
        <div>
          <div className="bg-gray-900 rounded-3xl overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    Appointment Scheduling
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Master Your Schedule
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Stay organized with comprehensive scheduling tools that give you complete visibility and control.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center mr-4 mt-1">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Clear Overview</h4>
                        <p className="text-gray-400 text-sm">Get a comprehensive view of all upcoming appointments at a glance.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center mr-4 mt-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Flexible Views</h4>
                        <p className="text-gray-400 text-sm">View schedules by individual team members or see your entire staff's availability.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center mr-4 mt-1">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Manual Booking</h4>
                        <p className="text-gray-400 text-sm">Easily add bookings for walk-ins or phone calls directly to the system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 md:p-12 flex items-center">
                <div className="w-full">
                  <img 
                    src="/booking slide.png" 
                    alt="Appointment Scheduling Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;