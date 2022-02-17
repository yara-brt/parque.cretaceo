
//botao jogar
var xMinJ=175;
var largJ=150;
var xMaxJ=xMinJ+largJ;
var yMinJ=200;
var altJ=45;
var yMaxJ=yMinJ+altJ;
//botao instruções
var xMinI=175;
var largI=150;
var xMaxI=xMinI+largI;
var yMinI=270;
var altI=45;
var yMaxI=yMinI+altI;
//botao creditos
var xMinC=175;
var largC=150;
var xMaxC=xMinC+largC;
var yMinC=340;
var altC=45;
var yMaxC=yMinC+altC;
//botao voltar
var xMinV=50;
var largV=40;
var xMaxV=xMinV+largV;
var yMinV=50;
var altV=40
var yMaxV=yMinV+altV;
//botao tente de novo
var xMinT=175;
var largT=150;
var xMaxT=xMinT+largT;
var yMinT=250;
var altT=45;
var yMaxT=yMinT+altT;
//botao menu
var xMinM=175;
var largM=150;
var xMaxM=xMinM+largM;
var yMinM=320;
var altM=45;
var yMaxM=yMinM+altM;

//jogo
collision=false; colb1=false;
var f1, f2, f3, f4, f5;
var xm=430, ym=411;
//fase1
var xMinRC1=100, yMinR=350;
var lR=125, aR=40, xMaxRC1=xMinRC1+lR, yMaxR=yMinR+aR;
var xMinRE1=275, xMaxRE1=xMinRE1+lR;
//fase2
var xMinRC2=100, xMaxRC2=xMinRC2+lR;
var xMinRE2=275, xMaxRE2=xMinRE2+lR;
//fase3
var xMinRC3=100, xMaxRC3=xMinRC3+lR;
var xMinRE3=275, xMaxRE3=xMinRE3+lR;
//fase4
var xMinRC4=100, xMaxRC4=xMinRC4+lR;
var xMinRE4=275, xMaxRE4=xMinRE4+lR;
//fase5
var xMinRC5=100, xMaxRC5=xMinRC5+lR;
var xMinRE5=275, xMaxRE5=xMinRE5+lR;
var c=0;
var i=0;
var snd;
var dis;
var soundon, soundoff;
var xMinO=440, yMinO=15;
var xMaxO=xMinO+40;
var yMaxO=yMinO+40;
var vidas=10;
var tempo=0;
var andar=0;
var jump=false, fall=false;
var yChao=390;
var girl=[],xg, yg;
var bloco, bloco2=[], xb=200, yb=450, xl=50, xb2=260, yb2=360, yl=29;
var bloco3, xb3=50, yb3=275;
var bloco4, xb4=450, yb4=320;
var heart=[];
var open, clos;
//foto ins
var dino=[];
var xd, yd=375;
var pte=[];
var xp=350, yp=250;
//var pte2=[], xp2=450, yp2=270;
//creditos
var picProg;
var picEdu;
//voltar
var picVoltar;
//backgrounds
var picBackMenu, picBackIns, picBackCred, picBackOver, picBackGame;
var fonte;


var tela=0

function telaMenu(){
  background(picBackMenu);
  //nome do jogo
  textSize(60);
  fill(10);
  textFont(fonte)
  text('Parque Cretáceo', 65, 120);
  //jogar
  fill(90);
  if(mouseX>xMinJ && mouseX<xMaxJ && mouseY>yMinJ &&       mouseY<yMaxJ){
    if(mouseIsPressed){
      tela=1
    }
    fill(190);
  }
  rect(xMinJ, yMinJ, largJ, altJ, 15);
  textSize(30);
  fill(300);
  text('Jogar', xMinJ+42, yMinJ+37);
  //instruções
  fill(90);
  if(mouseX>xMinI && mouseX<xMaxI && mouseY>yMinI &&       mouseY<yMaxI){
    if(mouseIsPressed){
      tela=2;
    }
    fill(190);
  }
  rect(xMinI, yMinI, largI, altI, 15);
  textSize(28);
  fill(300);
  text('Instruções', xMinI+17, yMinI+37);
  //creditos
  fill(90);
  if(mouseX>xMinC && mouseX<xMaxC && mouseY>yMinC &&       mouseY<yMaxC){
    if(mouseIsPressed){
      tela=3;
    }
    fill(190);
  }
  image(soundon, xMinO, yMinO);
  if(mouseX>xMinO && mouseX<xMaxO && mouseY>yMinO &&       mouseY<yMaxO){
    if(mouseIsPressed){
      snd.play();
    }
  }
  rect(xMinC, yMinC, largC, altC, 15)
  textSize(28);
  fill(300);
  text("Créditos", xMinC+30, yMinC+37)
}

