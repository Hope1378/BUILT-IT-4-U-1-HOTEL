import './Events.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { eventVenues } from '../utils/pageContent';

const Events = () => {
  usePageSeo(pageSeo.events);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Celebration & Gathering" title="Elegant spaces for landmark occasions." copy="Position venues, capacities, and inquiry pathways for social and corporate events." />
        <div className="grid gap-6 lg:grid-cols-3">
          {eventVenues.map((venue) => (
            <article className="glass-panel rounded-[2rem] p-6 md:p-8" key={venue.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne/75">{venue.capacity}</p>
              <h2 className="display-heading mt-4 text-4xl text-ivory">{venue.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">{venue.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Events;
