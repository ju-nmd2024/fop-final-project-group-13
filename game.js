// game logic variables

let y = 350;
let x = 350;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255,255,255);
  angleMode(DEGREES); // set the angle mode to degrees.
}

// switch cases that moves the map when pressing WASD.

function movemap(){

switch(key){

case "w":
y += -1;

break;

case "s":
y += +1;

break;

case "a":
  rotate(angle += 0.1);

  break;

case "d":
  rotate(angle += -0.1);

}

}

// temporary function that draws the map

function map(){
push();
fill (150, 150, 150);
noStroke();
rect (x, y, 500, 500);
pop();
}



function draw() {
  background(255,255,255);
  movemap();
  map();
}
