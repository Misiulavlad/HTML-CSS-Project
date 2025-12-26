const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
let currentPlayer = "O";
let board = Array(9).fill(null);
let gameOver = false;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(board) {
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      status.textContent = "Победил: " + board[a];
      gameOver = true;

      cells[a].classList.add("win");
      cells[b].classList.add("win");
      cells[c].classList.add("win");

      return true;
    }
  }
  return false;
}

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "" && !gameOver) {
      cell.textContent = currentPlayer;
      board[i] = currentPlayer;

      if (checkWin(board)) {
      } else if (board.every((c) => c !== null)) {
        status.textContent = "Ничья!";
        gameOver = true;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  board = Array(9).fill(null);
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
  currentPlayer = "O";
  gameOver = false;
  status.textContent = "";
});
