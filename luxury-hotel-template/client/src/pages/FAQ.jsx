import './FAQ.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { faqItems } from '../utils/pageContent';

const FAQ = () => {
  usePageSeo(pageSeo.faq);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Guest Questions" title="Answers delivered with a polished service tone." copy="Reduce booking friction with clear policies, timing, and service expectations." />
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div className="glass-panel rounded-[2rem] p-6 md:p-8" key={item.question}>
              <h2 className="text-lg font-semibold text-ivory">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
