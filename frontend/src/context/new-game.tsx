import { createContext, useContext, ReactNode, useState } from 'react';
import { useBoardScore } from './board-score';

interface INewGameContextType {
  isNew: boolean;
  startGame: () => void;
}

interface INewGameProviderProps {
  children: ReactNode;
}

const NewGameContext = createContext<INewGameContextType | null>(null);

export function NewGameProvider({ children }: INewGameProviderProps) {
  const { isBothNil } = useBoardScore();
  const [isNew, setIsNew] = useState(isBothNil());

  const startGame = () => {
    setIsNew(false);
  };

  const value = { isNew, startGame };

  return (
    <NewGameContext.Provider value={value}>{children}</NewGameContext.Provider>
  );
}

export function useNewGameContext(): INewGameContextType {
  const context = useContext(NewGameContext);
  if (context === null) {
    throw new Error('useNewGameContext error');
  }

  return context;
}
