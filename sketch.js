// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myRocket = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myRocket.drawShape = function () {
	  fill(300); // make white
	  triangle (75, 500, 250, 300, 450, 500); // bottom triangle
	  fill(150); // make gray
	  ellipse(250, 300, 221, 450); // oval
	  fill(300); // make white
	  triangle(150, 150, 350, 150, 250, 50); // first triangle
	  ellipse(255, 300, 70, 70); // window

};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
	myRocket.speed.y = -1;
};

draw = function() {
  background(100); // refresh the background
  myRocket.display(); // display myShape
  myRocket.update(); // and then update it
		myRocket.speed.y = myRocket.speed.y * 1.02;
};
