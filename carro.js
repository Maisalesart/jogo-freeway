//Código carro

let xCarros = [550, 550, 550,550, 550, 550];
let yCarros = [40, 96, 150, 210, 270, 318];
let comprimentoCarros = 50
let alturaCarros = 40
let velocidadeCarros = [2.0, 2.8 , 4.5, 3.0, 4.0, 3.2];


function mostraCarro(){
  for(let i=0; i<imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i],yCarros[i],comprimentoCarros,alturaCarros);
    }
}

function movimentaCarro(){
  for(i=0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
      }
}

function voltaPosicaoInicialCarro(){
  for(i=0; i<imagensCarros.length; i++)
    if (carroPassouDaTela(xCarros[i])){
      xCarros[i] = 550;
    }
 
}

function carroPassouDaTela(xCarros){
  return (xCarros < -45);
}




