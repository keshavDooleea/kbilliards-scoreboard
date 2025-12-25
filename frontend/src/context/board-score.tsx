import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import { useScoreStorage } from '../hooks';

interface IBoardScoreContextType {
  lScore: number;
  rScore: number;
  incrementLeft: () => void;
  decrementLeft: () => void;
  incrementRight: () => void;
  decrementRight: () => void;
}

interface IBoardScoreProviderProps {
  children: ReactNode;
}

const BoardScoreContext = createContext<IBoardScoreContextType | null>(null);

export function BoardScoreProvider({ children }: IBoardScoreProviderProps) {
  const {
    getLScore,
    getRScore,
    setLScore: saveLScore,
    setRScore: saveRScore,
  } = useScoreStorage();

  const [lScore, setLScore] = useState<number>(getLScore());
  const [rScore, setRScore] = useState<number>(getRScore());

  const incrementLeft = useCallback(() => {
    setLScore((prev) => prev + 1);
  }, []);

  const decrementLeft = useCallback(() => {
    setLScore((prev) => Math.max(0, prev - 1));
  }, []);

  const incrementRight = useCallback(() => {
    setRScore((prev) => prev + 1);
  }, []);

  const decrementRight = useCallback(() => {
    setRScore((prev) => Math.max(0, prev - 1));
  }, []);

  useEffect(() => {
    if (lScore > 0) saveLScore(lScore);
  }, [lScore]);

  useEffect(() => {
    if (rScore > 0) saveRScore(rScore);
  }, [rScore]);

  const value = {
    lScore,
    rScore,
    incrementLeft,
    decrementLeft,
    incrementRight,
    decrementRight,
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
