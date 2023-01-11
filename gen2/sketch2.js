function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(159);

  noFill();
  stroke('red');
  strokeWeight(4);

  let step = 10;

  for(let i = 0; i < 8; i++) {
    let y = 100 * sin(step);
    step = step + 10;
    circle(x,y,15);
  }

}