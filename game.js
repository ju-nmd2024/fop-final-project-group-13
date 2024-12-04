// Classes for game objects
class Amb {
  constructor() {}
  draw() {
    push();
    scale(1);
    image(ambulance, a + 500, b + 500, ambulanceSize, ambulanceSize);
    pop();
  }
}

class Modifier {
  constructor(posX, posY, size, surface) {
    this.surface = surface;
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.pickedUp = false;
  }
  draw() {
    if (!this.pickedUp) {
      image(this.surface, this.posX + x, this.posY + y, this.size, this.size);
    }
  }
}

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
      // rect(this.posX + x, this.posY + y, tileSize * 2, tileSize * 2);
      if (this.surface == tileDirt) {
        maxSpeed = 5;
        acc = 0.01;
      } else if (this.surface == tileIceRoad) {
        maxSpeed = 5;
        acc = 0.001;

      } else if (this.surface == tileAsphalt) {
        maxSpeed = 10;
        acc = 0.003;
      } else if (this.surface == tileAsphaltJ) {
      
      } else if (this.surface == tileAccident) {
        state = "win";
        maxSpeed = 1;
        acc = 0.0005;
      } else {
        maxSpeed = 8;
        acc = 0.0005;
      }
    }
  }
}

// Game logic variables
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
let timer = 60;
let tileRotate = 0;
let tileSize = 320;
let state = "mainmenu";
let lastSecond = 0;
let amb = new Amb();

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
];

// Function for tile detection
function checkPos(posX, posY, surface) {
  if (
    a + 500 > posX + tileSize &&
    a + 500 < posX + tileSize * 2 &&
    b + 500 > posY + tileSize &&
    b + 500 < posY + tileSize * 2
  ) {
    return true;
  }
}

// Function to place the tiles
function level(lvl) {
  switch (lvl) {
    case 1: // Get to the accident
      tileArray[3][10].surface = tileAsphalt;
      tileArray[3][9].surface = tileAsphalt;
      tileArray[3][8].surface = tileAsphalt;
      tileArray[3][7].surface = tileAsphaltJ;
      tileArray[3][6].surface = tileAsphalt;
      tileArray[3][5].surface = tileAsphaltR;
      tileArray[4][5].surface = tileDirtR;
      tileArray[5][5].surface = tileDirtR;
      tileArray[6][5].surface = tileDirtR;
      tileArray[7][5].surface = tileAsphaltR90;
      tileArray[7][6].surface = tileAsphalt180;
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
      tileArray[11][8].surface = tileAsphaltL;
      tileArray[10][8].surface = tileAsphalt90;
      tileArray[9][8].surface = tileAsphaltR270;
      tileArray[9][7].surface = tileAsphalt;
      tileArray[9][6].surface = tileAsphalt;
      tileArray[9][5].surface = tileAsphalt;
      tileArray[9][4].surface = tileAccident;
      tileArray[9][3].surface = tileAsphalt;
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
    fill(1);
    textSize(48);
    push();
    noStroke();
    fill(255, 255, 255, 95);
    rect(165, 120, 725, 120, 5);
    pop();
    text("You did not get there in time!", 170, 200);
  }
}


function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); //set the angle mode to degrees.
  imageMode(CENTER); //Images drawn with their center as the origin
  frameRate(60);

  ambulance = loadImage("Ambulance.png");
  tileDefault = loadImage("Grass.png");
  tileAsphalt = loadImage("Road_Straight.png");
  tileAsphaltJ = loadImage("Road_Jump.png");
  tileAsphaltR = loadImage("Road_Turn_Right.png");
  tileAsphaltL = loadImage("Road_Turn_Left.png");
  tileAsphaltR90 = loadImage("Road_Turn_Right90.png");
  tileDirt = loadImage("Dirt.png");
  tileDirtR = loadImage("DirtR.png");
  wineBottle = loadImage("Wine_Bottle.png");
  tileAsphalt180 = loadImage("Road_Straight180.png");
  tileIceRoad = loadImage("Road_Ice.png");
  tileAsphaltR270 = loadImage("Road_Turn_Right270.png");
  tileAsphalt90 = loadImage("Road_Straight90.png");
  tileAsphaltL270 = loadImage("Road_Turn_270.png");
  tileAccident = loadImage("Accident.png");
  menuBackground = loadImage("MenuBackground.jpg");
  menuStart = loadImage("StartButton.png");
  retryButton = loadImage("ReturnButton.png");
  modifier = new Modifier(5 * tileSize, 5 * tileSize, 50, wineBottle);

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
  }
  
  else if (keyIsDown(DOWN_ARROW)) {
    speed = constrain(speed - revRate * deltaTime, maxRevSpeed, maxSpeed);
  }
  
  else {
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
function grid() {
  for (let i = 0; i < 16; i++) {
    for (let o = 0; o < 16; o++) {
      tileArray[i][o] = new Tile(
        i * tileSize,
        o * tileSize,
        tileSize,
        tileDefault,
        tileRotate
      );
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
  translate(a + 500, b + 500); // change to -100, -100 later
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

function mouseClicked() {
  if (mouseX >= 40 && mouseX <= 210 && mouseY >= 110 && mouseY <= 180) {
    state = "game";
  }
}

function mainMenu() {
  scale(0.7);
  image(menuBackground, 750, 500);
  scale(0.5);
  image(menuStart, 350, 450);
  textSize(48);
  textFont("MS Gothic");
  text(
    "An accident has occured! Get there in time before the patient dies.",
    650,
    350
  );
  text(
    "Steer the emergency vehicle with the arrow keys through the course.",
    650,
    450
  );
}

function winScreen() {
  fill(0);
  textSize(48);
  push();
  noStroke();
  fill(255, 255, 255, 95);
  rect(165, 120, 725, 120, 5);
  pop();
  text("Driver, You are a livesaver!", 170, 200);
  scale(0.25);
  image(retryButton, 750, 500);
}

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
}
