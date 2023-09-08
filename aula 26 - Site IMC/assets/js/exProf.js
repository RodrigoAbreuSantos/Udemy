//capturar o evento de submit do formulario

const form = document.querySelector('.form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso'); // o target vai informar o elemento que esta recebendo o evento
    const inputAltura = evento.target.querySelector('#altura'); // ele quer pegar de dentro desse elemento que é o form ele quer pegar a altura

    const peso = Number(inputPeso.value); // ele vai transformar o inputPeso em um numero e vai pegar o valor dele
    const altura =  Number(inputAltura.value);

    if (!peso){ // se o peso não for verdadeiro, ou seja se ele não for numero retorna
        setResultado('Peso Invalido', false);
        return;
    }
    if (!altura){
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getIMC(peso, altura);

    const nivel = getNivelIMC(imc);

    const msg = `Seu IMC é: ${imc} (${nivel})`;

    setResultado(msg, true);
    

    console.log(imc, nivel);
});

function getIMC(peso, altura){
    const imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function getNivelIMC(resultado){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; 
    if (resultado < 18.5){
        return nivel[0];
    }
    else if (resultado >= 18.5 && resultado <= 24.9){
        return nivel[1];
    }
    else if (resultado >= 25 && resultado <= 29.9){
        return `${nivel[2]}`
    }
    else if (resultado >= 30 && resultado <= 34.9){
        return nivel[3];
    }
    else if (resultado >= 35 && resultado <= 39.9){
        return nivel[4];
    }
    else{
        return nivel[5];
    }
}

function criaP(){
    const p = document.createElement('p'); //ele criou um elemento em java script. No caso ele criou um paragrafo e ele inseriu esse paragrafo que ele criou com o java script dentro do resultadoado
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.calculo');
    resultado.innerHTML = ``; // é uma função que a especialidade dela é colocar uma mensagem na div calculo
    const p = criaP();
    p.innerHTML = msg;

    if (isValid){
        p.classList.add('paragrafo-resultado'); // cria uma classe para a tag p que foi criada aqui no java script
    }
    else{
        p.classList.add('paragrafo-erro'); 
    }

    resultado.appendChild(p); //aqui ele vai adionar um elemento nessa variavel resultado. O p vai ser inserido na div
}



/*
Primeiro criou a variavel form que receb o formulario. Criou uma função que vai escutar o evento do form quando faz o submit e desativar o envio trouxe o peso e a altura. Converteu para numero e trouxe o valor deles. fez uma condição se não for peso ou seja se o peso não for numero vai mostra na função setResultado que o peso é invalido e false. A função setResultado serve para mostrar a mensagem e fazer a validação se for true vai criar uma classe para o paragrafo e no css eu faço o que eu quiser se for false vai criar outra classe para o mesmo paragrafo. Mas antes dessa função primiero eu preciso criar um paragrafo então tem uma função que cria paragrafo e dentro do setResultado eu retorno este paragrafo e adiciono na div .calculo. Tem uma função chamada getIMC que faz um calculo com 2 parametros e retorna ele e quando eu chamo essa função eu passo o peso e a altura. Tem outra função que é o nivel do IMC que tem um parametro chamado resultado que faz um calculo e na hora de retornar retorna o array nivel numa determinada posição esse array mostra se vc esta no peso normal ou qualquer outro peso e foi isso.
*/