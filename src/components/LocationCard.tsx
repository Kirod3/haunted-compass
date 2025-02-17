import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { HauntedLocation } from '../types';

interface LocationCardProps {
  location: HauntedLocation;
}

export function LocationCard({ location }: LocationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={location.imageUrl} 
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{location.name}</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-1">Background</h4>
          <p className="text-gray-600">{location.background}</p>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Latest Lore</h4>
              <p className="text-gray-600">{location.latestLore}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Why Visit</h4>
              <p className="text-gray-600">{location.whyVisit}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-700 mb-1">Safety Reminder</h4>
              <p className="text-gray-600 text-sm">
                Please remember to respect the property and adhere to visiting rules. Visit with a group,
                carry a flashlight if visiting at night, and always check for required permissions or entry fees.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}