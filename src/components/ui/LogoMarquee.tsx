import React from 'react';

const LogoMarquee: React.FC = () => {
  const logos = [
    { src: '/enjen-logo-black.png', alt: 'Enjen' },
    { src: '/jlash logo no background.png', alt: 'JLash' },
    { src: '/HH.svg', alt: 'HH' },
    { src: '/oib.png', alt: 'OIB' },
  ];

  return (
    <div className="relative w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.alt === 'Enjen' ? 'h-12' : 'h-10'} w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;