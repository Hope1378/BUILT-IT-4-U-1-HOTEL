import './RestaurantDetails.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import ReservationForm from '../components/dining/ReservationForm';
import ChefCard from '../components/dining/ChefCard';
import usePageSeo from '../hooks/usePageSeo';
import { localMedia } from '../utils/localMedia';
import { pageSeo } from '../utils/seoConfig';
import { restaurantStory } from '../utils/pageContent';

const RestaurantDetails = () => {
  usePageSeo(pageSeo.restaurant);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Signature Atelier" title="Restaurant storytelling designed for conversion." copy="Feature menus, chef narratives, reservation prompts, and social proof in a premium format." />
        <div className="grid gap-6 xl:grid-cols-[1fr,.9fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img alt={restaurantStory.name} className="h-80 w-full object-cover" src={localMedia.dining.signature} />
              <div className="space-y-4 p-6 md:p-8 text-white/72">
                <h2 className="display-heading text-5xl text-ivory">{restaurantStory.name}</h2>
                <p className="text-base leading-8">{restaurantStory.philosophy}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {restaurantStory.tastingMoments.map((moment) => (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm" key={moment}>{moment}</div>
                  ))}
                </div>
              </div>
            </div>
            <ReservationForm />
          </div>
          <div className="space-y-6">
            <ChefCard chef={restaurantStory.chef} philosophy={restaurantStory.philosophy} />
            <div className="glass-panel rounded-[2rem] p-6 md:p-8 text-white/72">
              <p className="eyebrow text-champagne/75">Service Notes</p>
              <p className="mt-4 text-sm leading-7">Reservation pacing, curated pairings, and special-occasion personalization can all be sold from this page without lowering the tone of the brand.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RestaurantDetails;
