import React, { useState, useEffect, useCallback } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import { locations } from '../data/locations';

interface GoogleMapProps {
  apiKey: string;
}

const mapContainerStyle = {
  width: '100%',
  height: '24rem',
};

const defaultCenter = { lat: 23.41373562278569, lng: 85.44291736527427};

const CampusMap: React.FC<GoogleMapProps> = ({ apiKey }) => {

  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const mapCenter = defaultCenter;

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (loadError) {
      setMapError('Error loading Google Maps. Please try again later.');
      setLoading(false);
    }
  }, [loadError]);

  const handleLocationClick = (locationId: string) => {
    setSelectedLocationId(locationId);
  };

  const handleNavigate = useCallback((url: string) => {
    if (url.startsWith('#')) {
      const el = document.getElementById(url.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank');
    }
  }, []);

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-100">
        <span className="text-gray-600 animate-pulse">Loading map...</span>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="h-96 flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-red-500 mb-2">{mapError}</p>
        <p className="text-gray-600 text-center max-w-md">
          Please check your API key and internet connection.
        </p>
      </div>
    );
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={16.44}
      >
        {locations.map((loc) => (
          <Marker
            key={loc.map_id}
            position={{ lat: loc.lat, lng: loc.lng }}
            onClick={() => handleLocationClick(loc.id)}
            title={loc.name}
          />
        ))}

        {selectedLocationId && (
          <InfoWindow
            position={{
              lat: locations.find((l) => l.id === selectedLocationId)?.lat || 23.4194176,
              lng: locations.find((l) => l.id === selectedLocationId)?.lng || 85.4409754,
            }}
            onCloseClick={() => setSelectedLocationId(null)}
          >
            <div className="max-w-xs p-3 bg-white rounded-lg shadow-md">
              {(() => {
                const loc = locations.find((l) => l.id === selectedLocationId);
                return loc ? (
                  <>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{loc.name}</h3>
                    <p className="text-sm text-gray-700 mb-2">{loc.detail}</p>
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="w-full h-24 object-cover rounded mb-3"
                    />
                    <div className="flex flex-wrap gap-2">
                      {loc.url1 && (
                        <button
                          onClick={() => handleNavigate(loc.url1)}
                          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition"
                        >
                          View Details
                        </button>
                      )}
                      {loc.url2 && (
                        <button
                          onClick={() => handleNavigate(loc.url2)}
                          className="bg-gray-500 text-white text-sm px-3 py-1 rounded hover:bg-gray-700 transition"
                        >
                          View Maps
                        </button>
                      )}
                    </div>
                  </>
                ) : null;
              })()}
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default CampusMap;
