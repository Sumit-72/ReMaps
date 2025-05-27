import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';
import { MapPin, Clock, Info } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

const LocationsList: React.FC = () => {
  const { searchTerm } = useSearch();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = Array.from(new Set(locations.map(location => location.category)));
  
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          location.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || location.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="my-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((location) => (
          <Link
            key={location.id}
            to={`/location/${location.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${location.image})` }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg group-hover:text-blue-300 transition-colors">{location.name}</h3>
                  <p className="text-sm text-white/90">{location.category}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">{location.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{location.hours}</span>
              </div>
              <button className="mt-3 flex items-center text-blue-500 text-sm font-medium group-hover:text-blue-700 transition-colors">
                <Info className="h-4 w-4 mr-1" />
                <span>View Details</span>
              </button>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredLocations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No locations found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default LocationsList;