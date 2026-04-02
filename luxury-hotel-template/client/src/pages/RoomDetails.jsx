import './RoomDetails.css';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import RoomHero from '../components/room-details/RoomHero';
import RoomGallery from '../components/room-details/RoomGallery';
import RoomFeatures from '../components/room-details/RoomFeatures';
import RoomAmenitiesList from '../components/room-details/RoomAmenitiesList';
import RoomAvailability from '../components/room-details/RoomAvailability';
import RoomBookingSidebar from '../components/room-details/RoomBookingSidebar';
import VirtualTour from '../components/room-details/VirtualTour';
import SimilarRooms from '../components/room-details/SimilarRooms';
import { roomCollection } from '../utils/roomData';

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = roomCollection.find((item) => item.id === roomId) || roomCollection[0];

  if (!room) {
    return <Navigate replace to="/rooms" />;
  }

  const similarRooms = roomCollection.filter((item) => item.id !== room.id).slice(0, 3);

  return (
    <Section>
      <Container className="space-y-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr),minmax(20rem,0.85fr)] md:items-start">
          <div className="order-1 space-y-6">
            <RoomHero room={room} />
            <RoomGallery room={room} />
          </div>
          <div className="order-2 space-y-6 md:sticky md:top-24">
            <RoomBookingSidebar room={room} />
            <RoomAvailability room={room} />
          </div>
        </div>
        <div className="space-y-6">
          <RoomFeatures room={room} />
          <RoomAmenitiesList room={room} />
          <VirtualTour room={room} />
        </div>
        <SimilarRooms rooms={similarRooms} />
      </Container>
    </Section>
  );
};

export default RoomDetails;
