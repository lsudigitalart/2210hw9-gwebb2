var item1;
var item2;
var item3;
var item4;

function setup() {
  createCanvas(875, 500);
  strokeWeight(3);


  ellipseMode(CORNER);


  item1 = new item(2, 112.5, -50, 50, 50, 0, 0, 0, 0);
  item2 = new item(3, 0, 0, 0, 0, 312.5, -50, 50, 50);
  item3 = new item(1, 525, -50, 25, 25, 0, 0, 0, 0);
  item4 = new item(4, 0, 0, 0, 0, 725, -50, 25, 25);


}

function draw() {

  background(255);



  item1.display();
  item1.move();

  item2.display();
  item2.move();

  item3.display();
  item3.move();

  item4.display();
  item4.move();

  push();
  fill(180, 155, 110);
  rect(50, 375, 175, 150);
  rect(250, 375, 175, 150);
  rect(450, 375, 175, 150);
  rect(650, 375, 175, 150);
  pop();


}


function item(itemSpeed, exPosition, eyPosition, eWidth, eHeight, rxPosition, ryPosition, rWidth, rHeight) {
  this.speed = itemSpeed;
  this.exPosition = exPosition;
  //this.eyPosition = eyPosition;
  this.eWidth = eWidth;
  this.eHeight = eHeight;
  this.rxPosition = rxPosition;
  //this.ryPosition = ryPosition;
  this.rWidth = rWidth;
  this.rHeight = rHeight;
  var ey = -50;
  var ry = -50;

  this.display = function() {
    ellipse(this.exPosition, ey, this.eWidth, this.eHeight);
    rect(this.rxPosition, ry, this.rWidth, this.rHeight);
  };

  this.move = function() {
    ey = ey + this.speed;
    ry = ry + this.speed;

    if(ey > 500) {
      ey = -550;

}

  if(ry > 500) {
    ry = -550;
}
  };


}
