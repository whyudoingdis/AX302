console.log("Test...")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.strokeStyle = "rgb(50,255,50)";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle ="turquoise";
ctx.fillRect(100,100,100,100);

ctx.strokeStyle ="turquoise";
ctx.strokeRect(50,50,200,200);
ctx.clearRect(125,125,50,50);

var Bob = document.getElementById("Bob");
var ctx = Bob.getContext("2d");

ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.strokeStyle = "rgb(50,255,50)";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle ="pink";
ctx.fillRect(100,100,100,100);

ctx.strokeStyle ="lightblue";
ctx.strokeRect(50,50,200,200);
ctx.clearRect(125,125,50,50);

var jeff = document.getElementById("jeff");
var ctxj = jeff.getContext("2d");

ctxj.moveTo(50,50);
ctxj.lineTo(250,250);
ctxj.moveTo(250,50);
ctxj.lineTo(50,250);
ctxj.strokeStyle = "rgb(50,255,50)";
ctxj.lineWidth = 5;
ctxj.stroke();
ctxj.fillStyle ="lightgreen";
ctxj.fillRect(100,100,100,100);

ctxj.strokeStyle ="lightgreen";
ctxj.strokeRect(50,50,200,200);
ctxj.clearRect(125,125,50,50);

var hi = document.getElementById("hi");
var ctxh = hi.getContext("2d");
ctxh.fillStyle="turquoise"
ctxh.fillStyle="turquoise"
ctxh.fillRect(150,150,150,150)
ctxh.fillRect(0,0,150,150)
