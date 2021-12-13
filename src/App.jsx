import "./App.css";
import BoardBg from "./components/BoardBg";
import BoardPieces from "./components/BoardPieces";

function App() {
  return (
    <main className="bg">
      <h1>Board Game</h1>
      <div className="board">
        <BoardPieces />
        <BoardBg />
      </div>
    </main>
  );
}

export default App;
