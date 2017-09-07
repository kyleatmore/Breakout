class MovingObject {
  constructor(options) {
    this.xPos = options["pos"][0];
    this.yPos = options["pos"][1];
    this.xVel = options["vel"][0];
    this.xVel = options["vel"][1];
    this.width = options["width"];
    this.height = options["height"];
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.drawImage(
      this.image, this.xPos, this.yPos, this.width, this.height
    );
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  clear() {
    this.ctx.clearRect(
      this.xPos, this.yPos, this.width, this.height
    );
  }
}

export default MovingObject;