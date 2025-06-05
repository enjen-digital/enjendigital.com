import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/marketing/Hero';
import Services from '../components/marketing/Services';
import Portfolio from '../components/marketing/Portfolio';
import Process from '../components/marketing/Process';
import Contact from '../components/marketing/Contact';
import Footer from '../components/marketing/Footer';

const MarketingPage = () => {
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

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingPage;