import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useScoreStorage } from '../hooks';
import { IChildrenProviderProps, useNewGameContext } from '.';

interface IBoardScoreContextType {
  lScore: number;
  rScore: number;
  incrementLeft: () => void;
  decrementLeft: () => void;
  incrementRight: () => void;
  decrementRight: () => void;
  isBothNil: () => boolean;
  resetScores: () => void;
}

const BoardScoreContext = createContext<IBoardScoreContextType | null>(null);

export function BoardScoreProvider({ children }: IChildrenProviderProps) {
  const { toggleWhoBreaks } = useNewGameContext();
  const {
    getLScore,
    getRScore,
    setLScore: saveLScore,
    setRScore: saveRScore,
    resetScores: clearScoreStorage,
  } = useScoreStorage();

  const [lScore, setLScore] = useState<number>(getLScore());
  const [rScore, setRScore] = useState<number>(getRScore());
  const prevScoresRef = useRef({ lScore: getLScore(), rScore: getRScore() });

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

  const resetScores = useCallback(() => {
    clearScoreStorage();
    setLScore(0);
    setRScore(0);
    prevScoresRef.current = { lScore: 0, rScore: 0 };
  }, [clearScoreStorage]);

  useEffect(() => {
    const prevScores = prevScoresRef.current;
    const hasScoresChanged =
      prevScores.lScore !== lScore || prevScores.rScore !== rScore;

    if (hasScoresChanged && (lScore > 0 || rScore > 0)) {
      toggleWhoBreaks();
      prevScoresRef.current = { lScore, rScore };
    }
  }, [lScore, rScore, toggleWhoBreaks]);

  const value = {
    lScore,
    rScore,
    incrementLeft,
    decrementLeft,
    incrementRight,
    decrementRight,
    isBothNil,
    resetScores,
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
