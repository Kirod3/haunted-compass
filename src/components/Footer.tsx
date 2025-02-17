export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.imgur.com/aEcTztn.png" 
              alt="HauntedCompass Logo" 
              className="logo-image w-6 h-6 animate-float"
            />
            <span className="font-bold text-xl text-white">HauntedCompass</span>
          </div>
          <p className="text-center text-gray-400 max-w-md">
            Navigate through America's most haunted locations with respect and caution.
            Always follow local guidelines and obtain necessary permissions.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HauntedCompass Directory
          </p>
        </div>
      </div>
    </footer>
  );
}