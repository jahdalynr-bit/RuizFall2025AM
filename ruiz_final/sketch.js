
let x = 25;
let colorIndex = 0;
function setup() {
  createCanvas(400, 200);


  textSize(20);


  noLoop();
}

function draw() {
  background(0);

  if (colorIndex === 0) {
    fill(0, 0, 255); 
  } else if (colorIndex === 1) {
    fill(255, 0, 0); 
  } else {
    fill(255); 
  }

  // Face
  circle(x, height / 2, 50);

  // Eyes
  fill(0);
  circle(x - 10, height / 2 - 8, 6);
  circle(x + 10, height / 2 - 8, 6);

  // Mouth
  noFill();
  stroke(0);
  arc(x, height / 2 + 8, 20, 10, 0, PI);
  noStroke();

  // Move the face
  x += 5;

  
  if (x > width + 25) {
    x = -25;

    colorIndex++;
    if (colorIndex > 2) {
      colorIndex = 0;
    }
  }

  describe('simple face moving across the screen');
}

function mousePressed() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  redraw();
}
