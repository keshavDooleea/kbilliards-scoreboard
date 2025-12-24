import { useBoardColor } from '../../context';
import { Board } from '../Board';
import './Scoreboard.css';

export function Scoreboard() {
  const { leftBoardColor, rightBoardColor } = useBoardColor();

  return (
    <div id='scoreboard-container'>
      <Board color={leftBoardColor} />
      <div className='separator'></div>
      <Board color={rightBoardColor} />
    </div>
  );
}
