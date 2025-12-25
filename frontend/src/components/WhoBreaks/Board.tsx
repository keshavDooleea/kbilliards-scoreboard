interface IBoard {
  color: string;
  name: string;
}

export function Board({ color, name }: IBoard) {
  return (
    <div className={'board'} style={{ backgroundColor: color }}>
      <div className='board-name' contentEditable>
        {name}
      </div>
    </div>
  );
}
