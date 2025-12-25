import { useHandleClick, usePlayerName } from '../../hooks';

interface IBoard {
  color: string;
  name: string;
  onClick?: () => void;
  onNameChanged: (name: string) => void;
}

export function Board({ color, name, onClick, onNameChanged }: IBoard) {
  const { isClicked, handleClick } = useHandleClick({ onClick });
  const { nameRef, handleInput } = usePlayerName({ name, onNameChanged });

  return (
    <div
      className={`who-breaks-board board ${isClicked ? 'clicked' : ''}`}
      style={{ backgroundColor: color }}
      onDoubleClick={handleClick}>
      <div
        ref={nameRef}
        className='board-name'
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning={true}
      />
    </div>
  );
}
