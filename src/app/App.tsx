import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { SummerCamp } from './components/summer-camp';
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
      <Hero />
      <SummerCamp />
      <About />
      <Facilities />
      <Gallery />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}
