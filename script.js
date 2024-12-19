// script.js
const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
const scoreDisplay = document.getElementById('score');

let ballX = 190; // Initial ball position (x-axis)
let ballY = 0;   // Initial ball position (y-axis)
let ballSpeedY = 3; // Ball speed (y-axis)
let paddleX = 150; // Initial paddle position
let score = 0;

// Move paddle based on arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= 20;
  } else if (e.key === 'ArrowRight' && paddleX < 300) {
    paddleX += 20;
  }
  paddle.style.left = `${paddleX}px`;
});

// Update game
function updateGame() {
  // Move the ball
  ballY += ballSpeedY;
  ball.style.top = `${ballY}px`;

  // Check if the ball hits the paddle
  if (ballY >= 570 && ballX >= paddleX && ballX <= paddleX + 100) {
    ballSpeedY *= -1; // Reverse ball direction
    score++;
    scoreDisplay.textContent = score;
  }

  // Reset ball position if it falls off
  if (ballY > 600) {
    ballY = 0;
    ballX = Math.random() * 380; // Randomize ball X position
    ball.style.left = `${ballX}px`;
    score = 0; // Reset score
    scoreDisplay.textContent = score;
  }

  // Reverse ball direction if it hits the top
  if (ballY <= 0) {
    ballSpeedY *= -1;
  }

  requestAnimationFrame(updateGame);
}

// Initialize game
function startGame() {
  paddle.style.left = `${paddleX}px`;
  ball.style.left = `${ballX}px`;
  updateGame();
}

startGame();
