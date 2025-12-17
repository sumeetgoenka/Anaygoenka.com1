import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import WhoFor from '@/components/sections/WhoFor';
import WhyChoose from '@/components/sections/WhyChoose';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Guarantee from '@/components/sections/Guarantee';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhoFor />
        <WhyChoose />
        <Process />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
