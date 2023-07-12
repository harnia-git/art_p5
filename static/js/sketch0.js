let shapes = [];
let shapesNum = 100;

const palette = ["#0276D1", "#011E60", "#79BCC9", "#F6F5BE", "#269182"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for (let i = 0; i < shapesNum; i++) {
    shapes.push(new Shape());
  }
  noStroke();
  background(palette[0]);
}

function draw() {
  for (let i = 0; i < shapes.length; i++) {
    if (i < shapes.length / 3) {
      blendMode(BLEND);
    } else {
      blendMode(OVERLAY);
    }
    shapes[i].move();
    shapes[i].display();
  }
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.maxD = random(5, 100);
    this.d = 0;
    this.n = random(1000);
    this.nx = random(1000);
    this.ny = random(1000);
    this.c = color(random(palette));
    this.c.setAlpha(random(5, 30));
    this.rotSpeed = random(3, 10) * random([-1, 1]);
    this.shapeDelta = 360 / random([3, 6]);
  }

  move() {
    this.d = this.maxD * abs(sin(this.n * 1000));

    this.x = map(noise(this.n, this.nx), 0, 1, -width * 0.5, width * 1.5);
    this.y = map(noise(this.n, this.ny), 0, 1, -height * 0.5, height * 1.5);
    this.n += 0.005;
  }

  display() {
    fill(this.c);
    push();
    translate(this.x, this.y);
    rotate(frameCount * this.rotSpeed);
    beginShape();
    for (let i = 0; i < 360; i += this.shapeDelta) {
      let x = cos(i) * this.d;
      let y = sin(i) * this.d;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}
