import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { states } from '../data';
import { ArrowRight } from 'lucide-react';

export function StateSelector() {
  const [selectedState, setSelectedState] = useState<string>('California');
  const navigate = useNavigate();

  const handleGoClick = () => {
    navigate(`/state/${selectedState}`);
  };

  return (
    <div className="flex gap-3 max-w-xs w-full">
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="flex-1 rounded-lg border-gray-800 bg-gray-900/90 text-gray-300 shadow-sm focus:border-white focus:ring-white py-2 px-3"
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <button
        onClick={handleGoClick}
        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
      >
        Go
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}