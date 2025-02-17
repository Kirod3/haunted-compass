export interface HauntedLocation {
  name: string;
  background: string;
  latestLore: string;
  whyVisit: string;
  imageUrl: string;
  rating: {
    paranormalActivity: number;  // 1-5 scale
    historicalSignificance: number;  // 1-5 scale
    accessibility: number;  // 1-5 scale
    visitorExperience: number;  // 1-5 scale
    overallRating: number;  // Average of all ratings
  };
}

export interface StateLocations {
  [state: string]: HauntedLocation[];
}

export const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];