import { useBoardColor, usePlayerName, useNewGameContext } from '../../context';
import { TitleBar } from '../TitleBar';
import { Board } from './Board';
import './WhoBreaks.css';

export function WhoBreaks() {
  const { lColor, rColor } = useBoardColor();
  const { lName, rName, updateLName, updateRName } = usePlayerName();
  const { setWhoBreaks } = useNewGameContext();

  const handleLBoardClick = () => setWhoBreaks(true);
  const handleRBoardClick = () => setWhoBreaks(false);

  return (
    <div className='board-container who-breaks-container'>
      <TitleBar title='Who breaks?' />

      <Board
        color={lColor}
        name={lName}
        onClick={handleLBoardClick}
        onNameChanged={updateLName}
      />
      <div className='separator'></div>
      <Board
        color={rColor}
        name={rName}
        onClick={handleRBoardClick}
        onNameChanged={updateRName}
      />
    </div>
  );
}
