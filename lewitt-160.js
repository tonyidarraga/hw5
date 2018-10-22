function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(228, 218, 219);

	//"square"
	stroke(0);
	line(30, 30, 370, 30);
	line(30, 30, 30, 370);
	line(30, 370, 370, 370);
	line(370, 370, 370, 30);

	//"X"
	stroke(255, 0, 0);
	line(75, 75, 335, 335);
	line(75, 335, 335, 75);

}
