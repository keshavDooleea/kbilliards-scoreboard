import { useHandleClick } from '../../hooks';

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
      <div
        className='board-name'
        contentEditable
        onInput={(e) => onNameChanged(`${e.currentTarget.textContent}`)}>
        {name}
      </div>
    </div>
  );
}
