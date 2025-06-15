import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Optimized Images */}
      <img
        src="/hero2.jpg"
        alt="Campus background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 hidden md:block"
        loading="eager"
        fetchPriority="high"
      />
      <img
        src="/hero3.jpg"
        alt="Campus mobile background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 md:hidden"
        loading="eager"
        fetchPriority="high"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Navigate Your Campus
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl mb-8">
          Find your way around campus easily with our interactive map and detailed location guides.
        </p>
        <div className="mt-8">
          <button
            onClick={scrollToContent}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
          >
            Explore Campus
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToContent}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
