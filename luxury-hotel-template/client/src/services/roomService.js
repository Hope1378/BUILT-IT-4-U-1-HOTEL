import { roomCollection } from '../utils/roomData';

export const getRooms = async () => roomCollection;
export const getRoomById = async (roomId) => roomCollection.find((room) => room.id === roomId);
