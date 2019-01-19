	console.log("Test...")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.arc(150,150,100,0,6.28)
ctx.strokeStyle ="blue";
ctx.stroke();
ctx.fillStyle= "turqoise";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(10,250);
ctx.lineTo(290,150);
ctx.closePath();
ctx.strokeStyle = "turquoise";
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.lineTo(300,0);
ctx.lineTo(0,300);
ctx.closePath();
ctx.strokeStyle = "turquoise";
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

var c = document.getElementById("hiCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.lineTo(300,300);
ctx.lineTo(300,150);
ctx.lineTo(0,150);
ctx.closePath();
ctx.strokeStyle = "turquoise";
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();