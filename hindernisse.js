let hinder1;

class Hinderniss {
  constructor(posX, posY, radius, speed) {
    this.x = posX;
    this.y = posY;
    this.r = radius;
    this.s = speed;
    this.richtung = false;
  }

  draw() {
    fill("BlueViolet");
    circle(this.x, this.y, this.r);
    circle(this.x + 10, this.y - 5, 5);
    circle(this.x - 10, this.y - 5, 5);
    line(this.x - 10, this.y + 10, this.x, this.y);
    line(this.x, this.y, this.x + 10, this.y + 10);
    triangle(
      this.x - 10,
      this.y - 20,
      this.x,
      this.y - 30,
      this.x + 10,
      this.y - 20
    );
  }

  move() {
    if (this.x == 450) {
      this.richtung = false;
    }
    if (this.x == 370) {
      this.richtung = true;
    }
    if (!this.richtung) {
      this.x--;
    }
    if (this.richtung) {
      this.x++;
    }
  }
}
