import './Weddings.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { localMedia } from '../utils/localMedia';
import { pageSeo } from '../utils/seoConfig';
import { weddingMoments } from '../utils/pageContent';

const Weddings = () => {
  usePageSeo(pageSeo.weddings);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Ceremonial Luxury" title="Wedding experiences designed around emotion and detail." copy="Highlight ceremony spaces, planning support, and destination wedding packages." />
        <div className="grid gap-6 xl:grid-cols-[1fr,.9fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-0">
            <img alt="Wedding terrace" className="h-full min-h-[28rem] w-full object-cover" src={localMedia.weddings.terrace} />
          </div>
          <div className="space-y-4">
            {weddingMoments.map((moment) => (
              <div className="glass-panel rounded-[2rem] p-6" key={moment}>
                <p className="text-sm leading-7 text-white/75">{moment}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Weddings;
