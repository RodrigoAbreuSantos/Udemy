// IIEF  -> Immediately invoked function expression

(function(){
    console.log(1,2,3,4,5,6);
})(); // vc coloca uma função anonima entre parentes e depois vc chama ela imediatamente. E nada que esta aqui dentro toca o escopo global

(function(){
    const nome = 'Luiz';
    console.log(nome);
})(); // vc não tem conflito com variaveis que estão de fora. O seu codigo esta protegido por uma função que foi invocada automaticamente. Vc poderia ter qualquer coisa no escopo global que não ia afetar seu codigo

const nome = 'Otavio'
console.log(nome);

(function(){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
})();


// primeiro ele criou uma função imediata e dentro dela criou uma variavel que recebe sobrenome. Depois ele criou dentro dessa função imediata uma função que tem como parametro o nome e retorna o nome e o sobrenome. Depois ele criou outra função dentro da função anonima que printa a função que retorna o nome e o sobrenome, passando como parametro o nome Luiz. depois para vc conseguir ver o resultado vc tem que retornar a função que esta com o consolo.log que no caso é a função que chama a outra função passando como parametro o nome

(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(18, 60, 1.70); // são os argumentos que vão ser passados para os parametros