import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Discover the best products at unbeatable prices</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
