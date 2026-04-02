import './Dining.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import ChefCard from '../components/dining/ChefCard';
import ReservationForm from '../components/dining/ReservationForm';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { diningVenues, restaurantStory } from '../utils/pageContent';

const diningMoments = [
  {
    title: 'Chef\'s Counter',
    copy: 'Private tasting interaction for six guests with course-by-course storytelling and rare cellar pours.'
  },
  {
    title: 'Sunset Aperitivo',
    copy: 'Golden-hour cocktails, marina views, and a lighter lounge menu designed for pre-dinner conversion.'
  },
  {
    title: 'In-Suite Dining',
    copy: 'Late-night tasting menus, celebration setups, and residence dining rituals for premium spend.'
  },
  {
    title: 'Private Events',
    copy: 'Intimate buyouts, milestone dinners, and executive entertaining with tailored service choreography.'
  }
];

const Dining = () => {
  usePageSeo(pageSeo.dining);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Michelin-Level Dining" title="Destination dining positioned as part of the stay." copy="Promote signature venues, tasting experiences, chefs, and reservation moments." />
        <div className="grid gap-6 xl:grid-cols-[1.1fr,.9fr]">
          <div className="space-y-6">
            {diningVenues.map((venue) => (
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]" key={venue.name}>
                <img alt={venue.name} className="h-72 w-full object-cover" src={venue.image} />
                <div className="space-y-3 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">{venue.type}</p>
                  <h2 className="display-heading text-4xl text-ivory">{venue.name}</h2>
                  <p className="text-sm leading-7 text-white/72">{venue.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8 text-white/72">
              <p className="eyebrow text-champagne/75">Dining Strategy</p>
              <h3 className="display-heading mt-4 text-4xl text-ivory">Revenue beyond the room.</h3>
              <p className="mt-4 text-sm leading-7">The page architecture frames dining as a destination-worthy reason to book, not a secondary amenity. That supports local traffic, higher guest spend, and stronger brand memorability.</p>
            </div>
            <div className="glass-panel rounded-[2rem] p-8 text-white/72">
              <p className="eyebrow text-champagne/75">Private Dining</p>
              <p className="mt-4 text-sm leading-7">Chef\'s table evenings, marina-terrace dinners, and in-suite tasting menus can all be surfaced here as high-margin enhancements to the stay.</p>
            </div>
            <ChefCard chef={restaurantStory.chef} philosophy={restaurantStory.philosophy} />
            <div className="grid gap-4 sm:grid-cols-2">
              {diningMoments.map((moment) => (
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-white/70" key={moment.title}>
                  <p className="text-xs uppercase tracking-[0.2em] text-champagne/75">Dining Moment</p>
                  <h3 className="display-heading mt-3 text-2xl text-ivory">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-7">{moment.copy}</p>
                </div>
              ))}
            </div>
            <ReservationForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Dining;
