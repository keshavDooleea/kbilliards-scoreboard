import { createContext, useContext, useState } from 'react';
import { useBoardScore } from './board-score';
import { IChildrenProviderProps, usePlayerName } from '.';

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
  const { isBothNil } = useBoardScore();
  const { lName, rName } = usePlayerName();

  const [state, setState] = useState(
    isBothNil() ? GameState.NEW : GameState.STARTED
  );
  const [doesLBreak, setDoesLBreak] = useState<boolean | null>(null);

  const setWhoBreaks = (isLeft: boolean) => {
    setDoesLBreak(isLeft);
    setState(1);
  };

  const startGame = () => setState(GameState.STARTED);

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
