var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  chão = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
  correndo = loadAnimation("Jake1.png", "Jake2.pNg", "jake3.png", "jake4.PNG", "jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 rua = createSprite(200, 200, 50, 50)
 rua.addImage("chão", chão)
 rua.scale=1.5;

 jake = createSprite(200, 200, 10, 10)

 jake.addAnimation("correndo", correndo)

parede1 = createSprite(10, 200, 5, 400 )
parede1.shapeColor = "white"
parede2 = createSprite(397, 200, 5, 400 )
parede2.shapeColor = "white"
}

function draw() {
  background(0);
  rua.velocityY = 10;
  
  // mover o menino com o mouse usando mouseX
  jake.x = mouseX

  edges= createEdgeSprites();

  // colidir o menino com os limites invisíveis da esquerda e da direita
  jake.collide(parede1)
  jake.collide(parede2)
  //código para redefinir o fundo
  if(rua.y > 400 ){
    rua.y = height/2;
  }
  
  drawSprites();
}
