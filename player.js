//test
//test2
//test3
let zeit = 0;

class Player {
  constructor() {
    this.jumpOffset = 0;
    this.x = 250;
    this.y = 300 - this.jumpOffset;
    this.b = 50; //breite
    this.h = 50; //höhe
    this.colO = false;
    this.colU = false;
    this.colL = false;
    this.colR = false;
    this.colC = false;
    this.score = 0;
    this.colH = false;
  }

  einsammeln() {
    if (level == 1) {
      for (let i = 0; i < level1C.length; i++) {
        let c = level1C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
    if (level == 2) {
      for (let i = 0; i < level2C.length; i++) {
        let c = level2C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
    if (level == 3) {
      for (let i = 0; i < level3C.length; i++) {
        let c = level3C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
    if (level == 4) {
      for (let i = 0; i < level4C.length; i++) {
        let c = level4C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
    if (level == 6) {
      for (let i = 0; i < level6C.length; i++) {
        let c = level6C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
    if (level == 5) {
      if (
        this.x < coinB.x + coinB.r * 0.5 &&
        this.x + this.b > coinB.x - coinB.r * 0.5 &&
        this.y < coinB.y + coinB.r * 0.5 &&
        this.y + this.h > coinB.y - coinB.r * 0.5
      ) {
        if (!coinB.e) {
          coinB.e = true;
          this.y += 50;
          this.h -= 50;
          farbe = "DarkOliveGreen";
          farbeC = "DarkGoldenRod";
          farbeL = "DarkSlateGrey";
        }
      }
      for (let i = 0; i < level5C.length; i++) {
        let c = level5C[i];
        if (
          this.x < c.x + c.r * 0.5 &&
          this.x + this.b > c.x - c.r * 0.5 &&
          this.y < c.y + c.r * 0.5 &&
          this.y + this.h > c.y - c.r * 0.5
        ) {
          if (!c.e) {
            this.score++;
            c.e = true;
          }
        }
      }
    }
  }

  pruefe() {
    this.colO = false;
    this.colU = false;
    this.colL = false;
    this.colR = false;
    for (let i = 0; i < wand.length; i++) {
      let w = wand[i];
      if (
        this.x < w.x + w.b &&
        this.x + this.b > w.x &&
        this.y == w.y + w.h &&
        this.y + this.h > w.y
      ) {
        if (w.cl == false) {
          this.colO = true;
        }
      }
      if (
        this.x < w.x + w.b &&
        this.x + this.b > w.x &&
        this.y < w.y + w.h &&
        this.y + this.h == w.y + 1
      ) {
        if (!w.cl) {
          this.colU = true;
          zeit = 0;
        }
      }
      if (
        this.x == w.x + w.b &&
        this.x + this.b > w.x &&
        this.y < w.y + w.h &&
        this.y + this.h > w.y
      ) {
        if (w.cl == false) {
          this.colL = true;
        }
      }
      if (
        this.x < w.x + w.b &&
        this.x + this.b == w.x &&
        this.y < w.y + w.h &&
        this.y + this.h > w.y
      ) {
        if (w.cl == false) {
          this.colR = true;
        }
      }
    }
    if (level == 4) {
      if (
        this.x < wand1.x + wand1.b &&
        this.x + this.b > wand1.x &&
        this.y == wand1.y + wand1.h &&
        this.y + this.h > wand1.y
      ) {
        if (wand1.cl == false) {
          this.colO = true;
        }
      }
      if (
        this.x < wand1.x + wand1.b &&
        this.x + this.b > wand1.x &&
        this.y < wand1.y + wand1.h &&
        this.y + this.h == wand1.y + 1
      ) {
        if (!wand1.cl) {
          this.colU = true;
          zeit = 0;
        }
      }
      if (
        this.x == wand1.x + wand1.b &&
        this.x + this.b > wand1.x &&
        this.y < wand1.y + wand1.h &&
        this.y + this.h > wand1.y
      ) {
        if (wand1.cl == false) {
          this.colL = true;
        }
      }
      if (
        this.x < wand1.x + wand1.b &&
        this.x + this.b == wand1.x &&
        this.y < wand1.y + wand1.h &&
        this.y + this.h > wand1.y
      ) {
        if (wand1.cl == false) {
          this.colR = true;
        }
      }
    }
  }

  draw() {
    fill("red");
    rect(this.x, this.y, this.b, this.h);
  }

  move() {
    if (level != 6) {
      if (this.colL == false) {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= 1;
        } else {
          if (level == 3) {
            this.x--;
          }
        }
      }
      if (this.colR == false) {
        if (keyIsDown(RIGHT_ARROW)) {
          if (level == 3) {
            this.x += 1;
          }
          this.x += 1;
        }
      }
    } else {
      if (this.score != 24) {
        if (mouseIsPressed) {
          this.x = mouseX;
          this.y = mouseY;
        }
      }
    }
  }

  climb() {
    if (level != 6) {
      for (let i = 0; i < wand.length; i++) {
        let w = wand[i];
        if (
          this.x < w.x + w.b &&
          this.x + this.b > w.x &&
          this.y < w.y + w.h &&
          this.y + this.h > w.y
        ) {
          if (w.cl == true) {
            this.colC = true;
            zeit = 70;
          }
        }
      }
      if (this.colC || zeit < 70) {
        if (!this.colO) {
          if (keyIsDown(UP_ARROW)) {
            this.y -= 2;
            zeit++;
          } else {
            zeit = 70;
          }
        } else {
          zeit = 70;
        }
      }
      this.colC = false;
    }
  }

  fall() {
    if (!this.colU) {
      this.y++;
    }
  }

  verloren() {
    if (
      this.x < 0 ||
      this.y < 0 ||
      this.x + this.b > 600 ||
      this.y + this.h > 600
    ) {
      gameOver = true;
      death++;
    }
  }

  sterbenL2() {
    if (level == 2) {
      for (let i = 0; i < level2H.length; i++) {
        let h = level2H[i];
        if (
          this.x < h.x + h.r * 0.5 &&
          this.x + this.b > h.x - h.r * 0.5 &&
          this.y < h.y + h.r * 0.5 &&
          this.y + this.h > h.y - h.r * 0.5
        ) {
          gameOver = true;
          death++;
        }
      }
    }
  }
}
