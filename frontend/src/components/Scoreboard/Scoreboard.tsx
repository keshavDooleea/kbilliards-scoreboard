import { useBoardColor, useBoardScore, usePlayerName } from '../../context';
import { Board } from './Board';
import './Scoreboard.css';

export function Scoreboard() {
  const { lColor, rColor } = useBoardColor();
  const { lScore, rScore } = useBoardScore();
  const { lName, rName } = usePlayerName();

  return (
    <div className='board-container'>
      <Board name={lName} color={lColor} score={lScore} isLeft={true} />
      <div className='separator'></div>
      <Board name={rName} color={rColor} score={rScore} isLeft={false} />
    </div>
  );
}
