import { roomCollection } from '../utils/roomData';

export const defaultRoomState = {
  rooms: roomCollection,
  featured: roomCollection.slice(0, 3)
};
