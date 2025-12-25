import { useBoardColor, usePlayerName, useNewGameContext } from '../../context';
import { Board } from './Board';
import './WhoBreaks.css';

export function WhoBreaks() {
  const { lColor, rColor } = useBoardColor();
  const { lName, rName } = usePlayerName();
  const { startGame } = useNewGameContext();

  const handleBoardClick = () => startGame();

  return (
    <div className='board-container who-breaks-container'>
      <div id='title-container'>
        <h2>Who breaks?</h2>
      </div>

      <Board color={lColor} name={lName} onClick={handleBoardClick} />
      <div className='separator'></div>
      <Board color={rColor} name={rName} onClick={handleBoardClick} />
    </div>
  );
}
