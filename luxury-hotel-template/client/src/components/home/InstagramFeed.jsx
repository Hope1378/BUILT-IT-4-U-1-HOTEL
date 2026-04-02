import { localMedia } from '../../utils/localMedia';
import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import './InstagramFeed.css';

const shots = [
  localMedia.gallery.architecture,
  localMedia.gallery.suites,
  localMedia.gallery.night,
  localMedia.gallery.water
];

const InstagramFeed = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionTitle eyebrow="Social Curation" title="Visual continuity across every brand touchpoint." copy="Integrated visual storytelling keeps the template feeling alive, aspirational, and editorial without compromising performance or hierarchy." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {shots.map((item) => <img key={item} alt="Aurelia Grand social scene" className="h-72 w-full rounded-[1.5rem] object-cover" src={item} />)}
        </div>
      </Container>
    </Section>
  );
};

export default InstagramFeed;
