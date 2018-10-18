function setup() {
  createCanvas(400, 400);
}

function draw() {
background(255);
	
	var x = 10
	
  for (var i = 10; i <= 390; i = i + 5) {
    line(i, 0, i, x);
		
		x = x + 10
  }
}
