// Initialize the canvas
let bgColor; 

function setup() {
  var canvas = createCanvas(windowWidth/2.7, windowWidth/2.7);
  noLoop();
  canvas.parent("sketch-holder");
  bgColor = color(random(255), random(255), random(255));
  background(bgColor);
}

// Draw the canvas
function draw() {
  bgColor = color(random(255), random(255), random(255));
  background(bgColor)
}

function windowResized() {
  resizeCanvas(windowWidth/2.7, windowWidth/2.7, false);
}


