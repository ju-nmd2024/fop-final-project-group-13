// game logic variables

let y = 0;
let x = 0;
let angle = 0;
let ambulance;
let gameMap;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); // set the angle mode to degrees.
  imageMode(CENTER); 
  frameRate(60);
  ambulance = loadImage('Ambulance.png');
  gameMap = loadImage('TestTrack.png');
}

// switch cases that moves the map when pressing WASD.

function movemap(){

switch(key){

case "w":
y += cos(angle);
x += sin(angle);

break;

case "s":
  y -= cos(angle);
  x -= sin(angle);

break;

case "a":
  angle += 1;

break;

case "d":
  angle -= 1;

  break;

}

}

// function that draws the map

function map(){
push();
rotate(angle);
image(gameMap, x,y);
pop();
}

// function that draws the ambulance

function Amb(){
push();
scale(0.5);
image(ambulance, 1000, 1000);
pop();
}


function draw() {
  map();
  movemap();
  Amb();
}
