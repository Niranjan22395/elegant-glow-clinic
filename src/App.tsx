import { Layout } from './components/layout';
import { PromoBanner } from './components/features/PromoBanner';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { WhatsAppFAB } from './components/features/WhatsAppFAB';

function App() {
  return (
    <Layout>
      <Hero />
      <PromoBanner />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <WhatsAppFAB />
    </Layout>
  );
}

export default App;

// Made with Bob
