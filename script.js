/*import Ball from './Ball.js'

const ball = new Ball(document.querySelector('.ball'))
*/
let lastTime
function update(time) { // making an infinite loop
  if (lastTime != null) {
    const delta = time - lastTime
    // update code
    console.log(delta)
  }
  lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)



let humanPlayer = document.querySelector('.human-player')
let gameBoard = document.querySelector('.game')

/*
console.log(gameBoard.clientWidth)
console.log(gameBoard.clientHeight)
console.log(window.innerHeight)
*/

let informationsDiv = document.querySelector('.game-status')
let gameStatus = 'none'
let ballStatus = false

// setting conditions to play or pause game, if there is a click inside the game board.
gameBoard.addEventListener('click', function () {
  if (gameStatus === 'none') {
    console.log('none')
    gameStatus = 'ongoing'
    informationsDiv.style.opacity = 0;
  } else if (gameStatus === 'pause') {
    console.log('pause')
    gameStatus = 'ongoing'
    informationsDiv.style.opacity = 0;
  } else if ((gameStatus === 'ongoing')) {
    console.log('ongoing')
    gameStatus = 'pause'
    informationsDiv.innerHTML = 'Pause';
    informationsDiv.style.opacity = 1;
  }
})

let percentageAdjustmentX = ''
let percentageAdjustmentY = ''

window.addEventListener('mousemove', function (event) {
  // just to display X & Y values on the page
  document.getElementById('x-value').textContent = `x : ${event.x}`;
  document.getElementById('y-value').textContent = `y : ${event.y}`;

  // calculating the percentage to move ( from Y axe )
  percentageAdjustmentX = Math.floor((( event.y / gameBoard.clientHeight) *100)-33)
  document.getElementById('px-value').textContent = `p-x : ${percentageAdjustmentX}%`;

  percentageAdjustmentY = Math.floor((( event.x / gameBoard.clientWidth) *100)-12)
  document.getElementById('py-value').textContent = `p-y : ${percentageAdjustmentY}%`;

  // moving humanplayer block
  if (percentageAdjustmentX >= 83) { // we listen the window, we play on the board
    humanPlayer.setAttribute('style', `top:${83.50}%`)
  } else if (percentageAdjustmentX <= 0) {
    humanPlayer.setAttribute('style', `top:${0}%`)
  } else {
    humanPlayer.setAttribute('style', `top:${percentageAdjustmentX}%`)
  }

  let ball = document.querySelector('.ball')
  var position = ball.getBoundingClientRect();
  //console.log(Math.floor(position.left))
  //console.log(Math.floor(position.top))

  let widthOnX = ((window.innerWidth / 2) - gameBoard.clientWidth)
  
  //console.log(window.innerWidth)
  //console.log(gameBoard.clientWidth)

  let ballPercentageOnY = Math.floor(((position.top / gameBoard.clientHeight) * 100) - 33)
  let ballPercentageOnX = Math.floor(((  position.left  / gameBoard.clientWidth) *100)-12)

  

  if (gameStatus === 'ongoing') {

    if (ballStatus === false) {
      document.getElementById('ball-x').textContent = `p-x : ${ballPercentageOnX}%`;
      //document.getElementById('ball-y').textContent = `p-y : ${ballPercentageOnY}%`;
      let randomNumberX = Math.floor(Math.random() * 101);
      //let randomNumberY = Math.floor(Math.random() * 101);
      let randomAngle = Math.floor(Math.random() * 91);

      let smallPerc = 2.5

    

      //ball.setAttribute('style', `top:${randomNumberY}%`)
  
      /*
      Object.assign(ball.style, {

        top: '250px',
        left: '750px',

      });
*/

      ballStatus = true
    }
    }
    

})


// try to make the ball move
