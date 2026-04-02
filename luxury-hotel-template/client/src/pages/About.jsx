import './About.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { brandStoryPoints } from '../utils/pageContent';

const About = () => {
  usePageSeo(pageSeo.about);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Brand Story" title="A confident narrative for the property and its philosophy." copy="Use this area to articulate heritage, design, service values, and leadership perspective." />
        <div className="grid gap-6 lg:grid-cols-3">
          {brandStoryPoints.map((point) => (
            <div className="glass-panel rounded-[2rem] p-6 md:p-8" key={point.title}>
              <h2 className="display-heading text-4xl text-ivory">{point.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">{point.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default About;
