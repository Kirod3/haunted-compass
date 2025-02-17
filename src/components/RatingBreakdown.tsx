import { Ghost, Book, MapPin, Users } from 'lucide-react';
import type { HauntedLocation } from '../types';

interface RatingBreakdownProps {
  rating: HauntedLocation['rating'];
}

function RatingBar({ value, label, icon: Icon }: { value: number; label: string; icon: any }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8">
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-400">{label}</span>
          <span className="text-sm font-medium text-white">{value.toFixed(1)}/5.0</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{ width: `${(value / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function RatingBreakdown({ rating }: RatingBreakdownProps) {
  return (
    <div className="space-y-4">
      <RatingBar 
        value={rating.paranormalActivity} 
        label="Paranormal Activity" 
        icon={Ghost} 
      />
      <RatingBar 
        value={rating.historicalSignificance} 
        label="Historical Significance" 
        icon={Book} 
      />
      <RatingBar 
        value={rating.accessibility} 
        label="Accessibility" 
        icon={MapPin} 
      />
      <RatingBar 
        value={rating.visitorExperience} 
        label="Visitor Experience" 
        icon={Users} 
      />
    </div>
  );
}