// game logic variables
class Modifier {
  constructor(posX, posY, size, surface, attributes) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.pickedUp = false;
  }
  draw() {

    if(!this.pickedUp)

    image(this.surface, this.posX + x, this.posY + y, this.size, this.size);
  }
}

class Tile {
  constructor(posX, posY, size, surface, attributes) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.attributes = attributes;
  }
  draw() {
    image(this.surface, this.posX + x, this.posY + y, this.size, this.size);
  }
}

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

// Function to place the tiles
function level(lvl) {
  switch (lvl) {
    case 1: // Get to the accident
      tileArray[1][1].surface = tileAsphalt;
      tileArray[1][2].surface = tileAsphalt;
      break;

    case 2: // Get to the hospital
      tileArray[1][2].surface = tileAsphalt;
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
  tileDefault = loadImage("Grass_PH.png");
  tileAsphalt = loadImage("Road_Straight.png");
  tileAsphaltJ = loadImage("Road_Jump.png");
  tileAsphaltR = loadImage("Road_Turn_Right.png");
  tileAsphaltL = loadImage("Road_Turn_Left.png");

  grid();
  level(1);
}

// function that moves the map when pressing ARROW KEYS.

function movemap() {
  if (keyIsDown(UP_ARROW)) {
    if (speedCheck){
      
      time = 0;
      speedCheck = false;
    }
    time += deltaTime;
    speed = Math.min(maxSpeed, time * acc);

  }
  else
  if (keyIsDown(DOWN_ARROW)) {
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
        tileDefault
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
}