function move(){
  if(keyIsDown(LEFT_ARROW)){
    xg-=3 && xg>0;
  
  }
  /*else if(keyIsDown(RIGHT_ARROW)){
    xg+=3;
  
  }*/
  if(keyIsDown(UP_ARROW)/*&& !jump*/){
    jump=true;
    yg=yChao-150
  }
  if(jump){
    if(yg<yChao){
    yg=yg+3;
    xg=80
    
    
    }
    else{
      jump=false;
      yg=yChao;
      
    }
  }
  collision=collideRectRect(xg,yg,64,64,xp,yp,84,77);
  
  collision=collideRectRect(xg,yg,64,64,xd,yd,10,80);
  if(collision==true){
    i++
    tela=5
    /*if(i==2){
      tela=6
      if(i==3){
        tela=7
        if(i==4){
          tela=8
          if(i==5){
            tela=9
          }
        }
      }
    }*/
  }
  
//dino
  if(xd>=-100 && xd<=500 && yd>=-100 && yd<=500){
    xd=xd-1;
  }
  else{
    xd=500;
  }
//pte
  if(xp>=-50 && xp<=500 && yp>=-50 && yp<=500){
    xp=xp-1;
  }
  else{
    xp=500;
  }
  
//chao
  if(xb>=-50 && xb<=500){
    xb=xb-1;
  }
  else{
    xb=500;
  }
  if(xb2>=-150 && xb2<=500){
    xb2=xb2-1;
  }
  else{
    xb2=500;
  }
  if(xb3>=-150 && xb3<=500){
    xb3=xb3-1;
  }
  else{
    xb3=500;
  }
  if(xb4>=-150 && xb4<=500){
    xb4=xb4-1;
  }
  else{
    xb4=500;
  }
  if(xm>=-100 && xm<=500 && ym>=-100 && ym<=500){
    xm=xm-1;
  }
  else{
    xm=500;
  }

}
 
function telaJogo(){
  //background(80); 
  background(picBackGame);
  textSize(20);
  text(vidas,50,50);
//personagem;
  //andar++;
  image(girl[c%6], xg,yg);
  if(tempo>6){
    c++;
    tempo=0;
  }
  
//inimigos
  if(collision==true){
    xg=40;
    i++
  }
  if(i==1){
    tela=5
  }
  tempo++;
  image(dino[c%8], xd,yd);
  if(tempo>6){
    c++;
    tempo=0; 
  }
  image(pte[c%3], xp, yp);
  if(tempo>20){
    c++;
    tempo=0;
  }
  
//colisão 
  
  
  

//tileset
  image(heart[0],46,30);
  textSize(15);
  textFont(fonte);
  text(vidas,59,53);
}

function tileset(){
  image(bloco, xb+xl*12, yb);
  image(bloco, xb+xl*11, yb);
  image(bloco, xb+xl*10, yb);
  image(bloco, xb+xl*9, yb);
  image(bloco, xb+xl*8, yb);
  image(bloco, xb+xl*7, yb);
  image(bloco, xb+xl*6, yb);
  image(bloco, xb+xl*5, yb);
  image(bloco, xb+xl*4, yb);
  image(bloco, xb+xl*3, yb);
  image(bloco, xb+xl*2, yb);
  image(bloco, xb+xl, yb);
  image(bloco, xb, yb);
  image(bloco, xb-xl,yb);
  image(bloco, xb-xl*2, yb);
  image(bloco, xb-xl*3, yb);
  image(bloco, xb-xl*4, yb);
  image(bloco, xb-xl*5, yb);
  image(bloco, xb-xl*6, yb);
  image(bloco, xb-xl*7, yb);
  image(bloco, xb-xl*8, yb);
  image(bloco, xb-xl*9, yb);
  image(bloco, xb-xl*10, yb);
  image(bloco, xb-xl*11, yb);
  image(bloco, xb-xl*12, yb);
  image(bloco, xb-xl*13, yb);
  image(bloco, xb-xl*14, yb);
  image(bloco, xb-xl*15, yb);
  
}

