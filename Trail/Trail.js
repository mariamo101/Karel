var MAX_BOUNCES = 20;
var ball;
var dx = 4;
var dy = 4;
var balls;
var counter = 0;
/* This program has a ball bounce around the screen. 
 * Its path is drawn by drawing different colored balls everywhere it goes.
 */
function start(){
	ball = new Circle(20);
	ball.setPosition(50, 70);
	add(ball);
      
	setTimer(draw_ball, 20);

}


// Check if the ball has reached a wall.
// Then move the ball in the correct direction.
function draw_ball(){
	checkWalls();
	ball.move(dx, dy);
	cyan_balls();
	
	
}
function cyan_balls(){
  balls = new Circle(10);
  balls.setPosition(ball.getX(),ball.getY());
  balls.setColor(Color.CYAN);
  add(balls);
	
}
 
function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
		counter++;
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
		counter++;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
		counter++;
	}
		
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
		counter++;
	}
	if(counter == MAX_BOUNCES){
	    stopTimer(draw_ball);
	}
	
}