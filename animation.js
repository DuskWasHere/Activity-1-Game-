var canvasWidth = 300;
var canvasHeight = 300;

var spriteWidth = 256;
var spriteHeight = 256;

var rows = 4;
var cols = 4;

var trackDown = 0;
var trackLeft = 1;
var trackRight = 2;
var trackUp = 3;

var width = spriteWidth/cols;
var height = spriteHeight/rows;

var curFrame = 0;
var frameCount = 4;

var x=0;
var y=0;

var srcX;
var srcY;

var left = false;
var right = false;
var up = false;
var down = true;

var speed = 12;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var characters = new Image();
characters.src = "characters.png";

function updateFrame(){
curFrame = ++curFrame % frameCount;
srcX = curFrame * width;
ctx.clearRect(x,y,width,height);

if(left && x>0){
srcY = trackLeft * height;
x-=speed;
}
if(right && x<300 && x<canvasWidth-width ){
srcY = trackRight * height;
x+=speed;
}
if(up && y>0){
srcY = trackUp * height;
y-=speed;
}
if(down && y<300 && y<canvasHeight-width){
srcY = trackDown * height;
y+=speed;
}
}


function draw(){
updateFrame();
ctx.drawImage(characters,srcX,srcY,width,height,x,y,width,height);
}


function moveLeft(){
  left = true;
  right = false;
  up = false;
  down = false;
}

function moveRight(){
  left = false;
  right = true;
  up = false;
  down = false;
}

function moveUp(){
  left = false;
  right = false;
  up = true;
  down = false;
}

function moveDown(){
left = false;
right = false;
up = false;
down = true;
}

setInterval(draw,100);
