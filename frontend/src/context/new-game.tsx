import { createContext, useContext, useState } from 'react';
import { IChildrenProviderProps, usePlayerName } from '.';
import { useLocalStorage } from '../hooks';

interface INewGameContextType {
  isNew: boolean;
  isSelectingBalls: boolean;
  whoBreaks: string;
  doesLBreak: boolean;
  startGame: () => void;
  resetGame: () => void;
  toggleWhoBreaks: () => void;
  setWhoBreaks: (isLeft: boolean) => void;
}

enum GameState {
  NEW,
  SELECTING,
  STARTED,
}

const NewGameContext = createContext<INewGameContextType | null>(null);

export function NewGameProvider({ children }: IChildrenProviderProps) {
  const { lName, rName } = usePlayerName();
  const { set, getNum, getBool, rm } = useLocalStorage();

  const whoBreaksKey = 'leftBreaks';
  const gameStateKey = 'state';

  const initialState = getNum(gameStateKey);
  const initialBreak = getBool(whoBreaksKey);

  const [state, setState] = useState(initialState);
  const [doesLBreak, setDoesLBreak] = useState<boolean | null>(initialBreak);

  const resetGame = () => {
    rm(whoBreaksKey);
    rm(gameStateKey);
    setState(GameState.NEW);
  };

  const setWhoBreaks = (isLeft: boolean) => {
    setState(GameState.SELECTING);
    set(gameStateKey, GameState.SELECTING);

    setDoesLBreak(isLeft);
    set(whoBreaksKey, isLeft);
  };

  const toggleWhoBreaks = (): void => {
    setDoesLBreak((old) => {
      const newBreak = !old;
      set(whoBreaksKey, newBreak);
      return newBreak;
    });
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
    whoBreaks: doesLBreak ? lName : rName,
    doesLBreak: doesLBreak ?? false,
    setWhoBreaks,
    startGame,
    resetGame,
    toggleWhoBreaks,
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
