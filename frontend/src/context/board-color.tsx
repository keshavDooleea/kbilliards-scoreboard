import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react';
import { BALLS_COLORS } from '../infrastructure';

interface IBoardColorContextType {
  leftBoardColor: string;
  rightBoardColor: string;
}

interface IBoardColorProviderProps {
  children: ReactNode;
}

const BoardColorContext = createContext<IBoardColorContextType | null>(null);

export function BoardColorProvider({ children }: IBoardColorProviderProps) {
  const generateColor = useCallback((): string => {
    const randomIndex = Math.floor(Math.random() * BALLS_COLORS.length);
    return BALLS_COLORS[randomIndex];
  }, []);

  const [leftBoardColor] = useState<string>(generateColor());
  const [rightBoardColor, setRightBoardColor] = useState<string>(
    generateColor()
  );

  useEffect(() => {
    let rightColor = rightBoardColor;

    while (rightColor === leftBoardColor) {
      rightColor = generateColor();
    }

    setRightBoardColor(rightColor);
  }, []);

  const value: IBoardColorContextType = {
    leftBoardColor,
    rightBoardColor,
  };

  return (
    <BoardColorContext.Provider value={value}>
      {children}
    </BoardColorContext.Provider>
  );
}

export function useBoardColor(): IBoardColorContextType {
  const context = useContext(BoardColorContext);
  if (context === null) {
    throw new Error('useBoardColor error');
  }

  return context;
}
