import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ready to Transform Your Business?"
          subtitle="Schedule a free demo to see how Enjen can help you grow."
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-5/12 bg-primary-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Phone size={20} />
                    </div>
                    <span>(833) 575-8448</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Mail size={20} />
                    </div>
                    <span>support@enjendigital.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <MessageSquare size={20} />
                    </div>
                    <span>Chat Support</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0">
                  <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-64 140.5C-64 62.904 -1.096 0 76.5 0C154.096 0 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.096 281 -64 218.096 -64 140.5Z" fill="#0054a3" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>
              
              <div className="md:w-7/12 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                    >
                      <option value="">Select your business type</option>
                      <option value="salon">Hair Salon</option>
                      <option value="spa">Day Spa</option>
                      <option value="barber">Barber Shop</option>
                      <option value="nails">Nail Salon</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-purple-300 transition-colors"
                      placeholder="Tell us about your business and what you're looking for..."
                    ></textarea>
                  </div>
                  
                  <Button size="lg" fullWidth>
                    Request a Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;