import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { HOTEL_STATS } from '../../utils/constants';
import './LuxuryIntro.css';

const LuxuryIntro = () => {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[1fr,.95fr] lg:items-center">
        <SectionTitle eyebrow="Crafted For Prestige" title="A digital estate with the discipline of a luxury brand system." copy="This template balances editorial storytelling with conversion-aware structure: immersive hospitality visuals, pricing confidence, and elevated booking moments that feel bespoke rather than transactional." />
        <div className="grid gap-4 sm:grid-cols-2">
          {HOTEL_STATS.map((item) => (
            <div key={item.label} className="glass-panel rounded-[1.75rem] p-6">
              <div className="display-heading text-5xl text-champagne">{item.value}</div>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/55">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LuxuryIntro;
