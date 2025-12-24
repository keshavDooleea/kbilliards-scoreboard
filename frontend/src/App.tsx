import { Scoreboard } from './components';
import { BoardColorProvider } from './context';

function App() {
  return (
    <BoardColorProvider>
      <Scoreboard />
    </BoardColorProvider>
  );
}

export default App;
