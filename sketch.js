var batImg;
var bgImg;
var bambImg;

var bat;
var bamboos = [];

var paused = true;
var score = 0;
const gravity = 0.618; 

function preload() {
    batImg = loadImage('bat.png');
	bambImg = loadImage('bamboo.png');
    bgImg = loadImage('bg-nite.png');
}

function setup() {
    createCanvas(331, 480);
	
    bat = new Bat();
	for(var i = 0; i < 2; i++)
		bamboos[i] = new Bamboo();
	
	bamboosReset();
}

function draw()
{
    imageMode(CORNER);
	image(bgImg, 0, 0);
  
	for(var i = 0; i < 2; i++) {
		bamboos[i].show();
	}
  
	bat.show();
  
	if(!paused) {
		for(var i = 0; i < 2; i++) {
			bamboos[i].move();
      
			if(bat.collision(bamboos[i])) 
				paused = true;
            
			if(bamboos[i].pos.x - bambImg.width / 2 <= 0) {
				score++;
				bamboosReset();
			}
		}
        
		bat.drop();
	}
  
	if(!bat.life)
		paused = true;
    
	fill(255, 150);
	textSize(15);
	text("Score: ", 15, 25);
	text(score, 65, 25);
}

function keyPressed() {
	if(key == 'p' || key == 'P') {
		paused = true;
	} else if(key == ' ') {
		if(!paused && bat.life) {
			bat.up();
		} else if(paused && bat.life) {
			paused = false;
		} else {
			bat.reset();
			bamboosReset();
			paused = true;
			score = 0;
		}
	}
}

function bamboosReset() {
	var yoff = random(bambImg.height / 2);
	bamboos[0].pos.set(width + bambImg.width / 2, yoff);
	bamboos[1].pos.set(width + bambImg.width / 2, yoff + bambImg.height + 100);
}
