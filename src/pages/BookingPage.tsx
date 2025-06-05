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
import { useState, useEffect } from 'react';

const BookingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
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

  return (
    <div className="font-sans">
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