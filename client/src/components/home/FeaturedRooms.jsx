import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import RoomCard from '../rooms/RoomCard';
import { roomCollection } from '../../utils/roomData';
import './FeaturedRooms.css';

const FeaturedRooms = () => {
  return (
    <Section id="featured-rooms">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Signature Residences" title="Suites designed like private worlds." copy="From horizon penthouses to family residences, each category is positioned with a distinct narrative, amenities, and visual rhythm built to increase booking intent." />
        <div className="grid gap-6 lg:grid-cols-3">
          {roomCollection.slice(0, 3).map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedRooms;
