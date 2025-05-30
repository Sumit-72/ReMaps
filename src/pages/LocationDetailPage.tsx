import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { locations } from '../data/locations';
import { ArrowLeft, MapPin, Clock, Phone, Globe, Calendar, ChevronRight } from 'lucide-react';

const LocationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState(locations.find(loc => loc.id === id));
  const [relatedLocations, setRelatedLocations] = useState(locations.filter(loc => 
    loc.id !== id && loc.category === location?.category
  ).slice(0, 3));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update location when id changes
    setLocation(locations.find(loc => loc.id === id));
  }, [id]);

  useEffect(() => {
    if (location) {
      setRelatedLocations(locations.filter(loc => 
        loc.id !== id && loc.category === location.category
      ).slice(0, 3));
    }
  }, [location, id]);

  if (!location) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the location you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 dark:bg-black">
      {/* Hero Image */}
      <div 
        className="h-64 md:h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${location.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/#locations" className="hover:text-blue-300 transition-colors">Locations</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{location.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{location.name}</h1>
            <p className="text-lg text-white/90 mt-2">{location.category}</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Campus Map
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Location</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{location.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {location.highlights && location.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {location.sections && location.sections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{section.content}</p>
                
                {section.image && (
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-64 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Location Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Maps</h4>
                  <a
                    href={location.url2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-sm underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{location.hours}</p>
                  </div>
                </div>
                
                {location.phone && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{location.phone}</p>
                    </div>
                  </div>
                )}
                
                {location.website && (
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Website</h4>
                      <a 
                        href={location.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                      >
                        Visit website
                      </a>
                    </div>
                  </div>
                )}
                
                {location.events && (
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Upcoming Events</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm mt-1 space-y-2">
                        {location.events.map((event, index) => (
                          <li key={index}>
                            <p className="font-medium">{event.title}</p>
                            <p>{event.date} at {event.time}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Similar Locations</h3>
                {relatedLocations.length > 0 ? (
                  <div className="space-y-4">
                    {relatedLocations.map(relatedLoc => (
                      <Link 
                        key={relatedLoc.id} 
                        to={`/location/${relatedLoc.id}`}
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div 
                          className="h-12 w-12 bg-cover bg-center rounded-md mr-3 flex-shrink-0"
                          style={{ backgroundImage: `url(${relatedLoc.image})` }}
                        ></div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm">{relatedLoc.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">{relatedLoc.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">No similar locations found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;