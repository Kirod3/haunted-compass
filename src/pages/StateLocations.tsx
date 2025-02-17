import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Ghost } from 'lucide-react';
import { hauntedLocations } from '../data';
import type { HauntedLocation } from '../types';
import { HeaderAd } from '../components/ads/HeaderAd';
import { InContentAd } from '../components/ads/InContentAd';

export function StateLocations() {
  const { state } = useParams();
  const navigate = useNavigate();

  const handleLocationClick = (location: HauntedLocation) => {
    navigate(`/location/${state}/${encodeURIComponent(location.name)}`);
  };

  if (!state || !hauntedLocations[state]) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">State not found</h1>
        <p className="text-gray-400 mb-4">The requested state could not be found or has no haunted locations yet.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
        >
          Return Home
        </button>
      </div>
    );
  }

  const locations = hauntedLocations[state];

  if (locations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <Ghost className="w-16 h-16 text-gray-500 animate-float" />
          <h1 className="text-2xl font-bold text-white">No Locations Found</h1>
          <p className="text-gray-400 max-w-md">
            We haven't discovered any haunted locations in {state} yet. 
            Check back later as we continue to explore and document supernatural sites.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Create array of items including both locations and ads
  const itemsWithAds = locations.reduce<React.ReactNode[]>((acc, location, index) => {
    // Add location card
    acc.push(
      <div
        key={`location-${location.name}`}
        onClick={() => handleLocationClick(location)}
        className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer card-hover"
      >
        <div className="relative h-48">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">View Details</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
          <div className="flex items-center text-gray-400 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{state}</span>
          </div>
          <p className="text-gray-400 line-clamp-3">{location.background}</p>
        </div>
      </div>
    );

    // Add ad after every 6 locations (except after the last location)
    if ((index + 1) % 6 === 0 && index !== locations.length - 1) {
      acc.push(
        <div key={`ad-${index}`} className="col-span-full">
          <InContentAd />
        </div>
      );
    }

    return acc;
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderAd />

      <h1 className="text-4xl font-bold text-white mb-8">Haunted Locations in {state}</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {itemsWithAds}
      </div>
    </div>
  );
}