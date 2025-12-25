import { useBoardColor, usePlayerName } from '../../context';
import { Board } from './Board';

export function WhoBreaks() {
  const { lColor, rColor } = useBoardColor();
  const { lName, rName } = usePlayerName();

  return (
    <div className='board-container'>
      <Board color={lColor} name={lName} />
      <div className='separator'></div>
      <Board color={rColor} name={rName} />
    </div>
  );
}
