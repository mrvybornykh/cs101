function preload() {
soundFormats('mp3', 'ogg');
ost = loadSound('eight/cherry.mp3');
}

function setup() {
ost.setVolume(0.1);
ost.play()
f=300;
f1=250;
f2=200;
f3=150;
f4=100;
f5=50;
f6=0;
f7=550;
f8=500;
f9=450;
f10=400;
f11=350;
createCanvas(500, 500);
rectMode(CORNERS);
noStroke();
}

function draw() {
background(random(180,255));
m = f - 50;
m1 = f1 - 50;
m2 = f2 - 50;
m3 = f3 - 50;
m4 = f4 - 50;
m5 = f5 - 50;
m6 = f6 - 50;
m7 = f7 - 50;
m8 = f8 - 50;
m9 = f9 - 50;
m10 = f10 - 50;
m11 = f11 - 50;
fill(mouseX,0,255-mouseY,255);
rect(f,0,m,500);
fill(mouseY,0,255-mouseY,220);
rect(f1,0,m1,500);
fill(mouseX,0,255-mouseY,200);
rect(f2,0,m2,500);
fill(mouseY,0,255-mouseY,180);
rect(f3,0,m3,500);
fill(mouseX,0,255-mouseY,150);
rect(f4,0,m4,500);
fill(mouseY,0,255-mouseY,50);
rect(f5,0,m5,500);
fill(mouseX,0,255-mouseY,100);
rect(f6,0,m6,500);
fill(mouseY,0,255-mouseY,150);
rect(f7,0,m7,500);
fill(mouseX,0,255-mouseY,180);
rect(f8,0,m8,500);
fill(mouseY,0,255-mouseY,200);
rect(f9,0,m9,500);
fill(mouseX,0,255-mouseY,220);
rect(f10,0,m10,500); 
fill(mouseY,0,255-mouseY,255);
rect(f11,0,m11,500);
f++;
f1++;
f2++;
f3++;
f4++;
f5++;
f6++;
f7++;
f8++;
f9++;
f10++;
f11++;
if(f==550){f=0}
if(f1==550){f1=0}
if(f2==550){f2=0}
if(f3==550){f3=0}
if(f4==550){f4=0}
if(f5==550){f5=0}
if(f6==550){f6=0}
if(f7==550){f7=0}
if(f8==550){f8=0}
if(f9==550){f9=0}
if(f10==550){f10=0}
if(f11==550){f11=0}
}
