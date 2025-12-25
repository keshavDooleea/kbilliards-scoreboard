import { createContext, useContext, useState } from 'react';
import { IChildrenProviderProps } from '.';

interface IPlayerNameContextType {
  lName: string;
  rName: string;
  updateLName: (newName: string) => void;
  updateRName: (newName: string) => void;
}

const PlayerNameContext = createContext<IPlayerNameContextType | null>(null);

export function PlayerNameProvider({ children }: IChildrenProviderProps) {
  const [lName, setLName] = useState('k');
  const [rName, setRName] = useState('v');

  const updateLName = (newName: string) => setLName(newName);
  const updateRName = (newName: string) => setRName(newName);

  const value = { lName, rName, updateLName, updateRName };

  return (
    <PlayerNameContext.Provider value={value}>
      {children}
    </PlayerNameContext.Provider>
  );
}

export function usePlayerName(): IPlayerNameContextType {
  const context = useContext(PlayerNameContext);
  if (context === null) {
    throw new Error('usePlayerName error');
  }

  return context;
}
