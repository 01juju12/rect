let farbeL = "gray";

class Wall {
  constructor(posX, posY, breite, hoehe, pcl) {
    this.x = posX;
    this.y = posY;
    this.b = breite;
    this.h = hoehe;
    this.cl = pcl;
  }

  draw() {
    if (this.cl == false) {
      fill("black");
    } else {
      fill(farbeL);
    }
    rect(this.x, this.y, this.b, this.h);
    if (this.cl) {
      for (let k = 0; k * 10 <= this.h * 10; k += 10) {
        fill("black");
        line(this.x + 10, this.y + k, this.x + this.b - 10, this.y + k);
      }
    }
  }
}
