console.log("Test...")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT =600;

var x, y;
var mx, my;
var circleColor;

function init(){
x =320;
y=300;
mx = 10;
my = 10;
circleColor = randomColor();
	return setInterval( draw, 10)
}


function circle(circleX, circleY, color){
ctx.beginPath();
ctx.arc( circleX, circleY, 50, 0, 6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = color;
ctx.fill();
}
function clear(){
	ctx.clearRect(0,0,WIDTH, HEIGHT);
}

function draw(){
	clear();
	circle(x, y, circleColor);
	x += mx;
	y += my;

	if(x+mx < 50 || x+mx > WIDTH-50){
		mx = -mx;
		circleColor = randomColor();
	}
	if(y+my < 50 || y+my > HEIGHT-50){
		my = -my;
		circleColor = randomColor();
	}
}
function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);

	return "rgb(" + r + "," + g + "," + b + ")";
}


init()