import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Ghost, MapPin, Book, Sparkles, Compass, Star } from 'lucide-react';
import { hauntedLocations } from '../data';
import { RatingBreakdown } from '../components/RatingBreakdown';
import { HeaderAd } from '../components/ads/HeaderAd';
import { InContentAd } from '../components/ads/InContentAd';

export function LocationDetails() {
  const { state, name } = useParams();
  const navigate = useNavigate();
  
  const location = state && name
    ? hauntedLocations[state]?.find(loc => loc.name === decodeURIComponent(name))
    : null;

  if (!location) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Location not found</h1>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-white hover:text-gray-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-white hover:text-gray-300 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </button>

      <HeaderAd />

      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden card-hover">
        <div className="relative h-96">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-white">{location.name}</h1>
              <div className="flex items-center gap-1 bg-gray-900/80 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold">{location.rating.overallRating.toFixed(1)}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{state}</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="flex items-center text-2xl font-bold text-white mb-4">
              <Star className="h-6 w-6 mr-2 text-white" />
              Ratings & Reviews
            </h2>
            <RatingBreakdown rating={location.rating} />
          </section>

          <InContentAd />

          <section>
            <h2 className="flex items-center text-2xl font-bold text-white mb-4">
              <Book className="h-6 w-6 mr-2 text-white" />
              Background
            </h2>
            <p className="text-gray-300 leading-relaxed">{location.background}</p>
          </section>

          <section>
            <h2 className="flex items-center text-2xl font-bold text-white mb-4">
              <Ghost className="h-6 w-6 mr-2 text-white animate-float" />
              Latest Lore
            </h2>
            <p className="text-gray-300 leading-relaxed">{location.latestLore}</p>
          </section>

          <InContentAd />

          <section>
            <h2 className="flex items-center text-2xl font-bold text-white mb-4">
              <Compass className="h-6 w-6 mr-2 text-white" />
              Why Visit
            </h2>
            <p className="text-gray-300 leading-relaxed">{location.whyVisit}</p>
          </section>

          <div className="bg-gray-900/50 p-6 rounded-lg mt-8 border border-gray-800">
            <h3 className="flex items-center text-xl font-semibold text-white mb-3">
              <Sparkles className="h-5 w-5 mr-2 text-white" />
              Safety Reminder
            </h3>
            <p className="text-gray-400">
              Please remember to respect the property and follow all safety guidelines.
              Some locations may require advance reservations or have specific visiting hours.
              Always visit with a group and carry appropriate safety equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}