export function TopHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/PHOTO-2025-11-10-09-14-10.jpg"
          alt="Indoor Cricket Facility"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>

      {/* Optional content over the image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Indoor Cricket — Experience Excellence
        </h2>
      </div>
    </section>
  );
}
