import { BOOKING_URL } from '../../config/siteConfig';
import mrmLanesWide from '../../assets/MRM-3.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center pt-20 pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mrmLanesWide}
          alt="MRM Sports Indoor Cricket Facility"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 60%' }}
        />
        {/* Strong centre-focused overlay so text always pops */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.75) 100%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)' }}
        >
          Welcome to MRM Sports
        </h1>
        <p
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
        >
          Canada's Premier Indoor Cricket Facility
        </p>
        <p
          className="text-lg text-white/90 mb-12 max-w-2xl mx-auto"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.75)' }}
        >
          Experience world-class cricket training with state-of-the-art lanes and professional equipment
        </p>
        <a 
          href={BOOKING_URL}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-10 py-4 rounded-lg text-xl hover:bg-primary/90 transition-all transform hover:scale-105"
        >
          Book Now
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
