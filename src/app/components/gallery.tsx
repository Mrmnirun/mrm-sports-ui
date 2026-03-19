import Masonry from 'react-responsive-masonry';
import mrm155 from '../../assets/MRM-155.jpg';
import mrm1 from '../../assets/MRM-1.jpg';
import mrm3 from '../../assets/MRM-3.jpg';
import mrm4 from '../../assets/MRM-4.jpg';
import mrm76 from '../../assets/MRM-76.jpg';
import mrmTrophy1 from '../../assets/MRM-trophy-1.jpg';
import mrmTrophy2 from '../../assets/MRM-trophy-2.jpg';
import mrm151 from '../../assets/MRM-151.jpg';
import mrm154 from '../../assets/MRM-154.jpg';

const images = [
  mrm155,
  mrm76,
  mrm4,
  mrm3,
  mrm1,
  mrmTrophy1,
  mrmTrophy2,
  mrm151,
  mrm154,
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Opening Ceremony of MRM Sports — A night to remember with our incredible community
          </p>
        </div>

        <Masonry columnsCount={3} gutter="1rem">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">View Image</span>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
