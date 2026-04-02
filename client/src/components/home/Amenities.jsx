import { ConciergeBell, Martini, Sparkles, Waves } from 'lucide-react';
import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import './Amenities.css';

const amenityItems = [
  { icon: ConciergeBell, title: '24/7 Butler Service', copy: 'Private butler desk, garment pressing, unpacking, and curated room rituals.' },
  { icon: Martini, title: 'Private Club Access', copy: 'All-day salon service, reserve-only tastings, and sunset bar privileges.' },
  { icon: Waves, title: 'Destination Wellness', copy: 'Hydrotherapy circuit, hammam suite, infrared recovery, and movement studio.' },
  { icon: Sparkles, title: 'Arrival Personalization', copy: 'Fragrance selection, pillow menu, dietary notes, and celebration staging.' }
];

const Amenities = () => {
  return (
    <Section className="bg-white/[0.02]">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Elevated Service Layer" title="Every guest touchpoint designed for discretion and delight." copy="The template highlights meaningful amenities instead of generic icon rows, helping luxury properties communicate differentiation with precision." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {amenityItems.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="glass-panel rounded-[1.75rem] p-6">
              <Icon className="text-champagne" size={26} />
              <h3 className="mt-6 text-xl font-semibold text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Amenities;
