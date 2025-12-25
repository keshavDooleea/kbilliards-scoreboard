import { useBoardColor, useNewGameContext } from '../../context';
import { TitleBar } from '../TitleBar';
import { Board } from './Board';
import './SelectBalls.css';

export function SelectBalls() {
  const { lColor, rColor } = useBoardColor();
  const { startGame, whoBreaks } = useNewGameContext();

  return (
    <div className='board-container who-breaks-container'>
      <TitleBar title={`${whoBreaks} plays?`} />

      <Board color={lColor} name='Stripe' onClick={startGame} />
      <div className='separator'></div>
      <Board color={rColor} name='Solid' onClick={startGame} />
    </div>
  );
}
