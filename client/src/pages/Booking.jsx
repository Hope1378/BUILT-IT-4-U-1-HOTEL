import './Booking.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import BookingWizard from '../components/booking/BookingWizard';

const Booking = () => {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Secure Reservation" title="A premium multi-step booking journey." copy="Guide guests through availability, room selection, add-ons, and payment with low-friction UX." />
        <BookingWizard />
      </Container>
    </Section>
  );
};

export default Booking;
