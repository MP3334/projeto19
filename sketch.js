var menina, meninacorrendo, pulando;
var chao
var chaoimagens
var Flores, flor, imagemflor

function preload(){
meninacorrendo = loadAnimation("garotinha/Run1.png","garotinha/Run2.png","garotinha/Run3.png","garotinha/Run4.png");
pulando = loadAnimation("Jump1.png","Jump2.png", "Jump3.png", "Jump4.png", "Jump5.png", "Jump6.png");
chaoimagens = loadImage("ground.png");
imagemflor = loadImage("Flordoamor.png");
}
function setup() {
 createCanvas(650, 250)
 menina = createSprite(40, 150);
 menina.addAnimation("correndo", meninacorrendo);
 menina.addAnimation("pulando", pulando);
 menina.scale = 0.25
 chao = createSprite(600, 228);
 chao.addImage(chaoimagens);
 Flores = new Group()
}

function draw() {
 background("skyblue");
 drawSprites()
 menina.velocityY +=0.5;
 menina.collide(chao);

 if (keyDown("space") && menina.y >145) { 
    menina.velocityY = -7; 
    menina.changeAnimation("pulando");
 }
 console.log(menina.y)
 chao.velocityX = -5

 if (chao.x <0) {
    chao.x = chao.width/2
 }
 criarFlor();
}

function criarFlor(){
     if (frameCount%80===0) {
         flor = createSprite(650, 190, 20,10);
          flor.velocityX = -5;
           flor.scale = 0.03;
            flor.lifetime = 250;
            flor.addImage(imagemflor);
             Flores.add(flor);
   } 
}