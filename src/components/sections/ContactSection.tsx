import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Phone, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onConsultationClick: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onConsultationClick }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ready to Transform Your Business?"
          subtitle="Schedule a free consultation to see how Enjen can help you grow."
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-5/12 bg-primary-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Click below to schedule your consultation and our team will get back to you within 24 hours.</p>
                
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
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Ready to transform your business? Click below to schedule your free consultation and discover how EnJen can help you grow.
                  </p>
                  <button
                    onClick={onConsultationClick}
                    className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-md font-medium transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Schedule Free Consultation
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    No commitment required • Free consultation • 24-hour response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;