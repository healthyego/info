function mousePressed(){
 window.open("https://instagram.com/haelthyego/")
}

function setup(){
 img = loadImage('Entwurf2b.png');
 createCanvas(windowWidth, windowHeight);
 background(80);
}

function draw(){ 
 imageMode(CENTER);
 image(img,windowWidth/2,windowHeight/2,height/1.7777,height); 
}
