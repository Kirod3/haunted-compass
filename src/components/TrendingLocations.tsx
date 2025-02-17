import { useNavigate } from 'react-router-dom';
import { Star, TrendingUp } from 'lucide-react';
import { hauntedLocations } from '../data';
import type { HauntedLocation } from '../types';

function getAllLocations() {
  return Object.entries(hauntedLocations).flatMap(([state, locations]) =>
    locations.map(location => ({ ...location, state }))
  );
}

function getTopLocations(count: number = 5) {
  return getAllLocations()
    .sort((a, b) => b.rating.overallRating - a.rating.overallRating)
    .slice(0, count);
}

export function TrendingLocations() {
  const navigate = useNavigate();
  const topLocations = getTopLocations();

  const handleLocationClick = (location: HauntedLocation & { state: string }) => {
    navigate(`/location/${location.state}/${encodeURIComponent(location.name)}`);
  };

  return (
    <section className="mt-12 mb-16">
      <div className="flex items-center justify-center gap-2 mb-8">
        <TrendingUp className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-bold text-white">Trending Haunted Locations</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {topLocations.map((location, index) => (
          <div
            key={`${location.state}-${location.name}`}
            onClick={() => handleLocationClick(location)}
            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer card-hover transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-gray-900/90 px-3 py-1 rounded-full">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold">#{index + 1}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                {location.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{location.state}</p>
              
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">
                  {location.rating.overallRating.toFixed(1)}
                </span>
                <span className="text-gray-400 text-sm">/5.0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}