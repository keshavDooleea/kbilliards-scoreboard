import { createContext, useContext, useState } from 'react';
import { IChildrenProviderProps, usePlayerName } from '.';
import { useLocalStorage } from '../hooks';

interface INewGameContextType {
  isNew: boolean;
  isSelectingBalls: boolean;
  whoBreaks: string;
  setWhoBreaks: (isLeft: boolean) => void;
  startGame: () => void;
}

enum GameState {
  NEW,
  SELECTING,
  STARTED,
}

const NewGameContext = createContext<INewGameContextType | null>(null);

export function NewGameProvider({ children }: IChildrenProviderProps) {
  const { lName, rName } = usePlayerName();
  const { set, getNum } = useLocalStorage();

  const whoBreaksKey = 'leftBreaks';
  const gameStateKey = 'state';

  const initialState = getNum(gameStateKey);

  const [state, setState] = useState(initialState);
  const [doesLBreak, setDoesLBreak] = useState<boolean | null>(null);

  const setWhoBreaks = (isLeft: boolean) => {
    setState(GameState.SELECTING);
    set(gameStateKey, GameState.SELECTING);

    setDoesLBreak(isLeft);
    set(whoBreaksKey, isLeft);
  };

  const startGame = () => {
    setState(GameState.STARTED);
    set(gameStateKey, GameState.STARTED);
  };

  const isNew = state === GameState.NEW;
  const isSelectingBalls = state === GameState.SELECTING;

  const value = {
    isNew,
    isSelectingBalls,
    setWhoBreaks,
    startGame,
    whoBreaks: doesLBreak ? lName : rName,
  };

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
