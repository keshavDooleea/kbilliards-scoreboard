import { Scoreboard } from './Scoreboard/Scoreboard';
import { WhoBreaks } from './WhoBreaks/WhoBreaks';
import { SelectBalls } from './SelectBalls/SelectBalls';
import { useNewGameContext } from '../context';

export function Main() {
  const { isNew, isSelectingBalls } = useNewGameContext();

  if (isNew) {
    return <WhoBreaks />;
  }

  if (isSelectingBalls) {
    return <SelectBalls />;
  }

  return <Scoreboard />;
}
