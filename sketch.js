let img;
let vid;
let card;

function preload(){
  img = loadImage('/ManMadeHorrors.jpg');
  vid = createVideo('/SSMath.mp4');
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function setup() {
  createCanvas(1000, 700, WEBGL);
  card = box(100,100,100)
  describe('spinning cube with a texture from an image');
}

function draw() {
  background(1000);
  //pass image as texture
  
  ambientLight(123);
  ambientMaterial(255, 127, 80);

  //card = box(100,100,100);
  
  texture(img);
  push();
  rectMode(CENTER);
  translate(width / 9, height / 9);
  translate(p5.Vector.fromAngle(millis() / 730, 270));
  rect(1000, 1000, 20, 20);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100,100,100);
  pop();

  if(mouseIsPressed){
    texture(img);
  }else{
    texture(vid);
  }
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100,100,100);
  pop();
}
