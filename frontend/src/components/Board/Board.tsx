import './Board.css';

interface IBoard {
  color: string;
  name: string;
}

export function Board({ color, name }: IBoard) {
  return (
    <div className='board' style={{ backgroundColor: color }}>
      <h1 className='board-name'>{name}</h1>
    </div>
  );
}
