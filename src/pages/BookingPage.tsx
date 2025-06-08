// Import all existing components from the current App.tsx
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StayConnectedSection from '../components/sections/StayConnectedSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import DemoModal from '../components/ui/DemoModal';
import SEOHead from '../components/SEO/SEOHead';
import { useState, useEffect } from 'react';

const BookingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('animate-fade-in');
        }
      });
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.openDemoModal = () => setIsDemoModalOpen(true);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EnJen Booking System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Professional booking system for salons, spas, and service-based businesses with online scheduling, staff management, and client communication.",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "RecurringPaymentFrequency",
        "frequency": "Monthly"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "EnJen Digital",
      "url": "https://enjendigital.com"
    },
    "featureList": [
      "Online Booking System",
      "Staff Management",
      "Client Communication",
      "Analytics Dashboard",
      "Mobile App",
      "Automated Reminders",
      "Payment Processing"
    ]
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <SEOHead
        title="Booking System for Salons & Spas | EnJen Digital Appointment Scheduling"
        description="Transform your salon or spa with EnJen's professional booking system. Online scheduling, staff management, client communication, and analytics. Free 30-day trial."
        keywords="booking system, salon booking software, spa appointment scheduling, online booking, appointment management, salon software, spa management system, booking app"
        canonicalUrl="https://enjendigital.com/booking"
        structuredData={structuredData}
      />
      <Navbar onDemoClick={() => setIsDemoModalOpen(true)} />
      <main>
        <HeroSection onDemoClick={() => setIsDemoModalOpen(true)} />
        <FeaturesSection />
        <TestimonialsSection />
        <StayConnectedSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};

export default BookingPage;