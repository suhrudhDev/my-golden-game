var soldier, scene1, soldierimg, soldier1img;
var weapon;
var level = 1;


function preload() {
  scene1 = loadImage("images/city1.png");
  scene2 = loadImage("images/army camp.jpg");
  soldierimg = loadImage("images/soldier.png");
  soldier1img = loadImage("images/Hammer.png");
}
function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight - 150);
  soldier = createSprite(width / 2, height - 80);
  soldier.addImage(soldierimg);

  weapon = createSprite(width / 2 - 400, height - 80);
  weapon.visible = false;
}

function draw() {
  select_scene();

  playerControl();
  if(weapon!=="empty"){
  if (soldier.isTouching(weapon)) {
    soldier.addImage(soldier1img);
    weapon.destroy();
    weapon="empty";
  }
  }
  if (soldier.x > width && weapon=="empty") {
    level += 1;
    soldier.x=10;
  }

  drawSprites();



}

function select_scene() {

  switch (level) {
    case 1: background(scene1);
      break;
    case 2: background(scene2);
      break;
  }
}

function playerControl() {
  if (keyDown(RIGHT_ARROW)) {
    soldier.x += 5;
  }
  if (keyDown(LEFT_ARROW)) {
    soldier.x += -5
  }

}