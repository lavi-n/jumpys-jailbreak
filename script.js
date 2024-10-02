//Use the mouse to move the paddle from left to right. Keep the ball in the air. If it touches the ground, you lose.

/* VARIABLES */
let paddle, ball;
let score = 0;
let img1, img2, img3;
let win, lose, start;
let winResetButton;
let screen = 0;
let musicbutton;

/* PRELOAD LOADS FILES */
function preload() {
  sound1 = loadSound('assets/pop.wav');
  img1 = loadImage('assets/1.png');
  img2 = loadImage('assets/2.png');
  img3 = loadImage('assets/3.png');
  catcher = loadImage("assets/paddle.png");
  avatar = loadImage("assets/ball.png");
  winImg = loadImage("assets/heart.png");
  loseImg =loadImage("assets/heart.png");
  startImg = loadImage("assets/heart.png");
  bg1 = loadImage("assets/bg1.png");
  bg2 = loadImage("assets/bg2.png");
  bg3 = loadImage("assets/bg3.png");
  bgx = loadImage("assets/bgx.png");  
  bu1 = loadImage("assets/b1.png");
  bu2 = loadImage("assets/b2.png");
  bu3 = loadImage("assets/b3.png");
  bu4 = loadImage("assets/Start.png");
  info = loadImage("assets/Untitled design (1).png");
  f = loadImage("assets/Untitled design (2).png");
}

