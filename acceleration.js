let position; // p
let velocity; // v
let acceleration; // a
let p;
let w=15;
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  position = createVector(0, 0);
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
  p=createVector(width/2,height/2);
}
function draw() {
  background(220);
  acceleration.x = mouseX - position.x;
  acceleration.y = mouseY - position.y;
  acceleration.normalize();
  acceleration.mult(0.9);
  velocity.add(acceleration);
  velocity.limit(5); 
  position.add(velocity);
  rect(position.x, position.y, w, 15);
  ellipse(p.x,p.y,15,15);
if( position.y < height-w/2 && p.x >position.x && p.y<position.y){
	    p.x= random(width-w,0);
        p.y=random(0,height-w);
          w+=1;
	    }
  if(w >=width/2){
      background(180);
      text("YOU WIN " ,  width/2,height/2 )
     }
}
