import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { BALLS_COLORS } from '../infrastructure';
import { IChildrenProviderProps } from '.';

interface IBoardColorContextType {
  lColor: string;
  rColor: string;
}

const BoardColorContext = createContext<IBoardColorContextType | null>(null);

export function BoardColorProvider({ children }: IChildrenProviderProps) {
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
    lColor: leftBoardColor,
    rColor: rightBoardColor,
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
