// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
     // Get the width of the game field
  const gameWidth = document.getElementById("game").offsetWidth;

  // Calculate the right edge position of the dodger
  const dodgerRightEdge = left + dodger.offsetWidth;

  // Check if the dodger has not reached the right edge of the game field
  if (dodgerRightEdge < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }}
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });