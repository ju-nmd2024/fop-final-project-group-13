
// Class for game object Ambulance
class Amb {
  constructor(ambulance, crashedAmbulance) {
    this.ambulance = ambulance;
    this.crashedAmbulance = crashedAmbulance;
  }
  draw() {
    push();
    scale(1);
    image(ambulance, a + 500, b + 500, ambulanceSize, ambulanceSize);
    pop();
  }
}

// Class for the tiles
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
    if (checkPos(this.posX + x, this.posY + y, this.surface)) {
      if (this.surface == tileDirt || this.surface == tileDirtR) {
        maxSpeed = 5;
        acc = 0.35;

      } else if (this.surface === tileIceRoad) {
        maxSpeed = 10;
        acc = 0.8;

      } else if (this.surface === tileAsphalt || this.surface == tileAsphaltR || this.surface == tileAsphalt180 || this.surface == tileAsphaltL || this.surface == tileAsphaltL270 || this.surface == tileAsphaltR270 || this.surface == tileAsphaltR90 || this.surface == tilePark || this.surface == tilePark90 || this.surface == tileParkBlank) {
        maxSpeed = 10;
        acc = 0.003;

      } else if (this.surface === theRock){
        maxSpeed = -10;
        acc = -2;


      } else if (this.surface === tileAsphaltJ) {
      } else if (this.surface === tileAccident) {
        state = "win";
        maxSpeed = 10;
        acc = 0.0005;

      } else if (this.surface === tileDefault){
        maxSpeed = 1;
        acc = 0.0005;
      }
    }
  }
}

// For loop Tile array, 16x16 tiles, creates the map
// //The following 8 lines of code was adapted with the help of Mathias Golebiak
let tileArray = [];
for(let q = 0; q < 16; q++ ){ 
  let row = []; //Work per row
  for(let w = 0; w < 16; w++){
    row.push(new Tile()); //Builds array dynamically by adding elemnts one at a time
  }
  tileArray.push(row); //Ads the completed row to the tile array
}

// Function for tile detection
function checkPos(posX, posY) {
  if (
    a + 500 > posX + tileSize &&
    a + 500 < posX + tileSize * 2 &&
    b + 500 > posY + tileSize &&
    b + 500 < posY + tileSize * 2
  ) 
{ return true; }
}

// Function to place the tiles of the map
function level(lvl) {
  switch (lvl) {
    case 1: // Get to the accident
      tileArray[0][0].surface = tilePark;
      tileArray[0][1].surface = tileParkBlank;
      tileArray[0][2].surface = tilePark90;
      tileArray[1][0].surface = tilePark;
      tileArray[1][1].surface = tileParkBlank;
      tileArray[1][2].surface = tilePark90;
      tileArray[2][0].surface = tilePark;
      tileArray[2][1].surface = tileParkBlank;
      tileArray[2][2].surface = tilePark90;
      tileArray[3][0].surface = tilePark;
      tileArray[3][1].surface = tileParkBlank;
      tileArray[3][2].surface = tilePark90;
      tileArray[4][1].surface = tileAsphalt90;
      tileArray[5][1].surface = tileAsphalt90;
      tileArray[6][1].surface = tileAsphaltR90;
      tileArray[6][2].surface = tileAsphalt;
      tileArray[6][3].surface = tileAsphalt;
      tileArray[6][4].surface = tileAsphaltR180;
      tileArray[5][4].surface = tileAsphalt90;
      tileArray[4][4].surface = tileIceRoad;
      tileArray[3][4].surface = tileIceRoad;
      tileArray[2][4].surface = tileIceRoad;
      tileArray[1][4].surface = tileIceRoad;
      tileArray[1][5].surface = tileIceRoad;
      tileArray[1][6].surface = tileIceRoad;
      tileArray[1][7].surface = tileAsphalt180;
      tileArray[1][8].surface = tileAsphalt180;
      tileArray[1][9].surface = tileAsphalt180;
      tileArray[2][10].surface = tileCrossroad;
      tileArray[3][10].surface = tileParkBlank;
      tileArray[1][10].surface = tileAsphaltTurn;
      tileArray[14][6].surface = tileAsphalt;
      tileArray[14][5].surface = theRock;
      tileArray[14][4].surface = tileAsphalt;
      tileArray[14][3].surface = tileAsphaltL;
      tileArray[13][3].surface = tileAsphalt90;
      tileArray[12][3].surface = tileAsphalt90;
      tileArray[11][3].surface = tileAsphalt90;
      tileArray[10][3].surface = tileCrossroadL;
      tileArray[3][9].surface = tileAsphalt;
      tileArray[3][8].surface = theRock;
      tileArray[3][7].surface = tileAsphalt;
      tileArray[3][6].surface = tileAsphaltR;
      tileArray[4][6].surface = tileDirtR;
      tileArray[5][6].surface = tileDirtR;
      tileArray[6][6].surface = tileDirtR;
      tileArray[7][6].surface = tileAsphaltR90;
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
      tileArray[11][8].surface = tileCrossroadUpp;
      tileArray[11][7].surface = tileParkBlank;
      tileArray[10][7].surface = tileAsphalt90;
      tileArray[12][7].surface = tileAsphalt90;
      tileArray[13][7].surface = tileAsphalt90;
      tileArray[14][7].surface = tileAsphaltL270;
      tileArray[9][7].surface = tileRoadTurnL180;
      tileArray[9][6].surface = tileAsphalt;
      tileArray[9][5].surface = tileAsphalt;
      tileArray[9][4].surface = tileAccident;
      tileArray[9][3].surface = tileParkBlank;
      tileArray[9][2].surface = tileAsphalt;
      tileArray[9][1].surface = tileAsphalt;
      tileArray[9][0].surface = tileAsphalt;
      tileArray[3][11].surface = tileAsphalt;
      tileArray[3][12].surface = tileAsphalt;
      tileArray[3][13].surface = tileAsphalt;
      tileArray[3][14].surface = tileAsphalt;
      tileArray[3][15].surface = tileAsphalt;
      break;
  }
}

