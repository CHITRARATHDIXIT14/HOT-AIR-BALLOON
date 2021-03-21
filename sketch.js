var balloon,balloonImg
var bg
var database
var position

function preload (){

balloonImg=loadImage("sprites/ba.png")
bg=loadImage("sprites/bg2.png")

}


function setup() {
  createCanvas(1200,600);
  balloon=createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg)
}





function draw() {
  background(bg); 
  
  
if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
}
if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y+10;
  balloon.scale=balloon.scale+0.008;
}
if(keyDown(UP_ARROW)){
  balloon.y = balloon.y-10;
  balloon.scale=balloon.scale-0.008;
}

var balloonposition=database.ref('balloon/height')
balloonposition.on("value",readposition,showError)


//MAM IT IS THROWING AN ERROR THAT REF IS UNDEFINED

readHeight();
UpadateHeight();


  drawSprites();
  stroke(255,0,0)
  fill("orange")
  textSize(30)
  text("USE ARROWS TO MOVE THE HOT AIR BALLOON",50,30)
}

function UpadateHeight(){
database.ref('balloon/height').set({
'x': height.x + x ,
'y': height.y + y
})
}

function readHeight(){
height = data.val();
balloon.x = height.x
balloon.y = height.y
}

function showError(){

  console.log("ERROR IN A DATABASE")

}