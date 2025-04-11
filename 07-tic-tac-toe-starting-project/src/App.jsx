import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

const deriveActivePlayer = (gameTurns) => {
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectCell = (rowId, colId) => {
    setGameTurns(prevTurns => {
      return [{
        square: { row: rowId, col: colId },
        player: deriveActivePlayer(prevTurns),
      }, ...gameTurns];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectCell={handleSelectCell} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
