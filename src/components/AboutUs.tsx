import React from 'react';
import { Users, Map, Search, Compass } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Campus Navigator</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Campus Navigator is the best way to explore your campus—helping students, staff, and visitors navigate easily and discover everything it has to offer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Students on campus" 
              className="rounded-lg shadow-lg object-cover h-80 w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Campus Navigator was created to solve the common problem of getting lost on campus. 
              Whether you're a new student trying to find your classroom, a visitor attending an event, 
              or simply looking to discover new campus amenities, our platform provides you with 
              detailed information and directions.
            </p>
            <p className="text-gray-600">
              We collaborate with campus administration to ensure our information is accurate and up-to-date, 
              making your navigation experience seamless and stress-free.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-500 mb-4">
              <Map className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h3>
            <p className="text-gray-600">
              Explore the campus through our detailed interactive map with custom markers and information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-500 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Quickly find exactly what you're looking for with our intelligent search functionality.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-500 mb-4">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Guides</h3>
            <p className="text-gray-600">
              Access comprehensive information about each location, including hours, amenities, and photos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-500 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Built with input from students and staff to ensure it meets real navigation needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;