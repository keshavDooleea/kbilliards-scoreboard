import './Board.css';

interface IBoard {
  color: string;
  name: string;
  score: number;
}

export function Board({ color, name, score }: IBoard) {
  return (
    <div className='board' style={{ backgroundColor: color }}>
      <h1 className='board-name'>{name}</h1>
      <p className='board-score'>{score}</p>
    </div>
  );
}
