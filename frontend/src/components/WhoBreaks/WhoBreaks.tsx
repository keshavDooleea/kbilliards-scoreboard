import { useBoardColor, usePlayerName } from '../../context';
import { Board } from './Board';
import './WhoBreaks.css';

export function WhoBreaks() {
  const { lColor, rColor } = useBoardColor();
  const { lName, rName } = usePlayerName();

  return (
    <div className='board-container'>
      <div id='title-container'>
        <h2>Who breaks?</h2>
      </div>

      <Board color={lColor} name={lName} />
      <div className='separator'></div>
      <Board color={rColor} name={rName} />
    </div>
  );
}
