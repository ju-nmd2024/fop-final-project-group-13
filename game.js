//game logig variables


function setup() {
  createCanvas(800, 600);
}

//Ambulance
function ambulance(){
  fill (250, 250, 0);
  noStroke();
  rect (100, 100, 100, 200);
  //window
  fill(0);
  noStroke();
  rect (110, 110, 80, 50);

}

function map(){

}

function draw() {
  background(255, 140, 0);
  ambulance();
}
