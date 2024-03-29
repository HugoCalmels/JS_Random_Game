const SPEED = .015

export default class Paddle {
  constructor(paddleElement) {
    this.paddleElement = paddleElement
    this.reset()
  }

  get position() {
    return parseFloat(getComputedStyle(this.paddleElement).getPropertyValue('--position'))
  }

  set position(value) {
    this.paddleElement.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElement.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  // I notice --position is not set/called in the constructor
  update(delta, ballHeight) {
    this.position +=  SPEED * delta * (ballHeight - this.position)
  }
}