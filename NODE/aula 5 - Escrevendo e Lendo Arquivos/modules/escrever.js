const fs = require('fs').promises;


module.exports = (caminho, dados) => {//vamos receber caminho e os dados
    fs.writeFile(caminho, dados, { flag: 'w' });
}




//fs.writeFile(caminhoArquivo, json, { flag: 'w' }); //para escrever um arquivo, o primeiro parametro é o caminho do arquivo que vc quer escrever, no caso ele ta pegando o caminho absoluto e esta voltando uma pasta, então a pasta atual é a module voltando uma é a pasta aula5, depois os dados que vc quer mandar para esse arquivo e depois ele definiu algumas opções, o w é para apagar tudo que estiver dentro do arquivo e escreve o que esta no segundo parametro, o a vai dar um append a cada fez que vc executa