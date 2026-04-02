import './Spa.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { localMedia } from '../utils/localMedia';
import { pageSeo } from '../utils/seoConfig';
import { wellnessPrograms } from '../utils/pageContent';

const Spa = () => {
  usePageSeo(pageSeo.spa);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Wellness Estate" title="Restorative rituals with editorial depth." copy="Frame treatments, wellness packages, and daily movement programming in a refined way." />
        <div className="grid gap-6 xl:grid-cols-[.9fr,1.1fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-0">
            <img alt="Wellness sanctuary" className="h-full min-h-[26rem] w-full object-cover" src={localMedia.spa.sanctuary} />
          </div>
          <div className="space-y-5">
            {wellnessPrograms.map((program) => (
              <div className="glass-panel rounded-[2rem] p-6 md:p-8" key={program.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-champagne/75">{program.length}</p>
                <h2 className="display-heading mt-3 text-4xl text-ivory">{program.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Spa;
