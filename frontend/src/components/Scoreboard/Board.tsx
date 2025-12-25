import { useBoardSwipe, usePlayerName } from '../../hooks';

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

  const { nameRef, handleInput } = usePlayerName({ name, onNameChanged });

  return (
    <div
      className={`board ${isSwiping ? 'swiping' : ''}`}
      style={{ backgroundColor: color }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <div
        ref={nameRef}
        className='board-name'
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning={true}></div>
      <p className='board-score'>{score}</p>
    </div>
  );
}
