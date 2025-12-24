import { createContext, useContext, useState, ReactNode } from 'react';

interface IBoardScoreContextType {
  lScore: number;
  rScore: number;
}

interface IBoardScoreProviderProps {
  children: ReactNode;
}

const BoardScoreContext = createContext<IBoardScoreContextType | null>(null);

export function BoardScoreProvider({ children }: IBoardScoreProviderProps) {
  const [lScore] = useState<number>(0);
  const [rScore] = useState<number>(0);

  const value = {
    lScore,
    rScore,
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
