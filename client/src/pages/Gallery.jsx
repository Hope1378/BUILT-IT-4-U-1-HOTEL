import './Gallery.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import usePageSeo from '../hooks/usePageSeo';
import { pageSeo } from '../utils/seoConfig';
import { galleryCollections } from '../utils/pageContent';

const Gallery = () => {
  usePageSeo(pageSeo.gallery);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Visual Gallery" title="A rich visual archive of the property experience." copy="Organize photography and film by category while maintaining fast, elegant browsing." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryCollections.map((collection) => (
            <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]" key={collection.title}>
              <div className="h-80 w-full overflow-hidden">
                <img alt={collection.title} className="h-full w-full object-cover" src={collection.image} />
              </div>
              <div className="flex min-h-28 items-center p-6">
                <h2 className="display-heading text-3xl text-ivory">{collection.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Gallery;
