import './Meetings.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { meetingAdvantages } from '../utils/pageContent';

const Meetings = () => {
  usePageSeo(pageSeo.meetings);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Executive Precision" title="High-touch corporate gatherings without visual compromise." copy="Support premium corporate demand with boardrooms, hybrid capabilities, and service assurances." />
        <div className="grid gap-5 md:grid-cols-2">
          {meetingAdvantages.map((item) => (
            <div className="glass-panel rounded-[2rem] p-6 md:p-8" key={item}>
              <p className="text-sm leading-7 text-white/75">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Meetings;
