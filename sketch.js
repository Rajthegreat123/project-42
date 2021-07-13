var iss, issIMG;
var spaceBG;
var spacecraft, spacecraftIMG1, spacecraftIMG2, spacecraftIMG3, spacecraftIMG4;

var hasDocked = false;

function preload() {
  spaceBG = loadImage("Images/spacebg.jpg")
  issIMG = loadImage("Images/iss.png")
  spacecraftIMG1 = loadImage("Images/spacecraft1.png")
  spacecraftIMG2 = loadImage("Images/spacecraft2.png")
  spacecraftIMG3 = loadImage("Images/spacecraft3.png")
  spacecraftIMG4 = loadImage("Images/spacecraft4.png")
}

function setup() {
  createCanvas(800, 500);

  spacecraft = createSprite(300, 350, 50, 50);
  spacecraft.addImage(spacecraftIMG1);
  spacecraft.scale = 0.25;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issIMG);
}

function draw() {
  background(spaceBG);

  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1);
  }

  if (keyDown("w")) {
    spacecraft.y = spacecraft.y - 5;
    spacecraft.addImage(spacecraftIMG1);
  }
  if (keyDown("a")) {
    spacecraft.x = spacecraft.x - 5;
    spacecraft.addImage(spacecraftIMG3);
  }
  if (keyDown("s")) {
    spacecraft.y = spacecraft.y + 5;
    spacecraft.addImage(spacecraftIMG2);
  }
  if (keyDown("d")) {
    spacecraft.x = spacecraft.x + 5;
    spacecraft.addImage(spacecraftIMG4);
  }

  if (spacecraft.y <= (iss.y + 50) && spacecraft.x <= (iss.x - 15)) {
    hasDocked = true;
    fill("white");
    textSize(40);
    stroke("black");
    text("Docking Successful!", 400, 450);
  }

  console.log(spacecraft.y);

  drawSprites();
}