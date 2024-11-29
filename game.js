// game logic variables

let y = 0;
let x = 0;
let angle = 0; //Map rotation angle
let ambulance;
let gameMap;
let speed = 5;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); //set the angle mode to degrees.
  imageMode(CENTER); //Images drawn with their center as the origin
  frameRate(60);
  ambulance = loadImage("Ambulance.png");
  gameMap = loadImage("TestTrack.png");
}

// switch cases that moves the map when pressing WASD.

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
  rotate(angle);
  image(gameMap, x, y);
  pop();
}

// function that draws the ambulance
class Amb {
  constractor() {}
  draw() {
    push();
    scale(0.5);
    image(ambulance, 1000, 1000);
    pop();
  }
}

let amb = new Amb();

function draw() {
  map();
  movemap();
  amb.draw();
}
