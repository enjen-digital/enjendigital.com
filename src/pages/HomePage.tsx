import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <img 
            src="/enjen-logo-black.png" 
            alt="EnJen Digital Logo" 
            className="h-16 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to EnJen Digital
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming businesses through innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/booking" 
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking System
            </h2>
            <p className="text-gray-600 mb-4">
              Our premium booking system for salons & spas. Streamline appointments and grow your beauty business.
            </p>
            <span className="text-primary-600 font-medium group-hover:underline">
              Learn more →
            </span>
          </Link>

          <Link 
            to="/marketing" 
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Digital Marketing
            </h2>
            <p className="text-gray-600 mb-4">
              Strategic digital marketing solutions to help your business reach new heights.
            </p>
            <span className="text-primary-600 font-medium group-hover:underline">
              Learn more →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;