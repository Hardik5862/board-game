import "./App.css";
import BoardBg from "./components/BoardBg";
import BoardPieces from "./components/BoardPieces";
import BoardSubheader from "./components/BoardSubheader";
import MoveHistory from "./components/MoveHistory";
import { PlayerMoveContextProvider } from "./store/player-move-context";

function App() {
  return (
    <PlayerMoveContextProvider>
      <main className="bg">
        <h1>Board Game</h1>
        <BoardSubheader />
        <div className="flex_row">
          <div className="board">
            <BoardPieces />
            <BoardBg />
          </div>
          <MoveHistory />
        </div>
      </main>
    </PlayerMoveContextProvider>
  );
}

export default App;
