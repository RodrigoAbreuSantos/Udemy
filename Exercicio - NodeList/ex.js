const paragrafos = document.querySelector('.paragrafos');
const paragrafosFilhos = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body); // criou uma varaivel que vai pegar o body
const backgroundColorBody = estilosBody.backgroundColor; // aqui vai pegar a cor de fundo do body


for (let paragraf of paragrafosFilhos){
    paragraf.style.backgroundColor = backgroundColorBody; // esta colocando o paragrafo com a cor de fundo do body
    paragraf.style.color = 'white';
}

