import { Scoreboard } from './Scoreboard/Scoreboard';
import { WhoBreaks } from './WhoBreaks/WhoBreaks';
import { useNewGameContext } from '../context';

export function Main() {
  const { isNew } = useNewGameContext();

  if (isNew) {
    return <WhoBreaks />;
  }

  return <Scoreboard />;
}
