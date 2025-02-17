import { AdUnit } from './AdUnit';

export function SidebarAd() {
  return (
    <div className="w-[300px] h-[600px] bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden">
      <AdUnit 
        adSlot="YOUR_SIDEBAR_AD_SLOT"
        adFormat="vertical"
        className="w-full h-full"
      />
    </div>
  );
}