console.log("Test...")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = 'download.png';

var img2 = new Image();
img2.src = '222.jpg';

var img3 = new Image();
img3.src = 'bye.jpg';

img.onload = function(){
	ctx.drawImage(img,50,50,100,100);
}
img2.onload = function(){
	ctx.drawImage(img2,150,150,250,250);
}
img3.onload = function(){
	ctx.drawImage(img3,100,100,200,200);
}
ctx.fillStyle ="turquoise";
ctx.strokeStyle ="blue";
ctx.font = "italic 15px Comic Sans";
ctx.fillText("y u bully meh", 150,150);
ctx.strokeText("TTV BTW", 300,300);

ctx.fillRect(30,50,100,30);
ctx.beginPath();
ctx.fillStyle = "turquoise";
ctx.moveTo(0,200);
ctx.lineTo(0,150);
ctx.lineTo(150,400);
ctx.closePath();
ctx.fill();
