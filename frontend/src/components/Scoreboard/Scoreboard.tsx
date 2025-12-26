import { useState } from 'react';
import { useBoardColor, useBoardScore, usePlayerName } from '../../context';
import { TitleBar } from '../TitleBar';
import { Board } from './Board';
import { RestartModal } from '../Modals';
import './Scoreboard.css';

export function Scoreboard() {
  const { lColor, rColor } = useBoardColor();
  const { lScore, rScore } = useBoardScore();
  const { lName, rName, updateLName, updateRName } = usePlayerName();
  const [showRestartModal, setShowRestartModal] = useState<boolean>(false);

  const currentGameCount = lScore + rScore + 1;

  const onRestartClicked = () => setShowRestartModal(true);
  const onRestartModalClose = () => setShowRestartModal(false);

  return (
    <div className='board-container'>
      <TitleBar title={`Match ${currentGameCount}`} />

      <img
        src='icons/restart.svg'
        alt='restart-icon'
        className='icon restart-icon'
        onClick={onRestartClicked}
      />

      <Board
        name={lName}
        color={lColor}
        score={lScore}
        isLeft={true}
        onNameChanged={updateLName}
      />
      <div className='separator'></div>
      <Board
        name={rName}
        color={rColor}
        score={rScore}
        isLeft={false}
        onNameChanged={updateRName}
      />

      {showRestartModal && <RestartModal onClose={onRestartModalClose} />}
    </div>
  );
}
