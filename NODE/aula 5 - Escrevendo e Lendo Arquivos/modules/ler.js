const fs = require('fs').promises;

module.exports = (caminho) => { //vai receber o caminho do arquivo que ele quer ler
    fs.readFile(caminho, 'utf8'); // vai mandar o caminho do arquivo que quer ler e o padrão utf8
}