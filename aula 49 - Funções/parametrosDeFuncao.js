function funcao(){
    let total = 0
    for (argumento of arguments){ // no java script vc pode retornar algo em uma função mesmo não tendo parametros, mas se vc fizer isso os seus valores vão ficar dentro de arguments
        total += argumento;
    }
    console.log(total);
}

funcao(1,2,3,4,5,6,7);


function soma(a, b = 2, c = 10){
    console.log(a+b+c);
}

soma(10, undefined, 20);

// atribuição via destruturação

function soma2({nome, sobrenome, idade}){ // aqui ele esta passando um objeto com as chaves nome, sobrenome e idade
    console.log(nome, sobrenome, idade);
}

soma2({ nome: 'Luiz', sobrenome: 'Otavio', idade: 30 });

function soma3([valor1, valor2, valor3]){ // aqui ele esta passando um objeto com as chaves nome, sobrenome e idade
    console.log(valor1, valor2, valor3);
}

soma3(['Luiz Otavio', 'Miranda', '30']);


function conta(operador, acumulador, ...numeros){ // todos os restod dos argumentos vai estar dentro de numero, então vai criar um array
    for (let numero of numeros){
        if (operador === '+'){
            acumulador += numero;
        }
        else if (operador === '-'){
            acumulador -= numero;
        }
        else if (operador === '/'){
            acumulador /= numero;
        }
        else if (operador === '*'){
            acumulador *= numero;
        }
        else{
            return false;
        }
    }
    console.log(acumulador);

}

conta('+', 0, 20,30,40,50);

const conta2 = function (operador, acumulador, ...numeros){ 
    console.log(operador, acumulador, numeros);
}

conta2('+', 0, 20,30,40,50);

const conta3 = (operador, acumulador, ...numeros) => { 
    console.log(operador, acumulador, numeros);
}

conta3('+', 0, 20,30,40,50);
