import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../../config/siteConfig';
import logoUrl from '../../assets/logo.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
              <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                <img src={logoUrl} alt="MRM Sports logo" className="w-20 h-20 object-contain" />
              </div>
                <span style={{ color: 'var(--brand)' }} className="text-[1.8rem] font-bold">MRM Sports</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('facilities')} className="text-gray-700 hover:text-primary transition-colors">
              Facilities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
            <a 
              href={BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('facilities')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Facilities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Contact
              </button>
              <a 
                href={BOOKING_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
