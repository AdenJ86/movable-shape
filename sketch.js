// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myFace = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myFace.drawShape = function () {
  triangle(75, 150, 225, 150, 150, 75); // first ear
  triangle(300, 150, 450, 150, 375, 75); // second ear

  rect(75, 150, 376, 400); // face
  ellipse(200, 300, 75, 75); // first eye
  ellipse(325, 300, 75, 75); // second eye
  triangle(200, 400, 250, 400, 250, 300); // nose
  fill(0); // make black
  ellipse(190, 310, 35, 35); // first pupil
  ellipse(315, 310, 35, 35); // second pupil

  fill(300); // make white
  ellipse(250, 450, 150, 75); // mouth

};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
	myFace.speed.x = 0.5;
};

draw = function() {
  background(100); // refresh the background
  myFace.display(); // display myShape
  myFace.update(); // and then update it
		myFace.speed.x = myFace.speed.x * 1.02;
};
