import { useHandleClick } from '../../hooks';
import { PlayerName } from '../PlayerName';

interface IBoard {
  color: string;
  name: string;
  onClick?: () => void;
  onNameChanged: (name: string) => void;
}

export function Board({ color, name, onClick, onNameChanged }: IBoard) {
  const { isClicked, handleClick } = useHandleClick({ onClick });

  return (
    <div
      className={`who-breaks-board board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onDoubleClick={handleClick}>
      <PlayerName name={name} onNameChanged={onNameChanged} />
    </div>
  );
}
