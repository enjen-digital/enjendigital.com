import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MarketingPage = () => {
  useEffect(() => {
    // Handle scroll animations
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
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Marketing Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your online presence and grow your business with our strategic digital marketing services.
              </p>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Social Media Marketing',
                  description: 'Build your brand presence and engage with your audience across all major social platforms.'
                },
                {
                  title: 'Search Engine Optimization',
                  description: 'Improve your search rankings and drive organic traffic to your website.'
                },
                {
                  title: 'Content Marketing',
                  description: 'Create valuable content that attracts and retains your target audience.'
                }
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarketingPage;