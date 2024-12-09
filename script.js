const board = document.getElementById('board');

for (let i = 0; i < 200; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}
const tetrominoes = [
  // I
  [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // O
  [
    [1, 1],
    [1, 1]
  ],
  // T
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  // J
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  // L
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ]
];

function rotate(matrix) {
  const n = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[n - j][i])
  );
  return result;
}
function collides(board, piece, offsetX, offsetY) {
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x] &&
        (board[y + offsetY] &&
        board[y + offsetY][x + offsetX]) !== 0) {
        return true;
      }
    }
  }
  return false;
}

function movePiece(board, piece, offsetX, offsetY) {
  if (collides(board, piece, offsetX, offsetY)) {
    return false;
  }
  // ここでボードの状態を更新します
  return true;
}
function clearLines(board) {
  let linesCleared = 0;

  outer: for (let y = board.length - 1; y >= 0; y--) {
    for (let x = 0; x < board[y].length; x++) {
      if (!board[y][x]) {
        continue outer;
      }
    }

    // 行をクリアします
    board.splice(y, 1);
    board.unshift(Array(board[0].length).fill(0));
    linesCleared++;
  }

  return linesCleared;
}

function calculateScore(linesCleared) {
  const lineScores = [0, 100, 300, 500, 800];
  return lineScores[linesCleared];
}
