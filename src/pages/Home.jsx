import Hero from '../components/Hero.jsx';
import StatsStrip from '../components/StatsStrip.jsx';
import Programs from '../components/Programs.jsx';
import WhyUs from '../components/CampusLifeSection.jsx';
import Admissions from '../components/Admissions.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABanner from '../components/CTABanner.jsx';
import About from './About.jsx';
import AboutSection from '../components/AboutSection.jsx';
import CampusLifeSection from '../components/CampusLifeSection.jsx';
import News from '../components/News.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <Programs />
      <CampusLifeSection />
      <Admissions />
      <Testimonials />
      <News />
      <CTABanner />
    </main>
  );
}
