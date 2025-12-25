import {
  useBoardColor,
  useBoardScore,
  useNewGameContext,
  usePlayerName,
} from '../../context';
import { useScoreStorage } from '../../hooks';
import { TitleBar } from '../TitleBar';
import { Board } from './Board';
import './Scoreboard.css';

export function Scoreboard() {
  const { lColor, rColor } = useBoardColor();
  const { lScore, rScore } = useBoardScore();
  const { lName, rName, updateLName, updateRName } = usePlayerName();

  const { resetScores } = useScoreStorage();
  const { resetGame } = useNewGameContext();

  const currentGameCount = lScore + rScore + 1;

  const onRestart = () => {
    resetScores();
    resetGame();
  };

  return (
    <div className='board-container'>
      <TitleBar title={`Match ${currentGameCount}`} />

      <img
        src='icons/restart.svg'
        alt='restart-icon'
        className='restart-icon'
        onClick={onRestart}
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
    </div>
  );
}
