function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var i = 10; i <= 390; i = i + 10) {
    line(10, i, 390, i);
  }
}
