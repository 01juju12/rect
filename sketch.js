let player1;
let gameOver = false;
let level = 1;
let death = 0;
let farbe = "Olive"

function setup() {
  createCanvas(600, 600);
  frameRate();
  player1 = new Player();
  coinB = new Coin(430, 240, 40);
  ladeW();
  ladeLevel1C();
  ladeLevel2C();
  ladeLevel3C();
  ladeLevel4C();
  ladeLevel5C();
  ladeLevel2H();
  wand1 = new Wall(300, 150, 30, 250, false);
}

function draw() {
  if (gameOver) {
    fill("red");
    rect(0, 0, 600, 600);
    textSize(55);
    fill("black");
    textStyle(BOLDITALIC);
    text("Du hast verloren", 100, 300);
    if (keyIsDown(32)) {
      gameOver = false;
      player1.y = 300;
      player1.x = 250;
      if (level == 1) {
        for (j = 0; j < level1C.length; j++) {
          if (level1C[j].e) {
            player1.score--;
            level1C[j].e = false;
          }
        }
      }
      if (level == 2) {
        for (j = 0; j < level2C.length; j++) {
          if (level2C[j].e) {
            player1.score--;
            level2C[j].e = false;
          }
        }
      }
      if (level == 4) {
        for (j = 0; j < level4C.length; j++) {
          if (level4C[j].e) {
            player1.score--;
            level4C[j].e = false;
          }
        }
      }
      if (level == 3) {
        for (j = 0; j < level3C.length; j++) {
          if (level3C[j].e) {
            player1.score--;
            level3C[j].e = false;
          }
        }
      }
      if (level == 5) {
        for (j = 0; j < level5C.length; j++) {
          if (level5C[j].e) {
            player1.score--;
            level5C[j].e = false;
          }
        }
      }
    } else {
      return;
    }
  }

  background(farbe);

  for (j = 0; j < wand.length; j++) {
    wand[j].draw();
  }

  if (level == 4) {
    wand1.draw();
  }

  if (level == 1) {
    for (j = 0; j < level1C.length; j++) {
      level1C[j].draw();
    }
  }

  if (level == 2) {
    for (j = 0; j < level2C.length; j++) {
      level2C[j].draw();
    }
    for (let j = 0; j < level2H.length; j++) {
      level2H[j].draw();
    }
    hinder1.move();
  }

  if (level == 3) {
    for (j = 0; j < level3C.length; j++) {
      level3C[j].draw();
    }
  }

  if (level == 4) {
    for (j = 0; j < level4C.length; j++) {
      level4C[j].draw();
    }
  }

  if (level == 5) {
    for (j = 0; j < level5C.length; j++) {
      level5C[j].draw();
    }
  }
  
  coinB.draw1();
  fill("black");
  triangle(400, 230, 430, 200, 460, 230);
  pruefe();
  player1.draw();
  player1.pruefe();
  player1.move();
  player1.climb();
  player1.einsammeln();
  player1.fall();
  textSize(25);
  fill("black");
  text("Score: " + player1.score + "", 50, 50);
  text("Level: " + level + "", 500, 50);
  text("Tode: " + death + "", 50, 550);
  player1.sterbenL2();
  player1.verloren();
  if (player1.score == 20){
    fill("LightBlue");
    rect(0, 0, 600, 600);
    textSize(55);
    fill("black");
    textStyle(BOLDITALIC);
    text("Du hast gewonnen (:", 30, 300);
    textStyle(ITALIC);
    textSize(35);
    text("und bist nur "+death+" mal gestorben ", 70, 380);
    
  }
}

function pruefe() {
  if (player1.score >= 4 && player1.score < 8) {
    let compleet = true;
    for (j = 0; j < level1C.length; j++) {
      if (!level1C[j].e) {
        compleet = false;
      }
    }
    if (compleet == true) {
      for (j = 0; j < level1C.length; j++) {
        level1C[j].e = false;
      }
      player1.y = 300;
      player1.x = 250;
      level = 2;
    }
  }

  if (player1.score >= 8 && player1.score < 12) {
    let compleet = true;
    for (j = 0; j < level2C.length; j++) {
      if (!level2C[j].e) {
        compleet = false;
      }
    }
    if (compleet == true) {
      for (j = 0; j < level2C.length; j++) {
        level2C[j].e = false;
      }
      player1.y = 300;
      player1.x = 250;
      level = 3;
    }
  }

  if (player1.score >= 12 && player1.score < 16) {
    let compleet = true;
    for (j = 0; j < level3C.length; j++) {
      if (!level3C[j].e) {
        compleet = false;
      }
    }

    if (compleet == true) {
      for (j = 0; j < level3C.length; j++) {
        level3C[j].e = false;
      }
      player1.y = 300;
      player1.x = 250;
      level = 4;
    }
  }

  if (player1.score >= 16 && player1.score < 20) {
    let compleet = true;
    for (j = 0; j < level4C.length; j++) {
      if (!level4C[j].e) {
        compleet = false;
      }
    }

    if (compleet == true) {
      for (j = 0; j < level4C.length; j++) {
        level4C[j].e = false;
      }
      player1.y = 300;
      player1.x = 250;
      level = 5;
      player1.h += 50;
    }
  }
}
