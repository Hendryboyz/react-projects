const initialGameBoard =  [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export const computeGameBoard = (turns) => {
  let gameBoard = [ ...initialGameBoard.map( line => [ ...line ] ) ];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col }  = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}