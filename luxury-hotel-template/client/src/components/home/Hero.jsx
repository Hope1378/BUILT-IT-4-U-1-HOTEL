import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import VideoHero from './VideoHero';
import BookingWidget from './BookingWidget';
import './Hero.css';

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-12 pt-10 md:pb-20">
      <VideoHero />
      <Container className="relative z-10 grid items-end gap-10 pt-16 lg:grid-cols-[1.2fr,.8fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-4xl space-y-7">
          <span className="eyebrow text-champagne/80">Mediterranean Grandeur Reimagined</span>
          <h1 className="display-heading text-6xl leading-[0.92] text-ivory sm:text-7xl lg:text-[7.5rem]">The New Standard in Ultra-Luxury Hospitality.</h1>
          <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">Aurelia Grand blends cinematic architecture, intuitive booking, bespoke wellness, and destination dining into one elevated digital experience crafted for discerning hotel brands.</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/booking">Plan Your Arrival</Button>
            <Button href="/rooms" variant="ghost">Explore Suites</Button>
          </div>
        </motion.div>
        <BookingWidget />
      </Container>
    </section>
  );
};

export default Hero;
