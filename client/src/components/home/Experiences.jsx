import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { experienceCollection } from '../../utils/roomData';
import './Experiences.css';

const Experiences = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionTitle eyebrow="Beyond The Stay" title="Rare access, privately arranged." copy="Experiences are presented as premium editorial cards to support higher average order value and improve attachment rates for concierge-led revenue streams." />
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceCollection.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img alt={item.title} className="h-72 w-full object-cover" src={item.image} />
              <div className="space-y-4 p-6">
                <h3 className="display-heading text-3xl text-ivory">{item.title}</h3>
                <p className="text-sm leading-7 text-white/68">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experiences;
