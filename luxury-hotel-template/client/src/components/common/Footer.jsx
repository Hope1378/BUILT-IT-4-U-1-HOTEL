import { Link } from 'react-router-dom';
import Container from './Container';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07090e] py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr,.8fr,.8fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <img alt="Aurelia Grand" className="h-10 w-auto" src="/images/brand/logo-white.svg" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">A benchmark-ready ultra-luxury hospitality template with cinematic storytelling, elevated conversion paths, and premium service positioning.</p>
          <div className="mt-5 space-y-2 text-sm leading-7 text-white/58">
            <p>Private marina and chauffeur arrivals</p>
            <p>Suite-first digital merchandising</p>
            <p>Editorial conversion paths for premium stays</p>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-sm uppercase tracking-[0.28em] text-champagne">Plan Your Stay</h4>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="space-y-3 text-white/70">
              <Link className="block transition hover:text-champagne" to="/rooms">Suites & Residences</Link>
              <Link className="block transition hover:text-champagne" to="/dining">Dining Venues</Link>
              <Link className="block transition hover:text-champagne" to="/spa">Wellness & Spa</Link>
              <Link className="block transition hover:text-champagne" to="/events">Events & Celebrations</Link>
            </div>
            <div className="space-y-3 text-sm leading-7 text-white/58">
              <p>Private arrival planning</p>
              <p>Flexible booking support</p>
              <p>Concierge-led itinerary design</p>
              <Link className="inline-flex pt-2 text-xs uppercase tracking-[0.22em] text-champagne transition hover:text-ivory" to="/booking">Begin Reservation</Link>
            </div>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-sm uppercase tracking-[0.28em] text-champagne">Contact</h4>
          <div className="mt-5 space-y-3 text-white/70">
            <p>reservations@aureliagrand.com</p>
            <p>+1 800 555 0199</p>
            <p>Monaco Riviera Waterfront</p>
            <p className="pt-2 text-sm leading-7 text-white/58">Concierge replies, tailored itineraries, and reservation support are available throughout the guest journey.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
