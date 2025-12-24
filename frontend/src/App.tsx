import { Scoreboard } from './components';
import { BoardColorProvider, BoardScoreProvider } from './context';

function App() {
  return (
    <BoardColorProvider>
      <BoardScoreProvider>
        <Scoreboard />
      </BoardScoreProvider>
    </BoardColorProvider>
  );
}

export default App;
