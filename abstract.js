function setup() {
  createCanvas(400, 400);
  background (int(random(0,255)),int(random(0,255)),int(random(0,255)));
  let x = 10;
  let y = 10;
  translate (200,200);
  for (i = 0; i<20; i = i +1)
  {
    x = x +10;
    y = y +10;
    fill (int(random(0,255)),int(random(0,255)),int(random(0,255)));
  ellipse (0,100,400 - x,200 - y)
    ellipse (100,-100,200 - x,200 - y)
  ellipse (-100,-100,200 - x,200 - y)
    
  }

}
