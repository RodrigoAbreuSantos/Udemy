const rand = (min, max) => {
    Math.floor(Math.random() * (max - min) + min)
}
const geraMaiuscula = () => { //vai gerar letras maiusculas usando o fromCharCode e essas letras maiusculas vão ser letras aleatorias
    String.fromCharCode(rand(65, 91)) //vai gerar letras maiusculas, mas estamos usando o metodo rand para gerar letras aleatorias entre A-Z
}

const geraMinusculas = () => {
    String.fromCharCode(rand(97, 123))
}

const geraNumeros = () => {
    String.fromCharCode(rand(48, 58))
}

const simbolos = ',.;~^[]{}!@#$%*()_+=-';

const geraSimbolo = () => {
    simbolos[rand(0, simbolos.length)] //vai pegar um simbolo aleario usando o metodo rand que criamos e o min é a posição 0 da string e o maximo é o tamanho total dela
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){ // vai exportar essa função, porque precisa dela fora do modulo
    const senhaArray = []; // ele quer colocar nesse array um caracter a cada volta do laço
    qtd = Number(qtd) //para garantir vai tranformar qtd em numero

    for (let i = 0; i < qtd; i++){ // a quantidade é a quantidade de caracteres total
        maiusculas && senhaArray.push(geraMaiuscula()); // se maiuscula for verdadeira vai colocar dentro do array a letra aleatorio entre A-Z gerada no metodo geraMaiuscula
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd) //vai converter o array em uma string 
    //o slice vai fatiar a string, então a string vai ter carcteres da posição 0 até a posição que foi requisitada, assim não fazendo a string duplicar, triplicar ou quadruplicar dependendo das suas opções 

}