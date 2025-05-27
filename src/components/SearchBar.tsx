import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { Location } from '../types/types';
import { locations } from '../data/locations';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Location[]>([]);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (location: Location) => {
    setSearchTerm('');
    setIsOpen(false);
    navigate(`/location/${location.id}`);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((location) => (
            <div
              key={location.id}
              onClick={() => handleSelect(location)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <div className="font-medium">{location.name}</div>
              <div className="text-xs text-gray-500">{location.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;