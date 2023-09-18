const { PessoaChave } = require('./mod1')

const p1 = new PessoaChave('Luiz')

console.log(p1)

const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(erro => {
        console.log(erro);
    })

const { nome, sobrenome, idade } = require('./mod1')

console.log(nome)

/*
const mo1 = require('./mod1');

const {nome, sobrenome, falaNome} = require('./mod1')

console.log(nome, sobrenome)
console.log(falaNome())
*/


/*
const mo1 = require('./mod1')

console.log(mo1)
console.log(mo1.falaNome())
*/