function gameOver(){
  background(picBackOver);
  fill(139,0,0);
  textFont(fonte);
  textSize(70);
  text('game over', 116,155);
  image(soundoff, xMinO, yMinO);
  if(mouseX>xMinO && mouseX<xMaxO && mouseY>yMinO &&               mouseY<yMaxO){
    if(mouseIsPressed){
      snd.play();
      image(soundon, xMinO, yMinO);
    }
  }
  //botao try again
  fill(90);
  if(mouseX>xMinT && mouseX<xMaxT && mouseY>yMinT &&               mouseY<yMaxT){
    if(mouseIsPressed){
      tela=1
      }
  
    fill(190);
  }
  rect(xMinT, yMinT, largT, altT, 15);
  textSize(22);
  fill(300);
  textFont(fonte);
  text('Tentar de novo', xMinT+13, yMinT+35);
  //botao menu
  fill(90);
  if(mouseX>xMinM && mouseX<xMaxM && mouseY>yMinM &&       mouseY<yMaxM){
    if(mouseIsPressed){
      tela=0
    }
    fill(190);
  }
  rect(xMinM, yMinM, largM, altM, 15);
  textSize(25);
  fill(300);
  textFont(fonte);
  text('menu', xMinM+50, yMinM+35)
}

function telaIns(){
  background(open);
  fill(90);
  if(mouseX>=xMinV && mouseX<=xMaxV && mouseY>=yMinV &&       mouseY<=yMaxV){
    if(mouseIsPressed){
      tela=0;
    }
  }
  image(soundon,  xMinO, yMinO);
  if(mouseX>xMinO && mouseX<xMaxO && mouseY>yMinO &&       mouseY<yMaxO){
    if(mouseIsPressed){
      snd.play();
    }
  }
  fill(300);
  circle(xMinV,yMinV,largV);
  //instruções
  textSize(34);
  fill(10);
  textFont(fonte);
  text('Instruções', 172,68);
  //objetivo
  textSize(20);
  text('Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos',50,300, 260);
  textSize(28);
  text('Objetivo', 80, 150);
  textSize(20);
  text('Escape dos dinossauros ou responda as perguntas', 50, 200, 190);
  //controles
  textSize(28);
  text('Controles', 320, 150);
  //inimigos
  textSize(28);
  text('Inimigos', 333, 350);
  //imagens
  image(dino[0], 290, 370);
  image(pte[0], 380, 342);
  image(picCon1, 340, 180, 70, 70);
  image(picVoltar, 14, 13, 74, 73);
  
}

function telaCred(){
  background(open);
  fill(90);
  if(mouseX>xMinV && mouseX<xMaxV && mouseY>yMinV &&       mouseY<yMaxV){
    if(mouseIsPressed){
      tela=0;
    }
  }
  image(soundon, xMinO, yMinO);
  if(mouseX>xMinO && mouseX<xMaxO && mouseY>yMinO &&       mouseY<yMaxO){
    if(mouseIsPressed){
      snd.play();
    }
  }
  fill(300);
  circle(xMinV,yMinV,largV);
  //Créditos
  textSize(40);
  fill(10);
  textFont(fonte);
  text('Créditos', 185, 90);
  //nome
  textSize(28);
  text('Yara Barreto', 180, 150);
  //função
  textSize(17);
  text('Programadora', 204, 175);
  //ocupação
  textSize(18);
  text('Graduanda em Engenharia Ambiental,         na Universidade Federal do Rio                               Grande do Norte', 125, 203, 260);
  //nome
  textSize(28);
  fill(0,0,0);
  text('Carmen Barreto', 165, 330);
  //função
  textSize(18);
  text('Educadora', 215, 360);
  //ocupação
  textSize(18);
  text('  Graduada em Pedagogia na Universidade Vale do Acaraú', 154,390,260);
  fill(0, 102, 153);
  //imagens
  image(picProg, 10, 130, 90, 120);
  image(picEdu, 10, 300,90,120);
  image(picVoltar, 14, 13, 74, 73);
}

function fase1(){
  background(open);
  textFont(fonte);
  textSize(60);
  fill(10);
  text("fase 1", 190, 190);
  textSize(45);
  textFont("times new roman");
  text("50 x 7", 195, 300);
  fill(90);
  if(mouseX>xMinRC1 && mouseX<xMaxRC1 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas
    }
    fill(190);
  }
  rect(xMinRC1, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("350",145,380);
  fill(90);
  if(mouseX>xMinRE1 && mouseX<xMaxRE1 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas-1
    }
    fill(190);
  }
  rect(xMinRE1, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("450",320,380);
}

