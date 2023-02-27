var NUM_CIRCLES = 30;
var BIG_RADIUS = 180;
var space = BIG_RADIUS / NUM_CIRCLES;

function start() {
	for( var s = BIG_RADIUS; s >= NUM_CIRCLES; s -= space){
	    println(s);
	var circleColor = Randomizer.nextColor();
    var anotherCircle = new Circle( s );
	anotherCircle.setPosition( getWidth() / 2, getHeight() - anotherCircle.getRadius() );
	anotherCircle.setColor(circleColor);
	
    add(anotherCircle);
	}
}