// Function that draws the heads up display
function hud() {
  push();
  noStroke();
  fill(255, 255, 255, 95);
  rect(45, 20, 200, 70, 5);
  pop();
  textFont("MS Gothic");
  textSize(32);
  text(`Speed: ${speed.toFixed(2)}`, 50, 50); // Speedometer ChatGPT
  text("Time:", 50, 86);
  text(timer, 161, 85);

  let currentSecond = Math.floor(millis() / 1000); // Timer ChatGPT

  if (currentSecond > lastSecond) {
    if (timer > 0) {
      timer--;
    }
    lastSecond = currentSecond;
  }
  if (timer == 0) {
    state = "late";
    late();
  }
}

// Game logic variables
// They are put here because "Amb" can not be declared in class before use
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
let timer = 120;
let tileRotate = 0;
let tileSize = 320;
let state = "mainmenu";
let lastSecond = 0;
let amb = new Amb();


function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); //set the angle mode to degrees.
  imageMode(CENTER); //Images drawn with their center as the origin
  frameRate(60);

  //loads the images
  ambulance = loadImage("Ambulance.png");
  broken3Abmulance = loadImage("Broken_ambulance.png");
  tileDefault = loadImage("Grass.png");
  tileAsphalt = loadImage("Road_Straight.png");
  tileAsphaltJ = loadImage("Road_Jump.png");
  tileAsphaltR = loadImage("Road_Turn_Right.png");
  tileAsphaltL = loadImage("Road_Turn_Left.png");
  tileAsphaltR90 = loadImage("Road_Turn_Right90.png");
  tileRoadTurnL180 = loadImage("Road_Turn_L180.png");
  tileDirt = loadImage("Dirt.png");
  tileDirtR = loadImage("DirtR.png");
  wineBottle = loadImage("Wine_Bottle.png");
  tileAsphalt180 = loadImage("Road_Straight180.png");
  tileIceRoad = loadImage("Road_Ice.png");
  tileAsphaltR270 = loadImage("Road_Turn_Right270.png");
  tileAsphalt90 = loadImage("Road_Straight90.png");
  tileAsphaltL270 = loadImage("Road_Turn_270.png");
  tileAsphaltR180 = loadImage("Road_Turn_R180.png");
  tileAsphaltTurn = loadImage("Road_Turn_Left90.png");
  tileAccident = loadImage("Accident.png");
  tileCrossroad = loadImage("Cross_Road.png");
  tileCrossroadUpp = loadImage("Cross_RoadUppt.png");
  tileCrossroadL = loadImage("Cross_RoadL.png");
  tilePark = loadImage("Road_Park.png");
  tilePark90 = loadImage("Road_Park90.png");
  tileParkBlank = loadImage("Road_ParkBlank.png");
  menuBackground = loadImage("MenuBackground.jpg");
  menuStart = loadImage("StartButton.png");
  retryButton = loadImage("ReturnButton.png");
  emptyObject = loadImage("blank.png");
  theRock = loadImage("theRock.png");
  crashedAmbulance = loadImage("Broken_ambulance.png");
  grid();
  level(1);
}

