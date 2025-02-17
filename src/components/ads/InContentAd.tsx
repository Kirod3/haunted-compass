import { AdUnit } from './AdUnit';

export function InContentAd() {
  return (
    <div className="w-full max-w-[728px] h-[280px] mx-auto my-8 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden">
      <AdUnit 
        adSlot="YOUR_CONTENT_AD_SLOT"
        adFormat="rectangle"
        className="w-full h-full"
      />
    </div>
  );
}