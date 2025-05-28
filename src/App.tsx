// Core imports
import { useEffect, useState } from 'react';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import StayConnectedSection from './components/sections/StayConnectedSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

// UI components
import DemoModal from './components/ui/DemoModal';

/**
 * Main App component that handles the overall layout and structure
 * Manages demo modal state and scroll animations
 */
function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Handle scroll animations for sections
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
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Expose demo modal function globally for external triggers
  useEffect(() => {
    window.openDemoModal = () => setIsDemoModalOpen(true);
  }, []);
  
  return (
    <div className="font-sans">
        <Navbar onDemoClick={() => setIsDemoModalOpen(true)} />
        {/* Main content sections */}
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
        {/* Demo modal */}
        <DemoModal 
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      </div>
  );
}

export default App;