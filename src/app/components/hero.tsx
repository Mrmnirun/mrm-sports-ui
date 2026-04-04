import { BOOKING_URL } from '../../config/siteConfig';
import mrmLanesWide from '../../assets/MRM-3.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mrmLanesWide}
          alt="MRM Sports Indoor Cricket Facility"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 60%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.75) 100%)' }}></div>
      </div>

      {/* TOP — Title + subheading in the roof area */}
      <div
        className="relative z-10 w-full px-4 sm:px-8 lg:px-16 text-center flex flex-col items-center justify-center"
        style={{ minHeight: '120px', marginTop: '3.25rem' }}
      >
        <h1
          className="font-bold leading-snug w-full"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
            color: '#FFFFFF',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textShadow: '0 0 30px rgba(0,0,0,0.95), 0 3px 16px rgba(0,0,0,1), 0 1px 6px rgba(0,0,0,1)',
          }}
        >
          Welcome to MRM Sports
        </h1>
        <p
          className="mt-2"
          style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
            fontWeight: '600',
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textShadow: '0 1px 10px rgba(0,0,0,1), 0 2px 6px rgba(0,0,0,1)',
          }}
        >
          Experience world-class cricket training with state-of-the-art lanes and professional equipment
        </p>
      </div>

      {/* MIDDLE — Subtitle in the black strip below the banners */}
      <div
        className="absolute z-10 w-full text-center px-4"
        style={{ top: '57%' }}
      >
        <p
          className="text-xl md:text-2xl font-semibold text-white tracking-widest uppercase"
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1)',
            letterSpacing: '0.12em',
          }}
        >
          Canada's Premier Indoor Cricket Facility
        </p>
      </div>

      {/* BOTTOM — Book Now always visible */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
