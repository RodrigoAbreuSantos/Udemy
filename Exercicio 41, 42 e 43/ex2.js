function ePaisagem(largura, altura){
    if (largura > altura ){
        return true;
    }
    return false;
}

const imagem = ePaisagem(1090, 700);
console.log(imagem);

const ePaisagem2 = (largura, altura) => largura > altura ? true : false;


const imagem2 = ePaisagem(1090, 700);
console.log(imagem2);