import { useState, MouseEvent } from 'react';

interface IBoard {
  color: string;
  name: string;
  onClick?: () => void;
}

export function Board({ color, name, onClick }: IBoard) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);

      if (onClick) {
        setTimeout(() => onClick(), 150);
      }
    }, 200);
  };

  return (
    <div
      className={`board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}>
      <div className='board-name' contentEditable>
        {name}
      </div>
      <div className='board-score board-ball'>
        <img src={`balls/${name.toLowerCase()}.png`} alt={`${name} ball`} />
      </div>
    </div>
  );
}
