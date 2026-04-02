import { useMemo, useState } from 'react';
import { roomCollection } from '../utils/roomData';

const useRoomExplorer = () => {
  const [query, setQuery] = useState('');
  const [viewFilter, setViewFilter] = useState('all');
  const [occupancyFilter, setOccupancyFilter] = useState('all');
  const [compareIds, setCompareIds] = useState([]);

  const filteredRooms = useMemo(() => {
    return roomCollection.filter((room) => {
      const matchesQuery = !query || [room.name, room.description, room.tag, room.view].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesView = viewFilter === 'all' || room.view.toLowerCase().includes(viewFilter.toLowerCase());
      const occupancyCount = Number(room.occupancy.split(' ')[0]);
      const matchesOccupancy = occupancyFilter === 'all' || occupancyCount >= Number(occupancyFilter);
      return matchesQuery && matchesView && matchesOccupancy;
    });
  }, [occupancyFilter, query, viewFilter]);

  const toggleCompare = (roomId) => {
    setCompareIds((current) => {
      if (current.includes(roomId)) {
        return current.filter((item) => item !== roomId);
      }
      if (current.length >= 3) {
        return [...current.slice(1), roomId];
      }
      return [...current, roomId];
    });
  };

  const comparisonRooms = useMemo(
    () => roomCollection.filter((room) => compareIds.includes(room.id)),
    [compareIds]
  );

  return {
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
  };
};

export default useRoomExplorer;
