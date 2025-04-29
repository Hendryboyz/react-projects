const INITIAL_GAME_BOARD =  [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export const computeGameBoard = (turns) => {
  let gameBoard = [ ...INITIAL_GAME_BOARD.map( line => [ ...line ] ) ];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col }  = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}