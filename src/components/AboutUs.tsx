import React from 'react';
import { Users, Map, Search, Compass } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About ReMaps</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            ReMaps is the best way to explore your campus—helping students, staff, and visitors navigate easily and discover everything it has to offer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/hero2.jpg" 
              alt="Students on campus" 
              className="rounded-lg shadow-lg object-cover h-80 w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Welcome to the ReMaps – your personalized guide to exploring the vibrant and sprawling campus of BIT Mesra. Designed especially for first-year students, our platform helps you find your way around with ease, whether you're heading to classes, hostels, canteens, or lesser-known campus spots.
            
            </p>
            <p className="text-gray-600 dark:text-gray-300">
            With integrated maps and detailed insights, ReMaps is built to assist students, staff, and visitors in discovering key locations, understanding campus facilities, and making the most of their time at BIT. No more getting lost – just simple, smart navigation to help you feel at home from day one.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 mb-4">
              <Map className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interactive Map</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the campus through our detailed interactive map with custom markers and information.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Search</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quickly find exactly what you're looking for with our intelligent search functionality.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 mb-4">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Guides</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access comprehensive information about each location, including hours, amenities, and photos.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with input from students and staff to ensure it meets real navigation needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;