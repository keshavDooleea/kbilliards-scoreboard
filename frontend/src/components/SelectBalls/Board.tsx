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
      className={`who-breaks-board board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}>
      <div className='board-name' contentEditable>
        {name}
      </div>
    </div>
  );
}
