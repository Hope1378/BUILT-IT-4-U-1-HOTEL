import Container from '../common/Container';
import Section from '../common/Section';
import './Awards.css';

const items = ['Condé Nast Reader Select', 'Forbes Travel Five-Star', 'World Spa Design Honoree', 'Gourmet Destination Award'];

const Awards = () => {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-champagne/10 px-6 py-5">
          <div className="flex min-w-max animate-marquee gap-12 text-sm uppercase tracking-[0.32em] text-champagne/90">
            {[...items, ...items].map((item, index) => <span key={item + index}>{item}</span>)}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Awards;
