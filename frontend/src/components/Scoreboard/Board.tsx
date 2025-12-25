import { useBoardSwipe } from '../../hooks';
import { PlayerName } from '../PlayerName';

interface IBoard {
  color: string;
  name: string;
  score: number;
  isLeft: boolean;
  onNameChanged: (name: string) => void;
}

export function Board({ color, name, score, isLeft, onNameChanged }: IBoard) {
  const { isSwiping, onTouchStart, onTouchMove, onTouchEnd } =
    useBoardSwipe(isLeft);

  return (
    <div
      className={`board ${isSwiping ? 'swiping' : ''}`}
      style={{ backgroundColor: color }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <PlayerName name={name} onNameChanged={onNameChanged} />

      <p className='board-score'>{score}</p>
    </div>
  );
}
