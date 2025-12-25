import { usePlayerName } from '../hooks';

interface IPlayerNameProps {
  name: string;
  onNameChanged: (name: string) => void;
}

export function PlayerName({ name, onNameChanged }: IPlayerNameProps) {
  const { nameRef, handleInput } = usePlayerName({ name, onNameChanged });

  return (
    <div
      ref={nameRef}
      className='board-name'
      contentEditable
      onInput={handleInput}
      suppressContentEditableWarning={true}
    />
  );
}
