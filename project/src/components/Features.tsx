import React from 'react';
import { MapPin, Search, Clock, Info, Shield, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Campus Navigator?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our platform offers several key features designed to make campus navigation simple and efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Campus Map</h3>
            <p className="text-gray-600">
              Visualize the entire campus with an interactive map that highlights key locations, buildings, and facilities.
              Click on any marker to get detailed information and directions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search Functionality</h3>
            <p className="text-gray-600">
              Quickly find what you're looking for with our powerful search function that provides instant results as you type,
              whether it's a building, department, facility, or service.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <Info className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Location Information</h3>
            <p className="text-gray-600">
              Access comprehensive details about each location, including descriptions, photos, contact information,
              available services, and special features to help you plan your visit.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Operating Hours</h3>
            <p className="text-gray-600">
              Stay informed about the operating hours of various campus facilities, including libraries, dining options,
              recreation centers, and administrative offices, to plan your visit accordingly.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Responsive Design</h3>
            <p className="text-gray-600">
              Access the campus navigator on any device with our fully responsive design that works seamlessly
              on desktops, tablets, and mobile phones, ensuring you can find your way wherever you are.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Up-to-Date</h3>
            <p className="text-gray-600">
              Our team regularly updates the information to reflect any changes on campus, ensuring you always
              have access to the most current and accurate details about campus locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;