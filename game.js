//game logig variables


function setup() {
  createCanvas(2000, 2000);
}


function map(){
fill (150, 150, 150);
noStroke();
rect (0, 0, 1000, 1000);
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

function draw() {
  map();
  ambulance();
 
}
