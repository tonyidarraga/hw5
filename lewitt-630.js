function setup() {
	createCanvas(400, 200);
}

function draw() {
	background(225);

	strokeWeight(20);
	line(0, 20, 400, 20);
	line(0, 60, 400, 60);
	line(0, 100, 400, 100);

	for (var x = 0; x <= width; x = x + 50); {
		line(x, 100, x, 400);
	}
}
