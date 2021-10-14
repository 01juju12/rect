let coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8;
let farbeC = "Gold";
class Coin {
  constructor(posX, posY, radius, letzter) {
    this.x = posX;
    this.y = posY;
    this.r = radius;
    this.e = false; //eingesammelt
  }

  draw() {
    if (!this.e) {
      fill(farbeC);
      circle(this.x, this.y, this.r);
    }
  }

  draw1() {
    if (!this.e) {
      fill("LemonChiffon");
      circle(this.x, this.y, this.r);
    }
  }
}
