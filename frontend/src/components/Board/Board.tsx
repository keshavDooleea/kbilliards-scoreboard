import './Board.css';

interface IBoard {
  color: string;
}

export function Board({ color }: IBoard) {
  return <div className='board' style={{ backgroundColor: color }}></div>;
}
