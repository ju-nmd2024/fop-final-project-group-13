// game logic variables

let y = 0;
let x = 0;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); // set the angle mode to degrees.
  rectMode(CENTER); 
  frameRate(60);
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
translate(width /2, height /2);
fill(0);
rect(0, 0, 10, 20);
pop();
}


function draw() {
  background(255,255,255);
  map();
  movemap();
  tempAmb();
}
