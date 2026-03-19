import Masonry from 'react-responsive-masonry';
import mrmLanesWide from '../../assets/MRM-lanes-wide.jpg';
import mrm1 from '../../assets/MRM-1.jpg';
import mrm3 from '../../assets/MRM-3.jpg';
import mrm4 from '../../assets/MRM-4.jpg';
import mrm76 from '../../assets/MRM-76.jpg';

const images = [
  // Real MRM facility photos — always first
  mrmLanesWide,
  mrm76,
  mrm4,
  mrm3,
  mrm1,
  // Kept Unsplash: genuine indoor cricket / equipment photos
  'https://images.unsplash.com/photo-1582617578126-4bdcead11e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbmV0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NTcwMTcwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NTcwMTc3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759300642158-5082997437d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NTcwMTc3MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1745180266203-5d648c4f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGl0Y2glMjBpbmRvb3J8ZW58MXx8fHwxNzY1NzAxNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  // Removed: outdoor cricket academy (photo-1585489509210) — not relevant to indoor facility
  // Removed: bowling sport machine (photo-1564936094874) — wrong sport entirely
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
            Explore our world-class facilities and training environment
          </p>
        </div>

        <Masonry columnsCount={3} gutter="1rem">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
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
