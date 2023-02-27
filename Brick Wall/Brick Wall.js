// Constants
var WIDTH = 50;
var HEIGHT = 20;
var x = 0;
var y = getHeight() - HEIGHT;
var COUNTER = 0;

function start() {
    setTimer(draw_wall, WIDTH);
    
}

function draw_wall(){
    var bricks = new Rectangle(WIDTH , HEIGHT);
    bricks.setColor(Color.randomRed());
    bricks.setPosition( x , y );
    add(bricks);
    x = x + WIDTH;
    COUNTER++;
    if(x >= getWidth()){
        x = 0;
        y -= HEIGHT;
        if(x == getWidth() && y == 0){
            stopTimer(draw_wall);
        }
       
    }
}