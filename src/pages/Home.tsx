import { TrendingLocations } from '../components/TrendingLocations';
import { HeaderAd } from '../components/ads/HeaderAd';
import { InContentAd } from '../components/ads/InContentAd';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderAd />

      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <img 
            src="https://i.imgur.com/aEcTztn.png" 
            alt="HauntedCompass Logo" 
            className="logo-image w-12 h-12 animate-float"
          />
          HauntedCompass
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Navigate through America's most spine-chilling destinations. Discover historical haunts,
          paranormal activities, and chart your course to the next supernatural adventure.
        </p>
      </section>

      <InContentAd />
      
      <TrendingLocations />
    </div>
  );
}