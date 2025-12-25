import { useBoardSwipe } from '../../hooks';
import './Board.css';

interface IBoard {
  color: string;
  name: string;
  score: number;
  isLeft?: boolean;
}

export function Board({ color, name, score, isLeft = false }: IBoard) {
  const { isSwiping, onTouchStart, onTouchMove, onTouchEnd } =
    useBoardSwipe(isLeft);

  return (
    <div
      className={`board ${isSwiping ? 'swiping' : ''}`}
      style={{ backgroundColor: color }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <div className='board-name' contentEditable>
        {name}
      </div>
      <p className='board-score'>{score}</p>
    </div>
  );
}
