import { useHandleClick } from '../../hooks';

interface IBoard {
  color: string;
  name: string;
  onClick?: () => void;
}

export function Board({ color, name, onClick }: IBoard) {
  const { isClicked, handleClick } = useHandleClick({ onClick });

  return (
    <div
      className={`who-breaks-board board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}>
      <div className='board-name' contentEditable>
        {name}
      </div>
    </div>
  );
}
