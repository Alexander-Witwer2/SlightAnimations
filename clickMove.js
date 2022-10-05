let img;
let vid;
let x;
let y;
let j;

function setup() {
    createCanvas(1000, 700, WEBGL);
    img = loadImage('/heart.png');
    vid = createVideo('/SSMath.mp4');
    vid.elt.muted = true;
    vid.loop();
    vid.hide();

    x=100;
    y=80;
    j=0;
    noStroke();
    describe('For Testing moving on click');
}

function draw(){
    background(255, 204, 100);
    texture(vid);
    rotateX(radians(j));
    translate(x,y,y);
    plane(200,200);
    x+=1;
    y+=1;
    if(x<-300){
        x=1;
        y=1;
    }
    if(x>300){
        x=-1;
        y=-1;
    }
}

function mouseClicked(){
    x=0;
    y=0;
    j+=180;
    plane(100,100);
    redraw();
}

function keyPressed(){
    x+=1;
    y+=1;
    loop();
}