// Functions that moves the map with arrow keys
function movemap() {
  const accRate = acc;
  const deRate = 0.005;
  const revRate = acc * 0.5;
  const maxRevSpeed = -3;

  if (keyIsDown(UP_ARROW)) {
    speed = constrain(speed + accRate * deltaTime, maxRevSpeed, maxSpeed);
    speedCheck = true;
    time += deltaTime;
  } else if (keyIsDown(DOWN_ARROW)) {
    speed = constrain(speed - revRate * deltaTime, maxRevSpeed, maxSpeed);
  } else {
    if (speed > 0) {
      speed = Math.max(0, speed - deRate * deltaTime); // Slow down forward
    } else if (speed < 0) {
      speed = Math.min(0, speed + deRate * deltaTime); // Slow down reverse
    }
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

// Grid function
// The following 12 lines was created by the help of Benjamin's brother
function grid() {
  for (let i = 0; i < 16; i++) {
    for (let o = 0; o < 16; o++) {
      tileArray[i][o] = new Tile(
        i * tileSize,
        o * tileSize,
        tileSize,
        tileDefault,
        tileRotate);
    }
  }
}



// Functions for screens
function gameScreen() {
  background(200);
  hud();
  movemap();
  rotateMap();
  push();
  translate(a + 500, b + 500);
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

function resetGame() {
  // Reset ambulance and position
  x = 0;
  a = 0;
  y = 0;
  b = 0;
  angle = 0;
  speed = 0;
  maxSpeed = 10;
  acc = 0.003;
  timer = 120;

  grid();
  level(1); // Load level 1 (you can change this if you have more levels)

  time = 0;
  speedCheck = false;
  speedStore = 0;
  state = "mainmenu";
}

//function for start button
function mouseClicked() {
  // Start the game from the main menu
  if (state == "mainmenu" && mouseX >= 40 && mouseX <= 210 && mouseY >= 110 && mouseY <= 180) {
    resetGame();
    state = "game";
  }

  if(state == "win" || state == "late" && mouseX >= 40 && mouseX <= 210 && mouseY >= 110 && mouseY <= 180){
    resetGame();
    state = "mainmenu";
  }
}


// function that created the different screens
function mainMenu() {
  scale(0.7);
  image(menuBackground, 750, 500);
  scale(0.5);
  image(menuStart, 350, 450);
  textSize(48);
  textFont("MS Gothic");
  text("An accident has occured! Get there in time before the patient dies.", 650, 350);
  text("Steer the emergency vehicle with the arrow keys through the course.", 650, 450);
}

function winScreen() {
  fill(0);
  textSize(48);
  push();
  noStroke();
  fill(255, 255, 255, 95);
  rect(165, 120, 725, 120, 5);
  pop();
  text("Driver, You are a lifesaver!", 170, 200);
  scale(0.25);
  image(retryButton, 350, 450);
}

function late() {
  fill(0);
  textSize(48);
  push();
  noStroke();
  fill(255, 255, 255, 95);
  rect(165, 120, 725, 120, 5);
  pop();
  text("You did not get there in time!", 170, 200);
  scale(0.25);
  image(retryButton, 350, 450);
}

//draws the gamestates for starting the game, late and win.
function draw() {
  if (state == "game") {
    gameScreen();
  } 
  if (state == "mainmenu") {
    mainMenu();
  }
  if (state == "win") {
    winScreen();
  }
  if (state == "late"){
    late();
  }
}