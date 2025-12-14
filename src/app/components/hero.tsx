import { BOOKING_URL } from '../../config/siteConfig';

export function Hero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center pt-20 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1641352848874-c96659e03144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBjcmlja2V0JTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY1NzAxNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indoor Cricket Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to MRM Sports
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Canada's Premier Indoor Cricket Facility
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
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
