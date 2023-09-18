const path = require('path'); //path é para mexer com caminhos
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //os .. é porque ele não quer que seja a pasta modules
//const escreve = require('./modules/escrever'); // esta pegando a função do arquivo escrever.js. Ou seja essa variavel escreve esta recebendo uma função
const ler = require('./modules/ler'); // esta pegando a função anonima exportada que quer como parametro o caminho para que possa ser lido. Isso aqui vai retornar uma promise, porque o fs no arquivo ler retorna uma promise



async function lerArquivo(caminho){
    const dados = await ler(caminho); // esta passando para a função exportada o caminho que vai ser lido
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados); //esta convertendo os arquivos de json para java script

    for (let dado of dados){
        console.log(dado.nome)
    }
}

lerArquivo(caminhoArquivo) //estamos pegando a função lerAquivo e passando o caminhoArquivo para que a função ler() possa ler o caminho do arquivo e com o arquivo lido com a função renderizaDados vamos convertes esse arquivo para java script e pegar os dados que queremos desse arquivo



/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Luiz'},
    {nome: 'Rodrigo'}
];

const json = JSON.stringify(pessoas, '', 2) //vai converter pessoas para JSON. Os 2 ultimos parametros é para formatação

escreve(caminhoArquivo, json) //vamos mandar o caminho e os dados que queremos que escreva
*/



