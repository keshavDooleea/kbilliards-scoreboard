import {
  BoardColorProvider,
  BoardScoreProvider,
  NewGameProvider,
  PlayerNameProvider,
} from './context';
import { Main } from './components';

function App() {
  return (
    <PlayerNameProvider>
      <NewGameProvider>
        <BoardScoreProvider>
          <BoardColorProvider>
            <Main />
          </BoardColorProvider>
        </BoardScoreProvider>
      </NewGameProvider>
    </PlayerNameProvider>
  );
}

export default App;
