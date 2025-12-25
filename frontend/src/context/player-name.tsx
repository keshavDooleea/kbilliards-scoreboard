import { createContext, useContext, useState } from 'react';
import { IChildrenProviderProps } from '.';
import { usePlayerStorage } from '../hooks';

interface IPlayerNameContextType {
  lName: string;
  rName: string;
  updateLName: (newName: string) => void;
  updateRName: (newName: string) => void;
}

const PlayerNameContext = createContext<IPlayerNameContextType | null>(null);

export function PlayerNameProvider({ children }: IChildrenProviderProps) {
  const {
    getLName,
    getRName,
    setLName: saveLName,
    setRName: saveRName,
  } = usePlayerStorage();

  const [lName, setLName] = useState(getLName());
  const [rName, setRName] = useState(getRName());

  const updateLName = (newName: string) => {
    setLName(newName);
    saveLName(newName);
  };
  const updateRName = (newName: string) => {
    setRName(newName);
    saveRName(newName);
  };

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
