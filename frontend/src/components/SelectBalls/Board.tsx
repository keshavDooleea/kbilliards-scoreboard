import { useState } from 'react';

interface IBoard {
  color: string;
  name: string;
  onClick?: () => void;
}

export function Board({ color, name, onClick }: IBoard) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`who-breaks-board board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}>
      <div className='board-name' contentEditable>
        {name}
      </div>
      <div className='board-score board-ball'>s</div>
    </div>
  );
}
