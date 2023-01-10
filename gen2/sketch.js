let particles = [];
const num = 4000;

const noiseScale = 0.007;

function setup() {
  createCanvas(1000, 1000);
  for(let i=0; i<num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

function draw() {
  background(0, 15);
  for(let i = 0; i<num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    // get noise value 
    // scale down values to smooth out noise 
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    // mapping particles tau 2xpi
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >=0 && v.y <= height;
}