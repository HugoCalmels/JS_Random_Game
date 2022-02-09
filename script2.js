let ball = document.querySelector('.ball')
let body = document.body.clientWidth
let board = document.querySelector('.game')
let ballSize = ball.clientWidth
let xpos = 0 
let ypos = 0 
let number = 100
let rightBoardBorder = board.clientWidth - ballSize
let topBoardBorder = board.clientHeight - ballSize

let angle = 45

console.log(topBoardBorder)

console.log(`rightBoardBorder is ${rightBoardBorder}`)
let ballStatusForX = document.querySelector('.x-pos')
let ballStatusForY = document.querySelector('.y-pos')



function move() {


  console.log(`x:${xpos}`)
  console.log(`y:${ypos}`)

  ball.style.transform = `translate(${xpos}px, ${ypos}px)`;
  if (xpos < rightBoardBorder) {
 
    requestAnimationFrame(move)

    xpos += 5
    ballStatusForX.innerHTML = `x : ${xpos}`;
  }
  if (ypos < topBoardBorder) {
    requestAnimationFrame(move)
    ypos += 5
    ballStatusForY.innerHTML = `y : ${ypos}`
  }
}



window.requestAnimationFrame(move) 



