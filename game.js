// game logic variables

let y = 0;
let x = 0;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  rectMode(CENTER); // set the angle mode to degrees.
  frameRate(60);
}

// switch cases that moves the map when pressing WASD.

function movemap(){

switch(key){

case "w":
y -= cos(angle) * cos(angle);

break;

case "s":
  y += cos(angle) * cos(angle);

break;

case "a":
  angle -= 1;

break;

case "d":
  angle += 1;

  break;

}

}

// function that draws the placeholder map

function map(){
push();
translate(width /2, height /2); // set origin point to center
rotate(angle);
fill (150, 150, 150);
noStroke();
rect (x, y, 500, 500);
pop();
}

// function that draws the placeholder ambulance

function tempAmb(){
push();
fill(0);
rect(350, 350, 10, 20);
pop();
}


function draw() {
  background(255,255,255);
  map();
  movemap();
}
