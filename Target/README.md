# about
For this program, you are going to use the mouse move and mouse click events in order to draw crosshairs that follow your mouse and add a red circle wherever you click.

The crosshairs consist of a horizontal line that goes from 0 to the canvas width and a vertical line that goes from 0 to the canvas height. The lines should cross paths where the mouse is located.

Remember that lines have two functions, line.setPosition(x, y) and line.setEndpoint(x, y), that allow you to change the coordinates of the line.

Note: the function setPosition(x, y) is setting the starting point of a line, and the function setEndpoint(x, y) is setting the ending point of a line.

When the user clicks, a small red circle should appear at that point on the screen.

Extension: If you’re feeling really adventurous, you can have a bouncing ball on the screen that gets removed when the user clicks on it. You can use getElementAt(x, y) to get an object at (x, y) (or null if no object) and remove(obj) to remove an object from the canvas.

Hint: the order in which you draw the objects matters and affects getElementAt() function.

# overview
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU3YTFkYTU5ZmZhMzJkNTAwMjI2ZWYwZmFiZTgxOTE5YjFmZjFmMCZjdD1n/1Famh19MXNmzMeSQ31/giphy.gif"/>