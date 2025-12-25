import { useRef, useState, TouchEvent } from 'react';
import { useBoardScore } from '../../context';
import './Board.css';

interface IBoard {
  color: string;
  name: string;
  score: number;
  isLeft?: boolean;
}

export function Board({ color, name, score, isLeft = false }: IBoard) {
  const { incrementLeft, decrementLeft, incrementRight, decrementRight } =
    useBoardScore();

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchEndY.current = null;
    touchStartY.current = e.targetTouches[0].clientY;
    setIsSwiping(true);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!touchStartY.current || !touchEndY.current) {
      setIsSwiping(false);
      return;
    }

    const distance = touchStartY.current - touchEndY.current;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe) {
      if (isLeft) {
        incrementLeft();
      } else {
        incrementRight();
      }
    } else if (isDownSwipe) {
      if (isLeft) {
        decrementLeft();
      } else {
        decrementRight();
      }
    }

    touchStartY.current = null;
    touchEndY.current = null;
    setIsSwiping(false);
  };

  return (
    <div
      className={`board ${isSwiping ? 'swiping' : ''}`}
      style={{ backgroundColor: color }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <h1 className='board-name'>{name}</h1>
      <p className='board-score'>{score}</p>
    </div>
  );
}
