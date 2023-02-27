var BALL_RADIUS = 30;
var line;
var ball;

function start() {
     mouseMoveMethod(moveLine);
     ball = new Circle(BALL_RADIUS);
     ball.setColor(Color.YELLOW);
     ball.setPosition(getWidth()/2,getHeight()/2);
     add(ball);

    
}
 function moveLine(e){
     remove(ball);
     remove(line);
     line = new Line (getWidth()/2,getHeight()/2,
                      e.getX(), e.getY());
     add(line);
     ball = new Circle(BALL_RADIUS);
     ball.setColor(Color.YELLOW);
     ball.setPosition(getWidth()/2,getHeight()/2);
     add(ball);

     ball.setPosition(e.getX(),e.getY());
 }