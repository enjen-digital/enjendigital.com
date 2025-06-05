import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-600">Description of service 1</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-600">Description of service 2</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-600">Description of service 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;