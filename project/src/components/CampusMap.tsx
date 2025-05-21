import React, { useState, useEffect, useRef } from 'react';
import { locations } from '../data/locations';
import { useNavigate } from 'react-router-dom';
import { MapPin, Loader } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

interface GoogleMapProps {
  apiKey: string;
}

const CampusMap: React.FC<GoogleMapProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    if (searchTerm) {
      const filtered = locations.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  }, [searchTerm]);

  useEffect(() => {
    // Simulating Google Maps API loading
    // In a real app, you would load the actual Google Maps API with your API key
    const timeout = setTimeout(() => {
      setLoading(false);
      
      // In a real implementation, this would be replaced with actual Google Maps initialization
      if (!apiKey) {
        setMapError("Google Maps API key is missing. Please provide a valid API key.");
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [apiKey]);

  const handleLocationClick = (locationId: string) => {
    navigate(`/location/${locationId}`);
  };

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-100">
        <Loader className="h-8 w-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-gray-600">Loading map...</span>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="h-96 flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-red-500 mb-4">{mapError}</p>
        <p className="text-gray-600 text-center max-w-md">
          To use Google Maps, you need to provide a valid API key. For development purposes, 
          we're displaying a mock map with campus locations.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mock map for demonstration. In a real app, this would be replaced with the actual Google Map */}
      <div 
        ref={mapRef} 
        className="h-96 bg-blue-50 relative overflow-hidden"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/5412198/pexels-photo-5412198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/20"></div>
        
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: `${location.position.y}%`, left: `${location.position.x}%` }}
            onClick={() => handleLocationClick(location.id)}
          >
            <div className="flex flex-col items-center">
              <div className="bg-white p-1.5 rounded-full shadow-lg group-hover:bg-blue-500 transition-colors">
                <MapPin className="h-5 w-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <div className="mt-1 bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <p className="text-xs font-medium">{location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Location filter buttons */}
      <div className="my-4 flex flex-wrap gap-2 justify-center">
        {Array.from(new Set(locations.map(l => l.category))).map((category) => (
          <button
            key={category}
            className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
            onClick={() => {
              setFilteredLocations(
                category === 'all' 
                  ? locations 
                  : locations.filter(l => l.category === category)
              );
            }}
          >
            {category}
          </button>
        ))}
        <button
          className="px-3 py-1.5 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={() => setFilteredLocations(locations)}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default CampusMap;