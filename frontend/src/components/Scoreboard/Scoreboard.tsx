import { useBoardColor, useBoardScore } from '../../context';
import { Board } from '../Board';
import './Scoreboard.css';

export function Scoreboard() {
  const { lColor, rColor } = useBoardColor();
  const { lScore, rScore } = useBoardScore();

  return (
    <div id='scoreboard-container'>
      <Board color={lColor} score={lScore} name='Keshav' />
      <div className='separator'></div>
      <Board color={rColor} score={rScore} name='Varoun' />
    </div>
  );
}
