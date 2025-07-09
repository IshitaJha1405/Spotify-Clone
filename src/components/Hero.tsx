import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#1DB954] to-[#1ed760] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight">
            Music for <br className="hidden sm:block" />
            everyone.
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto">
            Millions of songs. No credit card needed.
          </p>
          <button className="bg-black text-white px-12 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-200 inline-flex items-center">
            <Play className="w-5 h-5 mr-2 fill-current" />
            GET SPOTIFY FREE
          </button>
        </div>
      </div>
    </section>
  );
}