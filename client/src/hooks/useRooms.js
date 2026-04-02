import { useEffect, useState } from 'react';
import { getRooms } from '../services/roomService';

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms().then((items) => {
      setRooms(items);
      setLoading(false);
    });
  }, []);

  return { rooms, loading };
};

export default useRooms;
