var IE = document.all?true:false
var verticalPosition;
var verticalPositionBefore;
var windowWidth = 1024;
var windowHeight;


if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

var objectArray = new Array();

fillObjectArray();
positionDivs();

function fillObjectArray()
{
	var fondo1 = document.getElementById("fondo1");
	var fondo1x = 0; //position div from half width of the page
	var fondo1y = 0;
	var fondo1factor = 0; //parallax shift factor, the bigger the value, the more it shift for parallax movement
	var fondo1Array = new Array();
	fondo1Array.push(fondo1, fondo1x, fondo1y, fondo1factor);
	objectArray.push(fondo1Array);
	
	var fondo2 = document.getElementById("fondo2");
	var fondo2x = 0;
	var fondo2y = 0;
	var fondo2factor = 0.15;
	var fondo2Array = new Array();
	fondo2Array.push(fondo2, fondo2x, fondo2y, fondo2factor);
	objectArray.push(fondo2Array);

	
	var fondo3 = document.getElementById("fondo3");
	var fondo3x = 0;
	var fondo3y = 0;
	var fondo3factor = -0.05;
	var fondo3Array = new Array();
	fondo3Array.push(fondo3, fondo3x, fondo3y, fondo3factor);
	objectArray.push(fondo3Array);
}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e)
{
	  if (IE)
	  {
		// grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft
		tempY = event.clientY + document.body.scrollTop
	  } 
	  else 
	  {
		// grab the x-y pos.s if browser is NS
		tempX = e.pageX
		tempY = e.pageY
	  }  
	  // catch possible negative values in NS4
	  if (tempX < 0){tempX = 0}
	  if (tempY < 0){tempY = 0}  
	  
	  moveDiv(tempX);
	  
	  return true
}

function moveDiv(tempX)
{	
	for (var i=0;i<objectArray.length;i++)
	{
		var yourDivPositionX = objectArray[i][3] * (0.3 * windowWidth - tempX) + objectArray[i][1];
		objectArray[i][0].style.left = yourDivPositionX + 'px';
	}
}

function positionDivs()
{
	for (var i=0;i<objectArray.length;i++)
	{
		objectArray[i][0].style.left = objectArray[i][1] + "px";
		objectArray[i][0].style.top = objectArray[i][2] + "px";
	}
}