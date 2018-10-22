function setup() {
	createCanvas(380, 200);
}

function draw() {
	background(225);

	strokeWeight(20);
	line(0, 20, 400, 20);
	line(0, 60, 400, 60);
	line(0, 100, 400, 100);

	line(0, 100, 0, 400);
	line(50, 100, 50, 400);
	line(100, 100, 100, 400);
	line(150, 100, 150, 400);
	line(200, 100, 200, 400);
	line(250, 100, 250, 400);
	line(300, 100, 300, 400);
	line(350, 100, 350, 400);
	line(400, 100, 400, 400);
	
	// i tried to use this loop:
	// but it didn't work:
	//for (var x = 0; x <= width; x = x + 50); {
	//line(0, 100, 0, 400);
}
