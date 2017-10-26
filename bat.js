function Bat() {
    this.pos = createVector(100, height / 2);
    this.vel = createVector();
	this.life = true;
    
    this.drop = function() {
		if(this.life) {
			this.vel.y += gravity;
			this.pos.add(this.vel);
        
			if(this.pos.y + batImg.height / 2 >= height || this.pos.y - batImg.height / 2 <= 0) {
				this.life = false;
			}
		}
    }
    
    this.up = function() {
		if(this.life)
			this.vel.y = -8;
    }
	
	this.collision = function(b) {
		if((Math.abs(this.pos.x - b.pos.x) <= batImg.width / 2 + bambImg.width / 2) &&
		   (Math.abs(this.pos.y - b.pos.y) <= batImg.height / 2 + bambImg.height / 2)
		) {
			this.life = false;
			return true;
		}
		
		return false;
	}
    
    this.show = function() {
        imageMode(CENTER);		
        image(batImg, this.pos.x, this.pos.y);
    }
	
	this.reset = function() {
		this.pos.set(100, height / 2);
		this.vel.mult(0);
		this.life = true;
	}
}