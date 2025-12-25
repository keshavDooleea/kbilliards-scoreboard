import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

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
  const [lScore, setLScore] = useState<number>(0);
  const [rScore, setRScore] = useState<number>(0);

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
