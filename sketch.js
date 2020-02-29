var track1;
var track2;
var track3;
var track4;
var circlesize1;
var circlesize2;
var volumeleft;
var volumeright;
var leftamplitude;
var rightamplitude;
var leftplaying;
var rightplaying;

function preload() {
  soundFormats("mp3");
  track1 = loadSound("djsong1.m4a");
  track2 = loadSound("djsong2.m4a")

}



function setup() {
  delay = new p5.Delay();
  createCanvas(600, 400);
  circlesize1 = 175
  circlesize2 = 175
  volumeleft = 275
  volumeright = 275
  leftamplitude = 0.0
  rightamplitude = 0.0
  leftplaying = 120
  rightplaying = 120





}


function draw() {
  background(120);
  textSize(17);

  fill(0);
  ellipse(125, 200, circlesize1, circlesize1);
  fill(200, 20, 20);
  ellipse(125, 200, circlesize1 - 100, circlesize1 - 100);
  fill(0);
  ellipse(125, 200, 2, 2);

  fill(0);
  ellipse(475, 200, circlesize2, circlesize2);
  fill(40, 40, 220);
  ellipse(475, 200, circlesize2 - 100, circlesize2 - 100);
  fill(0);
  ellipse(475, 200, 2, 2);



  //play and pause buttons  

  fill(200);
  rect(15, 335, 75, 50, 10);

  fill(200);
  rect(110, 335, 75, 50, 10);

  fill(200);
  rect(415, 335, 75, 50, 10);

  fill(200);
  rect(510, 335, 75, 50, 10);


  //volume level sliders  

  line(260, 125, 260, 275)
  strokeWeight(6);

  line(340, 125, 340, 275)
  strokeWeight(6);

  fill(0);
  rect(240, volumeleft, 40, 5);

  fill(0);
  rect(320, volumeright, 40, 5);

  if (keyIsDown(65)) {
    volumeleft = volumeleft + 1;
    leftamplitude = leftamplitude - 0.01;
    if (leftamplitude < 0) {
      leftamplitude = 0
    }
  }

  if (volumeleft < 125) {
    volumeleft = 125;
  }

  if (keyIsDown(81)) {
    volumeleft = volumeleft - 1;
    leftamplitude = leftamplitude + 0.01;
  }

  if (volumeleft > 275) {
    volumeleft = 275;
  }

  track1.setVolume(leftamplitude);


  if (keyIsDown(68)) {
    volumeright = volumeright + 1;
    rightamplitude = rightamplitude - 0.01;
    if (rightamplitude < 0) {
      rightamplitude = 0
    }
  }

  if (volumeright < 125) {
    volumeright = 125;
  }

  if (keyIsDown(69)) {
    volumeright = volumeright - 1;
    rightamplitude = rightamplitude + 0.01;
  }

  if (volumeright > 275) {
    volumeright = 275;
  }

  track2.setVolume(rightamplitude);

  //play and pause button text  

  fill(0);
  text("Play (z)", 23, 365);

  text("Stop (x)", 118, 365);

  text("Play (c)", 424, 365);

  text("Stop (v)", 518, 365);

  textSize(12);

  text("Volume Up (Q)", 212, 110);

  text("Volume Down (A)", 195, 305);

  text("Volume Up (E)", 310, 110);

  text("Volume Down (D)", 310, 305);

  textSize(15);

  fill(leftplaying);
  text("Now playing; DJ Snake & Major Lazer - Lean On", 35, 35, 200);

  fill(rightplaying);
  text("Now playing; Charles Bravo - House Basic", 365, 35, 200);

}

function keyPressed() {
  if (key == "z") {
    circlesize1 = 190
    leftplaying = 200
    track1.play();
  }

  if (key == "x") {
    circlesize1 = 175
    leftplaying = 120
    track1.stop();
  }

  if (key == "c") {
    circlesize2 = 190
    rightplaying = 200
    track2.play();
  }

  if (key == "v") {
    circlesize2 = 175
    rightplaying = 120
    track2.stop();
  }

}


function mousePressed() {
  // Check if mouse is inside the button
  let a = dist(mouseX, mouseY, 50, 360);
  if (a < 40) {
    track1.play();
    leftplaying = 200
    circlesize1 = 190
  }

  let b = dist(mouseX, mouseY, 140, 360);
  if (b < 40) {
    track1.stop();
    leftplaying = 120
    circlesize1 = 175
  }


  let c = dist(mouseX, mouseY, 440, 360);
  if (c < 40) {
    track2.play();
    rightplaying = 200
    circlesize2 = 190
  }

  let d = dist(mouseX, mouseY, 545, 360);
  if (d < 40) {
    track2.stop();
    rightplaying = 120
    circlesize2 = 175
  }
}
