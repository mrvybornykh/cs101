let diam = 100;
let angle = 0;
let angle_inc = 8;
let lengthInc = 0;

function setup() {
   createCanvas(700, 700);
  noFill();
  noLoop();
  stroke(255,255,255);
}

function draw() {
  background(0);
  ellipse(width/2, height/2, diam, diam);
  
  for (let i = 0; i < 360 / angle_inc; i++) {
    push();
    stroke(255,255,255);
    translate(width/2, height/2);
    rotate(radians(angle));
    ellipse (50,50,100,100);
    ellipse (70,70,100,100);
    ellipse (100,100,100,100);
    rect (90,150,100,100);
   
    
    push();
    stroke(255,255,255);
    strokeWeight(1);
    
    pop();
    
    push();
    stroke(255,255,255);
    strokeWeight(2);
    
    pop();
    
    push();
    stroke(255,255,255);
    strokeWeight(3);
    
    pop();
    
    push();
    stroke(255,255,255);
    strokeWeight(4);
    
    ellipse (170,170,100,100);
    pop();
    
    pop();
    
    angle += angle_inc;
  }
    
}
