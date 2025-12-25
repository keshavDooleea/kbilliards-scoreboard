import { Scoreboard } from './components';
import {
  BoardColorProvider,
  BoardScoreProvider,
  NewGameProvider,
} from './context';

function App() {
  return (
    <BoardScoreProvider>
      <NewGameProvider>
        <BoardColorProvider>
          <Scoreboard />
        </BoardColorProvider>
      </NewGameProvider>
    </BoardScoreProvider>
  );
}

export default App;
