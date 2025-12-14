import { Navigation } from './components/navigation';
import { TopHero } from './components/top-hero';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Facilities } from './components/facilities';
import { Gallery } from './components/gallery';
import { ComingSoon } from './components/coming-soon';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TopHero />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}
