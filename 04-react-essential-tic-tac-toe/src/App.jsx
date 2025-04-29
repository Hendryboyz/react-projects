import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import {computeGameBoard} from "./utils.js";
import GameOver from "./components/GameOver.jsx";

const INITIAL_PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const deriveActivePlayer = (gameTurns) => {
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

const deriveWinner = (gameBoard, players) => {
  let winner = undefined;
  WINNING_COMBINATIONS.forEach(combination => {
    const symbols = combination.map((cell) => gameBoard[cell.row][cell.column]);
    const hasWinner = symbols.every(symbol => symbol !== null && symbol === symbols[0]);
    if (hasWinner) {
      winner = players[symbols[0]];
    }
  })
  return winner;
};

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = computeGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

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
          {Object.keys(INITIAL_PLAYERS).map(symbol => (
            <Player initialName={INITIAL_PLAYERS[symbol]} symbol={symbol} isActive={activePlayer === symbol} onSaveName={handlePlayerSave} />
          ))}
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
