// This program draws a target that follows the mouse
var  hLine;
var  vLine;
var  ball;

function start(){
    mouseMoveMethod(crosMove);
    mouseClickMethod(drawBall);

}
function crosMove(e){
    remove(hLine);
    hLine = new Line (0,0,0,0);
    hLine.setPosition(0,e.getY());
    hLine.setEndpoint(getWidth(),e.getY());
    add(hLine);
    
     remove(vLine);
     vLine = new Line(0,0,0,0);
     vLine.setPosition(e.getX(),0);
     vLine.setEndpoint(e.getX(),getHeight());
     add(vLine);
     
}
function drawBall(e){
    ball = new Circle (15);
    ball.setColor(Color.red);
    ball.setPosition(e.getX(),e.getY());
    add(ball);
    
}