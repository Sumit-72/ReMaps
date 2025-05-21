import React from 'react';
import Hero from '../components/Hero';
import CampusMap from '../components/CampusMap';
import LocationsList from '../components/LocationsList';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div id="map-section" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Campus Map</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Explore our campus through this interactive map. Click on markers to see more details about each location.
            </p>
          </div>
          <CampusMap apiKey="AIzaSyBTlYqJ2iJeZyRg2Q94V_MPyrrf6OsGMDM" />
        </div>
        
        <div id="locations" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Locations</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Browse through our campus locations and find detailed information about each place.
            </p>
          </div>
          <LocationsList />
        </div>
      </div>
      
      <Features />
      <AboutUs />
    </div>
  );
};

export default HomePage;