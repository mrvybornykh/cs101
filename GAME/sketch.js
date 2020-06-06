let scr=0;
var GRAVITY = 0.2;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var br, ground;
var pipes;
let pixFont;
let regFont;
var gameOver;
let state;
let song;
var brImg, pipeImg, groundImg, bgImg;
function preload(){
   song= loadSound('Metal.mp3');
  pixFont = loadFont('BungeeShade-Regular.ttf'); // BungeeShade-Regular, PressStart2P-Regular, PaytoneOne-Regular, Jost.ttf
  regFont = loadFont('Jost.ttf');
}
    
function setup() {
 createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);  
   screen();
   state = 'start';
}

function draw() {
  
  if (state === 'start') {
    start();
  }
  else if(state === 'game') {
    game();
  }
  else if(state === 'over') {
    over();
  }
  
  if (state === 'start' && keyIsPressed && key === 'x') {
    state = 'game';
  }
  if (state === 'over' && keyIsPressed && key === 'r') {
    document.location.reload(true);
  }

}

function start() {
  background(20,100,250);
  fill(255, 171, 171);
  textFont(pixFont, 100);
  text("WELLCOME", 0, windowHeight/2 - 50);
  fill(255, 205, 205);
  textFont(regFont, 50);
  text("click to start and Press X ", 0 , windowHeight/2 + 50);
   if (song.isPlaying()) { 
    song.pause(); 
    } 
}

function game() {
  dw ();
}

function over() {
  camera.off();
  textSize(40);
  textAlign(CENTER, CENTER);
  background(255, 33, 33);
  fill(0, 50, 50);
  textFont(pixFont, width/15);
  text("GAME OVER", width/2, height/2 - 50);
  fill(50, 100, 205);
  textFont(regFont, width/20);
  text("Press R to restart", width/2, height/2 + 50);  
    if (song.isPlaying()) { 
    song.pause(); 
    } 
}
function  screen(){
  brImg = loadImage('emoji.png');
  groundImg = loadImage('black.png');
  bgImg = loadImage('black.png');

  br = createSprite(windowWidth / 2, windowHeight / 2, 40, 40);
  br.rotateToDirection = true;
  br.velocity.x = 4;
  br.setCollider('circle', 0, 0, 20);
  br.addImage(brImg);

  ground = createSprite(800 / 2, GROUND_Y + 100); //image 800x200
  ground.addImage(groundImg);

  pipes = new Group();
  
  gameOver = true;
  updateSprites(false);
  state = 'game';
  camera.position.y = windowHeight / 2;


}
function dw (){
 if ( gameOver && keyWentDown('x')){
   state = 'over';
    newGame();
  }
  if (!gameOver) {

    if (keyWentDown('x'))
      br.velocity.y = FLAP;

    br.velocity.y += GRAVITY;

    if (br.position.y < 0)
      br.position.y = 0;

    if (br.position.y + br.height / 2 > GROUND_Y){
      die();
    }

    if (br.overlap(pipes)){
      die(); 
    }
    //spawn pipes
    if (frameCount % 60 == 0) {
      var pipeH = random( 0, windowHeight/2);
      var pipe = createSprite(br.position.x + windowWidth, GROUND_Y - pipeH / 2 + 1 + 100, 200, pipeH);
      pipe.addAnimation('normal', 'v'+floor(random(0, 5))+'.png');
      pipes.add(pipe);
    }

    //get rid of passed pipes
    for (var i = 0; i < pipes.length; i++)
      if (pipes[i].position.x < br.position.x - windowWidth / 2)
        pipes[i].remove();
        

    camera.position.x = br.position.x + windowWidth / 4;

    //wrap ground
    if (camera.position.x > ground.position.x - ground.width + windowWidth / 2)
      ground.position.x += ground.width;
     background(0, 0, 0);
    camera.off();
        showScores();

    image(bgImg, 0, GROUND_Y - 190);
     // showScores();

    camera.on();

    drawSprites(pipes);
    drawSprite(ground);
    drawSprite(br);

  }


}

function die() {
  state = 'over';
  updateSprites(false);
  gameOver = true;

}

function newGame() {
  pipes.removeSprites();
  state = 'game';
  gameOver = false;
  updateSprites(true);
  br.position.x = windowWidth / 2;
  br.position.y = windowHeight / 2;
  br.velocity.y = 0;
  ground.position.x = 800 / 2;
  ground.position.y = GROUND_Y + 100;
  

}

function showScores() {
  textFont(regFont, 36);
  fill(0, 0, 200);
  image(brImg, 25, 43, 30, 30);
  text(int(br.position.x/100), 95, 50);
}
function mousePressed() {
  if (gameOver && state === 'game')
    newGame();
  br.velocity.y = FLAP;
  if (song.isPlaying()) { 
    song.pause(); 
  } else {
    song.play();
  }
}
