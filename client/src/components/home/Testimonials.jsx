import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import useReviews from '../../hooks/useReviews';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = useReviews();

  return (
    <Section className="bg-white/[0.02]">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Guest Sentiment" title="Social proof, presented with quiet confidence." copy="Luxury properties should not feel needy. These testimonial blocks support trust while preserving a premium editorial tone." />
        <div className="grid gap-6 lg:grid-cols-2">
          {reviews.map((item) => (
            <blockquote key={item.guest} className="glass-panel rounded-[2rem] p-8">
              <p className="display-heading text-3xl leading-tight text-ivory">“{item.quote}”</p>
              <footer className="mt-8 text-sm uppercase tracking-[0.2em] text-white/55">{item.guest} · {item.title}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
