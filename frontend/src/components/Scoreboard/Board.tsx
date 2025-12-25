import { useNewGameContext } from '../../context';
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

  const { doesLBreak } = useNewGameContext();

  return (
    <div
      className={`board ${isSwiping ? 'swiping' : ''}`}
      style={{ backgroundColor: color }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <PlayerName name={name} onNameChanged={onNameChanged} />
      <small
        className='breaking-text'
        style={{ opacity: isLeft === doesLBreak ? 1 : 0, color }}>
        Breaking
      </small>

      <p className='board-score'>{score}</p>
    </div>
  );
}
