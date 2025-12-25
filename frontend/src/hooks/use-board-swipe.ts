import { useRef, useState, TouchEvent } from 'react';
import { useBoardScore } from '../context';

export function useBoardSwipe(isLeft: boolean) {
  const minSwipeDistance = 50;

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const { incrementLeft, decrementLeft, incrementRight, decrementRight } =
    useBoardScore();

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

  return { isSwiping, onTouchStart, onTouchMove, onTouchEnd };
}
