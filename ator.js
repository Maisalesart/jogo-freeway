//Código Ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemAtor, xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor-=3;
  }
   if(keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
     yAtor+=3;
   }
  }
     
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao(){
  
  for (let i=0; i < imagensCarros.length; i++){
    
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
    
     if(colisao){
       voltaPosicaoInicial();
       somColidiu.play();
       if(pontosMaiorQueZero()){
         meusPontos -= 1
       }
      
  }
    
  }
  
}

function voltaPosicaoInicial(){
  
    yAtor = 366;
  
}

function mostraPontos(){
  text(meusPontos, width/5, 27);
  textAlign(CENTER);
  textSize(25);
  fill(color(199,21,133)); 
}
function marcaPontos(){
  if(yAtor < 15 ){
    meusPontos += 1
    somPontos.play();
    voltaPosicaoInicial();
    
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
   }

function podeSeMover(){
  return yAtor<366;
}
















