import {useState} from "react";

const initialGameBoard =  [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectCell, player } ) {
  const [currentGameBoard, setGameBoard] = useState(initialGameBoard);

  const handleClickCell = (rowId, colId) => {
    setGameBoard(prevGameBoard => {
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowId][colId] = player;
      return updatedBoard;
    });

    onSelectCell();
  }

  return (
    <ol id="game-board">
      {currentGameBoard.map((row, rowId) => (
        <li key={rowId}>
          <ol>
            { row.map((playerSymbol, colId) =>
              <li key={colId}>
                <button onClick={(event) => {
                  handleClickCell(rowId, colId);
                }}>
                  { playerSymbol }
                </button>
              </li>
            ) }
          </ol>
        </li>
      ))}
    </ol>
  );
}