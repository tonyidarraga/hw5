function setup() {
  createCanvas(500, 500);
}

function draw() {
 
var x1 = 199;
var x2 = 201;
var x3 = -9;
var x4 = 408;
  
  for (var y1 = 5; y1 <= 205; y1 = y1 + 10) {
    if (x1 >= 19);
    x1 = x1 - 9;
    if (x2 <= 381);
    x2 = x2 + 9;
    line(x1, y1, x2, y1);
  }

line(0, 215, 400, 215);
  
  for (var y2 = 215; y2 <= 425; y2 = y2 + 10) {
    if (x3 <= 199);
    x3 = x3 + 9;
    if (x4 >= 201);
    x4 = x4 - 9;
    line(x3, y2, x4, y2);
  }
}
