class Modifier {
  constructor(posX, posY, size, surface) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.pickedUp = false;
  }
  draw() {
    if (!this.pickedUp) {
      image(this.surface, this.posX + x, this.posY + y, this.size, this.size);
    }
  }
}

class Tile {
  constructor(posX, posY, size, surface, attr) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.attr = attr;
  }
  draw() {
    image(this.surface, this.posX + x, this.posY + y, this.size, this.size);
   checkPos(this.posX + x, this.posY + y, this.surface);
  }
}
// game logic variables
let y = 0;
let x = 0;
let a = x;
let b = y;
let angle = 0;
let ambulance;
let ambulanceSize = 300;
let gameMap;
let time = 0;
let speed = 0;
let maxSpeed = 10;
let speedCheck = false;
let speedStore = 0;
let acc = 0.003;
let tileRotate = 0;
let tileSize = 320;
let tileArray = [
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
  [
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
    new Tile(),
  ],
]; // A nested array that holds the tiles

function checkPos(posX, posY, surface)
 {
  if (
    a + 500 >= posX &&
    a + 500 < posX + tileSize &&
    b + 500 >= posY &&
    b + 500 < posY + tileSize
  ) {
    if (surface == tileDirt) {
      maxSpeed = 5;
      acc = 0.01;
    } else if (surface == tileIceRoad) {
      maxSpeed = 5;
      acc = 0.001;
    } else if (surface == tileAsphalt) {
      maxSpeed = 10;
      acc = 0.003;
    } else if (surface == tileAsphaltJ) {
      ambulanceSize = 350;
    } else {
      maxSpeed = 4;
      acc = 0.001;
      }
  }
}

// Function to place the tiles
function level(lvl) {
  switch (lvl) {
    case 1: // Get to the accident
      tileArray[3][10].surface = tileAsphalt;
      tileArray[3][9].surface = tileAsphalt;
      tileArray[3][8].surface = tileAsphalt;
      tileArray[3][7].surface = tileAsphaltJ;
      tileArray[3][6].surface = tileAsphalt;
      tileArray[3][5].surface = tileAsphaltR;
      tileArray[4][5].surface = tileDirtR;
      tileArray[5][5].surface = tileDirtR;
      tileArray[6][5].surface = tileDirtR;
      tileArray[7][5].surface = tileAsphaltR90;
      tileArray[7][6].surface = tileAsphalt180;
      tileArray[7][7].surface = tileAsphalt180;
      tileArray[7][8].surface = tileDirt;
      tileArray[7][9].surface = tileDirt;
      tileArray[7][10].surface = tileDirt;
      tileArray[7][11].surface = tileIceRoad;
      tileArray[7][12].surface = tileIceRoad;
      tileArray[8][12].surface = tileIceRoad;
      tileArray[9][12].surface = tileIceRoad;
      tileArray[9][11].surface = tileIceRoad;
      tileArray[9][10].surface = tileAsphaltR;
      tileArray[10][10].surface = tileAsphalt90;
      tileArray[11][10].surface = tileAsphaltL270;
      tileArray[11][9].surface = tileAsphalt;
      tileArray[11][8].surface = tileAsphaltL;
      tileArray[10][8].surface = tileAsphalt90;
      tileArray[9][8].surface = tileAsphaltR270;
      tileArray[9][7].surface = tileAsphalt;
      tileArray[9][6].surface = tileAsphalt;
      tileArray[9][5].surface = tileAsphalt;

      break;
  }
}

function hud() {
  textSize(32);
  text(`Speed: ${speed.toFixed(1)}`, 50, 50); // Speedometer ChatGPT
}

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); //set the angle mode to degrees.
  imageMode(CENTER); //Images drawn with their center as the origin
  frameRate(60);

  ambulance = loadImage("Ambulance.png");
  tileDefault = loadImage("Grass.png");
  tileAsphalt = loadImage("Road_Straight.png");
  tileAsphaltJ = loadImage("Road_Jump.png");
  tileAsphaltR = loadImage("Road_Turn_Right.png");
  tileAsphaltL = loadImage("Road_Turn_Left.png");
  tileAsphaltR90 = loadImage("Road_Turn_Right90.png");
  tileDirt = loadImage("Dirt.png");
  tileDirtR = loadImage("DirtR.png");
  wineBottle = loadImage("Wine_Bottle.png");
  tileAsphalt180 = loadImage("Road_Straight180.png");
  tileIceRoad = loadImage("Road_Ice.png");
  tileAsphaltR270 = loadImage("Road_Turn_Right270.png");
  tileAsphalt90 = loadImage("Road_Straight90.png");
  tileAsphaltL270 = loadImage("Road_Turn_270.png");

  modifier = new Modifier(5 * tileSize, 5 * tileSize, 50, wineBottle);

  grid();
  level(1);
}

// function that moves the map when pressing ARROW KEYS.
function movemap() {
  if (keyIsDown(UP_ARROW)) {
    if (speedCheck) {
      time = 0;
      speedCheck = false;
    }
    time += deltaTime;
    speed = Math.min(maxSpeed, time * acc);
  } else if (keyIsDown(DOWN_ARROW)) {
    speed = Math.min(maxSpeed, time * -acc);
  } else {
    speedCheck = false;
    speed = Math.max(0, speed - acc * deltaTime);
  }

  y += cos(angle) * speed;
  x += sin(angle) * speed;
}

function rotateMap() {
  if (keyIsDown(LEFT_ARROW) == true) {
    angle += 1;
  }
  if (keyIsDown(RIGHT_ARROW) == true) {
    angle -= 1;
  }
}

// function that draws the ambulance
class Amb {
  constructor() {}
  draw() {
    push();
    scale(1);
    image(ambulance, a + 500, b + 500, ambulanceSize, ambulanceSize);
    pop();
  }
}

// Grid system
function grid() {
  for (let i = 0; i < 16; i++) {
    for (let o = 0; o < 16; o++) {
      tileArray[i][o] = new Tile(
        i * tileSize,
        o * tileSize,
        tileSize,
        tileDefault,
        tileRotate
      );
    }
  }
}

let amb = new Amb();

function draw() {
  background(200);
  hud();
  movemap();
  rotateMap();
  push();
  translate(a + 500, b + 500); // change to -100, -100 later
  rotate(angle, [width / 2, height / 2, 0]);
  for (let i = 0; i < 16; i++) {
    for (let o = 0; o < 16; o++) {
      tileArray[i][o].draw();
    }
  }
  pop();
  amb.draw();
  hud();
}
