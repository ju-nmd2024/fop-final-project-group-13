// game logic variables
class Tile {
  constructor(posX, posY, size, surface) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
  }
  draw() {
    image(tile, this.posX + x, this.posY + y, this.size, this.size);
  }
}

let y = 0;
let x = 0;
let a = x;
let b = y;
let angle = 0; //Map rotation angle
let ambulance;
let gameMap;
let Road_Jump;
let speed = 1;
let tileArray = [
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
  [new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile()],
]; // A nested array that holds the tiles

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); //set the angle mode to degrees.
  imageMode(CENTER); //Images drawn with their center as the origin
  frameRate(60);
  ambulance = loadImage("Ambulance.png");
  gameMap = loadImage("TestTrack.png");
  tile = loadImage("Road_Jump.png");
  grid();
}

// function that resets keypressed
function keyReleased(){

key = null;

}

// function that moves the map when pressing WASD.
function movemap() {
  switch (key) {
    case "w":
      y += cos(angle) * speed; //moves the map forward along its rotated axis
      x += sin(angle) * speed;

      break;

    case "s":
      y -= cos(angle) * speed; //moves the map backwards
      x -= sin(angle) * speed;

      break;
  }
}

function rotateMap(){
  switch (key) {
  case "a":
    angle += 1; //rotate the map left
    break;

  case "d":
    angle -= 1; //rotate the map right
    break;

  }

}

// function that draws the map
function map() {
  push();
  scale(0.1);
  rotate(angle);
  image(gameMap, x, y);
  // translate(gameMap, 1000, 1000);
  pop();
}

// function that draws the ambulance
class Amb {
  constructor() {}
  draw() {
    push();
    scale(1);
    image(ambulance, a + 500, b + 500);
    pop();
  }
}

// Grid system
function grid() {
  for (let i = 0; i < 8; i++) {
    for (let o = 0; o < 8; o++) {
      tileArray[i][o] = new Tile(i * 150, o * 150, 150, "Road_Jump.png");
    }
  }
}

let amb = new Amb();

function draw() {
  //map();
  background(200);
  movemap();
  rotateMap();
  push();
  translate(a + 500, b + 500); // change to -100, -100 later
  rotate(angle, [width / 2, height / 2, 0]);
  for (let i = 0; i < 8; i++) {
    for (let o = 0; o < 8; o++) {
      tileArray[i][o].draw();
    }
  }
  pop();
  amb.draw();
 
}
