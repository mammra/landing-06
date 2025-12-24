import React, { FC } from "react";
interface HeroSectionProps {
  headline: string;
  sub?: string;
  cta_text?: string;
  image_url?: string | null;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  sub,
  cta_text,
  image_url,
}) => {
  const imageUrl = image_url || "https://images.unsplash.com/photo-1614741369528-ec6e09b1f0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white min-h-[500px] flex items-center justify-center py-16 md:py-24 lg:py-32">
      {image_url && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt="Background image for hero section"
            className="w-full h-full object-cover opacity-30"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      )}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {headline}
        </h1>
        {sub && (
          <p className="text-xl sm:text-2xl opacity-90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            {sub}
          </p>
        )}
        {cta_text && (
          <button className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-gray-100 dark:text-blue-800 dark:hover:bg-gray-200 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            {cta_text}
          </button>
        )}
      </div>
    </section>
  );
};
export default HeroSection;
