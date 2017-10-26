function Bamboo() {
	this.pos = createVector();
	this.vel = createVector(-4, 0);
	
	this.move = function() {
		this.pos.add(this.vel);
	}
  
	this.show = function() {
		imageMode(CENTER);
		image(bambImg, this.pos.x, this.pos.y);
	}
}