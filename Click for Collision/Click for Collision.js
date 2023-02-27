var blueCircle;
var redCircle;
var RADIUS = 25;
var DX_RED = 6;
var DX_BLUE = 4;
var DELAY = 40;
var counter = 0;


function start(){
    blueCircle = new Circle(RADIUS);
    blueCircle.setPosition(50, getHeight()/2);
    blueCircle.setColor(Color.BLUE);
    add(blueCircle);
    
    redCircle = new Circle(RADIUS);
    redCircle.setPosition(getWidth()/2,getHeight()/2);
    redCircle.setColor(Color.RED);
    add(redCircle);
    
    mouseClickMethod(clicker);
    
}
function clicker(){
    counter++;
    if(counter %2 == 0){
        stopTimer(redBall);
        stopTimer(blueBall);
        
     }else{
         setTimer(blueBall, DELAY);
     }
    
}
function blueBall(){
    blueCircle.move(DX_BLUE,0);
     if( blueCircle.getX()-RADIUS >= redCircle.getX()/2 +RADIUS){
       redBall();
    }
}
function redBall(){
    redCircle.move(DX_RED,0);
    
}