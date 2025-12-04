let symmetry = 8;
let angle = 360 / symmetry;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  background(0);
}

function draw() {

  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed === true) {

      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(random(255),random(255),random(255));
        strokeWeight(random(1,10));
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}