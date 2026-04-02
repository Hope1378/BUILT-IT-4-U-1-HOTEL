import './Rooms.css';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import RoomSearch from '../components/rooms/RoomSearch';
import RoomFilters from '../components/rooms/RoomFilters';
import RoomGrid from '../components/rooms/RoomGrid';
import RoomComparison from '../components/rooms/RoomComparison';
import useRoomExplorer from '../hooks/useRoomExplorer';

const Rooms = () => {
  const {
    query,
    setQuery,
    viewFilter,
    setViewFilter,
    occupancyFilter,
    setOccupancyFilter,
    filteredRooms,
    compareIds,
    comparisonRooms,
    toggleCompare
  } = useRoomExplorer();

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle eyebrow="Curated Inventory" title="Residences and villas for every guest profile." copy="Showcase room categories, filters, rate transparency, and elevated visual merchandising." />
        <div className="grid gap-6 xl:grid-cols-[1.25fr,.75fr]">
          <div>
            <RoomGrid compareIds={compareIds} rooms={filteredRooms} toggleCompare={toggleCompare} />
          </div>
          <div className="space-y-6 xl:pl-2">
            <RoomSearch query={query} setQuery={setQuery} />
            <RoomFilters occupancyFilter={occupancyFilter} setOccupancyFilter={setOccupancyFilter} setViewFilter={setViewFilter} viewFilter={viewFilter} />
            <RoomComparison rooms={comparisonRooms} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Rooms;
