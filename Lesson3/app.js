var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2px";

//starting coordinate
ctx.moveTo(75,0);

//other points
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();

//fill in
ctx.fillStyle = "red";
ctx.fill();


var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.lineWidth = "2px";

//starting coordinate
ctx2.moveTo(0,0);

//other points
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();

//fill in
ctx2.fillStyle = "blue";
ctx2.fill();


var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');

ctx3.beginPath();
ctx3.arc(100, 100, 50, 0, 6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "green";
ctx3.fill();


var mario = new Image();
mario.src = "mario.png";

mario.onload = function(){
	ctx4.drawImage(mario,150,300,70,100);
}


var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');

// ctx4.fillStyle = "green";
// ctx4.fillRect(0,350,800,150);
// ctx4.fillStyle = "cyan";
// ctx4.fillRect(0,0,800,350);

