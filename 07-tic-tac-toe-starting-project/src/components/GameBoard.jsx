export default function GameBoard( { onSelectCell, board } ) {

  return (
    <ol id="game-board">
      {board.map((row, rowId) => (
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