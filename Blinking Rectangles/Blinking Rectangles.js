var NUM_RECTANGLES_ACROSS = 4;
var NUM_RECTANGLES_DOWN = 10;
var wight = getWidth() / NUM_RECTANGLES_ACROSS;
var height = getHeight() / NUM_RECTANGLES_DOWN;

function start() {
    for(var i = 0; i < NUM_RECTANGLES_ACROSS; i++){
        for(var u = 0; u < NUM_RECTANGLES_DOWN; u++){
        var rect = new Rectangle(wight,height);
            rect.setPosition(i *wight,u *height); 
            rect.setColor(Color.white);
            add(rect);
        }
    }
    mouseMoveMethod(move);
}
function move (e){
    var cros = getElementAt(e.getX(),e.getY());
    if(cros != null){
        cros.setColor(Randomizer.nextColor());
    }
}