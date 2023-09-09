const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i]; // destruturação de objetos esta pegando o que esta dentro da chave tag e texto no array na posição que esta o objeto. ou seja a cada for vai pegar um {} diferente
    let tagCriada = document.createElement(tag);// criação da tag cada for vai criar uma tag
    tagCriada.innerHTML = texto; //essa tag esta criada e esta contendo o que esta dentro da chave texto no array elementos
    div.appendChild(tagCriada); //a variavel div criada antes, que estava criando uma div. Dentro dela vai conter as tags. Ja que esta dentro de um laço de repetição esta div vai conter o total de 4 tags, pois o tamanho do array elemento é 4
    console.log(tag, texto);
    console.log(elementos[i].tag); //ele ta pegando de dentro do array na posição i o que tem dentro da chave tag
}

container.appendChild(div); // a div criada que dentro dela tem as tags. Vai ser colocada dentro da section que foi chamada 

// No tagCriada.innerHTML = texto vc poderia colocar tagCriada.innerText = texto. Pois ela esta pegando o texto do objeto, estão pode ser innerText.

// Ou vc poderia criar uma variavel chamada 
//let textoCriado = document.createTextNode(texto)
//tagCriada.appendChield(textoCriado);

//isso faria com que vc criasse uma vraivel que recebe o o elemento da chave texto e adicionaria ele dentro da tagCriada