var josh ,joshImage, dinosaur1,dinosaur2,dinosaur3,dinosaur4;
var diamond,cave

function preload() {
  cave = loadImage("cave.jpg");
  joshImage = loadImage("josh.png");
  dinosaur1 = loadImage("creature1.png");
  dinosaur2 = loadImage("creature2.png");
  dinosaur3 = loadImage("creature3.png");
  dinosaur4 = loadImage("creature4.png");
}

function setup() {
  createCanvas(1400,600);

  josh = createSprite(300,450,80,80);
  josh.addImage("Josh",joshImage);
  josh.scale = 1.3;
}

function draw() {
  background(cave);
  spawnCreature();  
  drawSprites();
}

function spawnCreature(){
  if(frameCount%200 ==0){
    var dinosaur = createSprite(1400,450,70,70)
    dinosaur.velocityX = -3

    var rand = Math.round(random(1,3))
    switch(rand){
      case 1 : dinosaur.addImage("dinosaur",dinosaur1)
      break;
      case 2 : dinosaur.addImage("dinosaur",dinosaur2)
      break;
      case 3 : dinosaur.addImage("dinosaur",dinosaur3)
      break;
      default :dinosaur.addImage("dinosaur",dinosaur1)
    }
    dinosaur.scale = 1;
    dinosaur.lifetime = 400;
  }
}