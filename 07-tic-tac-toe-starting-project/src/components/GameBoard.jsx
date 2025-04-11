const initialGameBoard =  [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectCell, turns } ) {
  // compute the game board from the turns state derived from App
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col }  = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowId) => (
        <li key={rowId}>
          <ol>
            { row.map((playerSymbol, colId) =>
              <li key={colId}>
                <button
                  onClick={(_) => {
                    onSelectCell(rowId, colId);
                  }}
                  disabled={playerSymbol !== null}
                >
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