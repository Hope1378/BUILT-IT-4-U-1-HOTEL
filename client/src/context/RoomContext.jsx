import { createContext, useMemo } from 'react';
import { defaultRoomState } from './roomLogic';

export const RoomContext = createContext(defaultRoomState);

export const RoomProvider = ({ children }) => {
  const value = useMemo(() => defaultRoomState, []);
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
