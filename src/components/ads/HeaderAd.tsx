import { AdUnit } from './AdUnit';

export function HeaderAd() {
  return (
    <div className="w-full max-w-[728px] h-[90px] mx-auto my-4 bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden">
      <AdUnit 
        adSlot="YOUR_HEADER_AD_SLOT" 
        adFormat="horizontal"
        className="w-full h-full"
      />
    </div>
  );
}