function fase2(){
  background(open);
  textFont(fonte);
  textSize(60);
  fill(10);
  text("fase 2", 180, 190);
  textSize(45);
  textFont("times new roman");
  text("460 - 38", 178, 300);
  fill(90);
  if(mouseX>xMinRC2 && mouseX<xMaxRC2 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas
    }
    fill(190);
  }
  rect(xMinRC2, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("422",145,380);
  fill(90);
  if(mouseX>xMinRE2 && mouseX<xMaxRE2 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas-1
    }
    fill(190);
  }
  rect(xMinRE2, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("412",320,380);
}

function fase3(){
  background(open);
  textFont(fonte);
  textSize(60);
  fill(10);
  text("fase 3", 180, 190);
  textSize(45);
  textFont("times new roman");
  text("20 x 4 + 2", 158, 300);
  fill(90);
  if(mouseX>xMinRC3 && mouseX<xMaxRC3 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas-1
    }
    fill(190);
  }
  rect(xMinRC2, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("120",145,380);
  fill(90);
  if(mouseX>xMinRE3 && mouseX<xMaxRE3 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas
    }
    fill(190);
  }
  rect(xMinRE3, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("82",327,380);
}

function fase4(){
  background(open);
  textFont(fonte);
  textSize(60);
  fill(10);
  text("fase 4", 180, 190);
  textSize(45);
  textFont("times new roman");
  text("40 x 7 - 80", 153, 300);
  fill(90);
  if(mouseX>xMinRC4 && mouseX<xMaxRC4 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas-1
    }
    fill(190);
  }
  rect(xMinRC2, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("80",152,380);
  fill(90);
  if(mouseX>xMinRE4 && mouseX<xMaxRE4 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas
    }
    fill(190);
  }
  rect(xMinRE4, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("200",322,380);
}

function fase5(){
  background(open);
  textFont(fonte);
  textSize(60);
  fill(10);
  text("fase 5", 180, 190);
  textSize(45);
  textFont("times new roman");
  text("37 x 8 ÷ 4", 160, 300);
  fill(90);
  if(mouseX>xMinRC3 && mouseX<xMaxRC3 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas
    }
    fill(190);
  }
  rect(xMinRC2, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("74",152,380);
  fill(90);
  if(mouseX>xMinRE3 && mouseX<xMaxRE3 && mouseY>yMinR &&       mouseY<yMaxR){
    if(mouseIsPressed){
      tela=1
      vidas=vidas-1
    }
    fill(190);
  }
  rect(xMinRE3, yMinR, lR, aR, 15);
  textSize(25);
  fill(300);
  textFont("times new roman");
  text("82",327,380);
}

function preload(){
  soundFormats('ogg');
  snd=loadSound("assets/random silly chip song.ogg");
  soundon=loadImage('assets/soundon.png');
  soundoff=loadImage('assets/soundoff.png');
  bloco=loadImage('bloco.png');
  bloco2[c]=loadImage('bloco2.png');
  bloco3=loadImage('bloco2.png');
  bloco4=loadImage("bloco2.png");
  //personagem
  for(c=0;c<6;c++){
  girl[c]=loadImage('assets/girl'+c+'.png');
  }
  
  //dino
  for(c=0;c<8;c++){
  dino[c]=loadImage('assets/dino'+c+'.png');
  }
  
  //pte
  for(c=0;c<3;c++){
  pte[c]=loadImage('assets/pte'+c+'.png');
  }
  /*for(c=0;c<3;c++){
  pte2[c]=loadImage('assets/pte'+c+'.png');
  }*/
  //jogo
  heart[0]=loadImage('assets/heart.png');
  //menu
  picProg=loadImage('foto.jpg');
  picEdu=loadImage('edu.jpg');
  picPte1=loadImage('pte1.png');
  picCon1=loadImage('setas.png');
  open=loadImage('assets/open.png');
  picVoltar=loadImage('return-button.png');
  picBackGame=loadImage('assets/backGame.png');
  picBackMenu=loadImage('back menu.jpg');
  picBackOver=loadImage('assets/backOver.png');
  fonte=loadFont('fonte.ttf');
}

function setup() {
  createCanvas(500, 500);
  xg=40;
  yg=390;
  
  
  
  snd.play()
}

function draw() {
  
  move();
  
  if(tela==0){
    telaMenu()
  }
  if(tela==1){
    telaJogo()
    tileset()
  }
  if(tela==2){
    telaIns()
  }
  if(tela==3){
    telaCred()
  }
  if(tela==4){
    gameOver()
  }
  if(tela==5){
    fase1()
  }
  if(tela==6){
    fase2()
  }
  if(tela==7){
    fase3()
  }
  if(tela==8){
    fase4()
  }
  if(tela==9){
    fase5()
  }
  if(vidas<=0){
    tela=4
  }
  
  

}