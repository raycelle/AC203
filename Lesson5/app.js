var canvas;
var ctx;

//player position and size
var x = 300;
var y = 300;
var size = 30;

//player speed
var mx = 0;
var my = 0;


//canvas width and height
var WIDTH = 600;
var HEIGHT = 600;

var gameover = false;

//position of circle
var circleX;
var circleY;

var circleCollision = false;
var score = 0;


//ghost
var ghostX;
var ghostY;
var ghostCollision = false;


//import pacman
function drawPacman(x,y,size){
	ctx = document.getElementById("myCanvas").getContext('2d');
	//ctx.fillRect(x,y,size,size)
	var pacman = new Image();
	pacman.src = "pacman.png";
	ctx.drawImage(pacman,x,y,size,size)
}

//import circle
function drawCircle(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var circle = new Image();
	circle.src = "circle.png";
	ctx.drawImage(circle,circleX, circleY,40,40);
}

function drawGhost(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var ghost = new Image();
	ghost.src = "ghost.gif";
	ctx.drawImage(ghost,ghostX, ghostY,40,40);
}


//initialize our animation
function init(){
	//set up canvas
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	//put ghost in random position
	ghostX = Math.floor(Math.random()*(WIDTH-40));
	ghostY = Math.floor(Math.random()*(HEIGHT-40));
	//put circle in random position
	circleX = Math.floor(Math.random()*(WIDTH-40));
	circleY = Math.floor(Math.random()*(HEIGHT-40));
	//wait for keyboard press
	window.onkeydown = keydownControl;

	//redraw our canvas
	return setInterval(draw,10);
}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	} else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39){
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function clear(){
	ctx.clearRect(0,0,WIDTH, HEIGHT);
}


function draw(){
	clear();
	//while game is running
	if(gameover != true){
		drawPacman(x,y,size);
		drawCircle();
		drawGhost(); 

		//bounce off the walls
		if(x+mx>WIDTH-size || x+mx <0){
			mx = -mx;
		} else if (y+my > HEIGHT - size || y+my <0){
			my = -my;
		}

		//move player
		x += mx;
		y +=my;

		followPacman();

		collisionCheck();
		collisionHandle();
	}
}

function collisionCheck(){
	if( x>circleX && x<circleX+50 && y>circleY && y<circleY+50 ){
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

function collisionHandle(){
	if(circleCollision){
		circleX = Math.floor(Math.random()*(WIDTH-50));
		circleY = Math.floor(Math.random()*(HEIGHT-50));
		score += 1;
		document.getElementById("score").innerHTML = "Score: " + score;	
	}
}
 
 function followPacman(){
 	if(ghostX < x){
 		ghostX += 1;
 	}
 	if(ghostX > x){
 
 		ghostX -=1;
 	}
 	if(ghostY < y){
 		ghostY +=1;
 	}
 	if(ghostY > y){
 		ghostY -=1;
 	}
 }

init();

