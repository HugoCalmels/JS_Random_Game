const INITIAL_VELOCITY = .025
const VELOCITY_INCREASE = .000001

export default class Ball {
  constructor(ballElement) {
    this.ballElement = ballElement;
    this.reset() // when we create a ball we make sure we call reset
  }

  // 
  get x() {
    return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--x'))
  }

  set x(value) {
    this.ballElement.style.setProperty("--x", value)
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--y'))
  }

  set y(value) {
    this.ballElement.style.setProperty("--y", value)
  }

  rect() {
    return this.ballElement.getBoundingClientRect()
  }

  reset() {
    this.x = 50
    this.y = 50
    this.direction = { x: 0}
   
    while (Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
      console.log("test")
      const heading = randomNumberBetween(0, 2 * Math.PI)
      // Math cos return a numeric value between -1 & 1, representing the value of the angle by his cosinus
       this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
    }
    console.log(this.direction)
    this.velocity = INITIAL_VELOCITY
  }

  // fn looped over, each delta, called from index3.js
  update(delta, paddleRects) {
    // checking current X value
    //console.log(this.x)

    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta
    const rect = this.rect()
    //console.log(Math.PI)

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      // just flipping the direction when the balls goes out of the window.innerHeight
      this.direction.y *= -1
    }

    if (paddleRects.some(r => isCollision(r, rect))) {
      // just flipping the direction when the balls goes out of the window.innerHeight
      this.direction.x *= -1
    }



  }

}

function randomNumberBetween(min, max) {
  console.log(min)
  console.log(max)
  console.log(Math.random())
  console.log("hi")
  return Math.random() * (max - min) + min
}

function isCollision(rect1, rect2) {
  return (rect1.left <= rect2.right && rect1.right >= rect2.left && rect1.top <= rect2.bottom && rect1.bottom >= rect2.top)
}

