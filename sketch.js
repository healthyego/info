


function setup(){
 background(0);
 createCanvas(1080,1920);
 vid= createVideo('Websitefootage.mov');
 vid.loop();


 instagram= createImg('Instagram.png','clickable');
 facebook= createImg('Facebook.png','clickable');
 HEGarten= createImg('HEGarten.png','clickable');




}

function draw(){



  push();

  HEGarten.position(0,0);
  HEGarten.size(1080, 595)
  //instagram.mousePressed(instagramLink);
  pop();


  instagram.position(1080/2-64,1600);
  instagram.size(64,64);
  instagram.mousePressed(instagramLink);

  facebook.position(1080/2+64,1600);
  facebook.size(64,64);
  facebook.mousePressed(facebookLink);

  push();
  image(vid,0,0);
  vid.hide();
  pop();

  textSize(50);
  fill(0);
  text('Freitag 19-23 Uhr',400,700);
  text('Samstag 19-23 Uhr',400,800);
  text('Sonntag 19-23 Uhr',400,900);
}





function facebookLink(){
 window.open("https://m.facebook.com/Healthy-Ego-993923804114169/");
 }

function instagramLink(){
 window.open("https://instagram.com/haelthyego");
 }
