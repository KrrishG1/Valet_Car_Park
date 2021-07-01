canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var greencar_x = 5;
var greencar_y = 225;
var greencar_width = 75;
var greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	backgound_imgTag = new Image();
	backgound_imgTag.onload = uploadBackground;
	backgound_imgTag.src = background_image;

	greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgound_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
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
	if(greencar_y >= 0){
        greencar_y = greencar_y - 10;
        console.log("When up arrow pressed, x ="+ greencar_x +" | y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(greencar_y <= 500){
        greencar_y = greencar_y+ 10;
        console.log("When down arrow pressed, x ="+ greencar_x +" | y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencar_x >= 0){
        greencar_x = greencar_x - 10;
        console.log("When left arrow pressed, x ="+ greencar_x +" | y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(greencar_x <= 700){
        greencar_x = greencar_x + 10;
        console.log("When right arrow pressed, x ="+ greencar_x +" | y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}