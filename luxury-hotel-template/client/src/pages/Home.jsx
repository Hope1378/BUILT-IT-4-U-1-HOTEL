import './Home.css';
import Hero from '../components/home/Hero';
import LuxuryIntro from '../components/home/LuxuryIntro';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Amenities from '../components/home/Amenities';
import Experiences from '../components/home/Experiences';
import Testimonials from '../components/home/Testimonials';
import Awards from '../components/home/Awards';
import InstagramFeed from '../components/home/InstagramFeed';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <LuxuryIntro />
      <FeaturedRooms />
      <Amenities />
      <Experiences />
      <Testimonials />
      <Awards />
      <InstagramFeed />
      <Newsletter />
    </>
  );
};

export default Home;
