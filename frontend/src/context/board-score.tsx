import { createContext, useContext, useState, useCallback } from 'react';
import { useScoreStorage } from '../hooks';
import { IChildrenProviderProps } from '.';

interface IBoardScoreContextType {
  lScore: number;
  rScore: number;
  incrementLeft: () => void;
  decrementLeft: () => void;
  incrementRight: () => void;
  decrementRight: () => void;
  isBothNil: () => boolean;
}

const BoardScoreContext = createContext<IBoardScoreContextType | null>(null);

export function BoardScoreProvider({ children }: IChildrenProviderProps) {
  const {
    getLScore,
    getRScore,
    setLScore: saveLScore,
    setRScore: saveRScore,
  } = useScoreStorage();

  const [lScore, setLScore] = useState<number>(getLScore());
  const [rScore, setRScore] = useState<number>(getRScore());

  const incrementLeft = useCallback(() => {
    setLScore((prev) => {
      const newScore = prev + 1;
      saveLScore(newScore);
      return newScore;
    });
  }, []);

  const decrementLeft = useCallback(() => {
    setLScore((prev) => {
      const newScore = Math.max(0, prev - 1);
      saveLScore(newScore);
      return newScore;
    });
  }, []);

  const incrementRight = useCallback(() => {
    setRScore((prev) => {
      const newScore = prev + 1;
      saveRScore(newScore);
      return newScore;
    });
  }, []);

  const decrementRight = useCallback(() => {
    setRScore((prev) => {
      const newScore = Math.max(0, prev - 1);
      saveRScore(newScore);
      return newScore;
    });
  }, []);

  const isBothNil = () => lScore === rScore;

  const value = {
    lScore,
    rScore,
    incrementLeft,
    decrementLeft,
    incrementRight,
    decrementRight,
    isBothNil,
  };

  return (
    <BoardScoreContext.Provider value={value}>
      {children}
    </BoardScoreContext.Provider>
  );
}

export function useBoardScore(): IBoardScoreContextType {
  const context = useContext(BoardScoreContext);
  if (context === null) {
    throw new Error('useBoardScore error');
  }

  return context;
}
