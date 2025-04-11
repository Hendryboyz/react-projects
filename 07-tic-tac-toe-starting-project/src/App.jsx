import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import {computeGameBoard} from "./utils.js";
import GameOver from "./components/GameOver.jsx";

const deriveActivePlayer = (gameTurns) => {
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'Y': 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = computeGameBoard(gameTurns);

  let winner = undefined;
  WINNING_COMBINATIONS.forEach(combination => {
    const symbols = combination.map((cell) => gameBoard[cell.row][cell.column]);
    const hasWinner = symbols.every(symbol => symbol !== null && symbol === symbols[0]);
    if (hasWinner) {
      winner = players[symbols[0]];
    }
  })

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectCell = (rowId, colId) => {
    setGameTurns(prevTurns => {
      return [{
        square: { row: rowId, col: colId },
        player: deriveActivePlayer(prevTurns),
      }, ...gameTurns];
    });
  }

  const handleRestart = () => { setGameTurns([]) };

  const handlePlayerSave = (symbol, playerName) => {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: playerName }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onSaveName={handlePlayerSave} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onSaveName={handlePlayerSave} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
