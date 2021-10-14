let wand = [];
let wand4;
let level1C = [];
let level2C = [];
let level3C = [];
let level4C = [];
let level5C = [];
let level2H = [];

function ladeW() {
  wand = [
    new Wall(150, 350, 30, 50, false),
    new Wall(30, 400, 450, 20, false),
    new Wall(30, 130, 100, 120, true),
    new Wall(130, 200, 370, 20, false),
    new Wall(300, 150, 30, 50, false),
    new Wall(300, 0, 30, 75, false),
  ];
}

function ladeLevel1C() {
  coin1 = new Coin(100, 100, 40, false);
  append(level1C, coin1);
  coin2 = new Coin(200, 100, 40, false);
  append(level1C, coin2);
  coin3 = new Coin(300, 100, 40, false);
  append(level1C, coin3);
  coin4 = new Coin(400, 100, 40, false);
  append(level1C, coin4);
}

function ladeLevel2C() {
  coin5 = new Coin(100, 100, 40, false);
  append(level2C, coin5);
  coin6 = new Coin(430, 100, 40, false);
  append(level2C, coin6);
  coin7 = new Coin(300, 100, 40, false);
  append(level2C, coin7);
  coin8 = new Coin(70, 350, 40, false);
  append(level2C, coin8);
}

function ladeLevel3C() {
  level3C = [
    new Coin(100, 100, 40, false),
    new Coin(430, 100, 40, false),
    new Coin(400, 350, 40, false),
    new Coin(70, 350, 40, false),
  ];
}

function ladeLevel4C() {
  level4C = [
    new Coin(100, 100, 40, false),
    new Coin(430, 100, 40, false),
    new Coin(400, 350, 40, false),
    new Coin(70, 350, 40, false),
  ];
}

function ladeLevel5C() {
  level5C = [
    new Coin(100, 100, 40, false),
    new Coin(430, 100, 40, false),
    new Coin(400, 140, 40, false),
    new Coin(70, 350, 40, false),
  ];
}

function ladeLevel2H() {
  hinder1 = new Hinderniss(450, 170, 40, 5);
  append(level2H, hinder1);
}
