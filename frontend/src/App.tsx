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
      <BoardScoreProvider>
        <NewGameProvider>
          <BoardColorProvider>
            <Main />
          </BoardColorProvider>
        </NewGameProvider>
      </BoardScoreProvider>
    </PlayerNameProvider>
  );
}

export default App;
