var n;
var img;

function preload(){
 img=loadImage("Entwurf2b.png");
}


function setup(){
 n=random(0,1);
 createCanvas(1080,1920);
 background(img);
}
 
 function mousePressed(){
  window.open("https://instagram.com/haelthyego/")
}

