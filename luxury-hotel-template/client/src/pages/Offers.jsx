import './Offers.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { seasonalOffers } from '../utils/pageContent';

const Offers = () => {
  usePageSeo(pageSeo.offers);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Seasonal Privileges" title="Value-led packages presented with restraint." copy="Promote curated offers, inclusions, and urgency without cheapening the brand." />
        <div className="grid gap-6 lg:grid-cols-3">
          {seasonalOffers.map((offer) => (
            <article className="glass-panel rounded-[2rem] p-6 md:p-8" key={offer.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">{offer.tag}</p>
              <h2 className="display-heading mt-4 text-4xl text-ivory">{offer.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">{offer.description}</p>
              <div className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.2em] text-white/45">{offer.inclusion}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Offers;
