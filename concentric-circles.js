function setup() {
	createCanvas(400, 400);
}

function draw() {
	background (255);

	var x = 390

	while (x > 20) {
		ellipse(200, 200, x, x);
		x = x - 10
	}
}
