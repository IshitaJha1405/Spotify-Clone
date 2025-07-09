import React from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  darkBg?: boolean;
}

export default function FeatureSection({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  darkBg = false 
}: FeatureSectionProps) {
  return (
    <section className={`py-20 ${darkBg ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : ''}`}>
            <h2 className={`text-sm font-black tracking-widest mb-4 ${darkBg ? 'text-[#1DB954]' : 'text-[#1DB954]'}`}>
              {subtitle}
            </h2>
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight ${darkBg ? 'text-white' : 'text-black'}`}>
              {title}
            </h3>
            <p className={`text-lg md:text-xl leading-relaxed ${darkBg ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
          <div className={`${reverse ? 'lg:order-1' : ''}`}>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}