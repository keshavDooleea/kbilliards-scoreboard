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
      className={`board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onDoubleClick={handleClick}>
      <div className='board-name'>{name}</div>
      <div className='board-score board-ball'>
        <img src={`balls/${name.toLowerCase()}.png`} alt={`${name} ball`} />
      </div>
    </div>
  );
}
