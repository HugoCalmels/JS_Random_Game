import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.querySelector('#ball'))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball.y) // this.y
    // change the hue ( la teinte )
    const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) {
      handleLose()
    }
  }
  // console.log(time)
  lastTime = time
  window.requestAnimationFrame(update)
}
console.log(Math.PI)

// fn isLose
function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
  // will return and call the console.log, if one of the conditions is applied 
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) +1
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) +1
  }
  ball.reset()
  computerPaddle.reset()
}

// paddle part 
document.addEventListener('mousemove', e => {
  playerPaddle.position = (e.y / window.innerHeight ) * 100
})

// execute program command
window.requestAnimationFrame(update)