import React from 'react';

export default function SpotifyLogo({ className = "w-8 h-8", showText = true, textSize = "text-2xl" }) {
  return (
    <div className="flex items-center group">
      {/* Custom Spotify Logo */}
      <div className={`${className} relative mr-3 cursor-pointer transform transition-all duration-300 group-hover:scale-110`}>
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954] to-[#1ed760] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Main logo container */}
        <div className="relative bg-gradient-to-br from-[#1DB954] via-[#1ed760] to-[#00d84a] rounded-full p-1.5 shadow-lg group-hover:shadow-[#1DB954]/50 transition-all duration-300">
          {/* Inner circle with sound waves */}
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Animated background pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/20 to-transparent rounded-full animate-pulse"></div>
            
            {/* Sound wave lines */}
            <div className="relative flex items-center justify-center space-x-0.5">
              <div className="w-0.5 h-2 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1.5s' }}></div>
              <div className="w-0.5 h-3 bg-[#1ed760] rounded-full animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1.5s' }}></div>
              <div className="w-0.5 h-4 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1.5s' }}></div>
              <div className="w-0.5 h-3 bg-[#1ed760] rounded-full animate-bounce" style={{ animationDelay: '600ms', animationDuration: '1.5s' }}></div>
              <div className="w-0.5 h-2 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '800ms', animationDuration: '1.5s' }}></div>
            </div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-1 bg-gradient-to-t from-[#1DB954]/10 to-transparent rounded-full"></div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute -top-1 -right-1 w-1 h-1 bg-[#1ed760] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-[#1DB954] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Enhanced Text Logo */}
      {showText && (
        <span className={`text-white ${textSize} font-black tracking-tight relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#1ed760] transition-all duration-300`}>
          <span className="relative">
            Spotify
            {/* Text glow effect */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-[#1ed760] opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm">
              Spotify
            </span>
          </span>
        </span>
      )}
    </div>
  );
}