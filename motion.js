function setup() {
  n =160;
  n2=120;
  n3=80;
  n4=40;
  n5=0;
  n6=280;
  n7=240;
  n8=200;
  createCanvas(280, 255);
  rectMode(CORNERS);
  noStroke();
}

function draw() {
  background(220);
  m = n - 40;
  m2 = n2 - 40;
  m3 = n3 - 40;
  m4 = n4 - 40;
  m5 = n5 - 40;
  m6 = n6 - 40;
  m7 = n7 - 40;
  m8 = n8 - 40;
  fill(mouseY,0,255-mouseY,255);
  rect(n,0,m,255);
  fill(mouseY,0,255-mouseY,200);
  rect(n2,0,m2,255);
  fill(mouseY,0,255-mouseY,150);
  rect(n3,0,m3,255);
  fill(mouseY,0,255-mouseY,100);
  rect(n4,0,m4,255);
  fill(mouseY,0,255-mouseY,50);
  rect(n5,0,m5,255);
  fill(mouseY,0,255-mouseY,100);
  rect(n6,0,m6,255);
  fill(mouseY,0,255-mouseY,150);
  rect(n7,0,m7,255);
  fill(mouseY,0,255-mouseY,200);
  rect(n8,0,m8,255);
  n++;
  n2++;
  n3++;
  n4++;
  n5++;
  n6++;
  n7++;
  n8++;
  if(n==320){n=0}
  if(n2==320){n2=0}
  if(n3==320){n3=0}  
  if(n4==320){n4=0}
  if(n5==320){n5=0}  
  if(n6==320){n6=0}
  if(n7==320){n7=0}  
  if(n8==320){n8=0}
}