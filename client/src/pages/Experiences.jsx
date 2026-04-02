import './Experiences.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { experienceCollection } from '../utils/roomData';

const Experiences = () => {
  usePageSeo(pageSeo.experiences);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Private Access" title="Rare experiences curated for discerning travelers." copy="Present charters, tours, lifestyle programming, and concierge upgrades with narrative richness." />
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceCollection.map((item) => (
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]" key={item.title}>
              <img alt={item.title} className="h-72 w-full object-cover" src={item.image} />
              <div className="space-y-3 p-6 text-white/72">
                <h2 className="display-heading text-4xl text-ivory">{item.title}</h2>
                <p className="text-sm leading-7">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experiences;
