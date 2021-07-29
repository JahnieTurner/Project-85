canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
car_width=75;
car_height=100;

background_image = "parkingLot.jpg";
car_image = "car2.png";

carX=5;
carY=225;
function add() {
background_imageTag=new Image();
background_imageTag.onload=uploadBackground;
background_imageTag.src=background_image;

car_imageTag=new Image();
car_imageTag.onload=uploadcar;
car_imageTag.src=car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,800,400)
}

function uploadcar() {
	ctx.drawImage(car_imageTag,carX,carY,car_width,car_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(carY>0){
	carY=carY-10;
	uploadBackground()
	uploadcar()
}
}

function down()
{
	if(carY<225){
		carY=carY+10;
		uploadBackground()
		uploadcar()
	}
}

function left()
{
	if(carX>0){
		carX=carX-10;
		uploadBackground()
		uploadcar()
	}
}

function right()
{
	if(carX<795){
		carX=carX+10;
		uploadBackground()
		uploadcar()
	}
}
