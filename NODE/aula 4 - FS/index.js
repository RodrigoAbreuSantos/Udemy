//fs tem muitas utilidades


const fs = require('fs').promises; // esta utilizando promisses porque quer que ele leia os arquivos que tem na pasta e depois mostre
const path = require('path')

async function readdir(rootDir){ // vai receber um caminho raiz
    rootDir = rootDir || path.resolve(__dirname) //se a rootDir foi enviada vai utilizar ela, senão vai usar o path.resolve
    const files = await fs.readdir(rootDir);

    walk(files, rootDir); //vai jogar para dentro dessa função os arquivos que esta recebendo, e a rootDir para pegar o caminho completo
}

async function walk(files, rootDir){
    for (let file of files){
        const fileFullPath = path.resolve(rootDir, file) //vai compor o nome do arquivo de acordo com a pasta que esta sendo recebida que no caso é rootDir e o arquivo que esta dentro dessa pasta
        const stats = await fs.stat(fileFullPath) //vai retornar uma promesa, por isso o await, vai mastar o fileFulPath para o stat para fazer estatiticas desse arquivo

        if (/\.git/g.test(fileFullPath)){ //se tiver git no caminho da pasta vc continua
            continue;
        }

        if (/\.node_modules/g.test(fileFullPath)){ //se tiver o node_modules no caminho da pasta vc continua
            continue;
        }

        //if (!/\.css$/g.test(fileFullPath)){ //se não tiver o css no caminho da pasta vc continua
            //continue;
        //


        if (stats.isDirectory()){ //se for um diretorio va novamente na função readdir e lista ela para mim
            readdir(fileFullPath)
            continue; //vai dar um continue porque ele não quer que loge um diretorio, então se for um diretorio ele vai mandar de novo para função e vai continuar para a proxima iteração do laço
        }

        console.log(fileFullPath); //vai retornar se esse arquivo é ou não é um diretorio
    }
}

//Então ele vai listar todas as pastas e oq for diretorio ele vai tentar voltar para a função readdir e listar, se tiver arquivo la dentro ele vai exibir esses arquivos






/*
fs.readdir(path.resolve(__dirname)) //o path esta falando para ser o caminho absoluto, assim mostrando apenas a aula4, e vai mostrar o que esta no reolve la no then e o que esta no resolve é o caminho do arquivo
    .then(files => {
        console.log(files)
    })
    .catch(erro => {
        console.log(erro);
    })

*/