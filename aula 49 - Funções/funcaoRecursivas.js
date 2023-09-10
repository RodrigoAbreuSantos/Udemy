// Recursividade é simplismente uma função que se chama de volta

function recursiva(max){
    if (max >= 10 ) return; // se o max for maior ou igual a 10 vc não deixa essa função executar
    max++; // aqui vai incremenatar 1 a cada vez que entra na função, só que não tem um loop para fazer a incrementação, então por isso dentro da função vc retorna ela propria, para assim fazer o incremento ate chegar no 10 e quando chegar no 10 ela para
    console.log(max);
    recursiva(max); // é como se fosse um loop vai chamar a função ate atingir a condição
}

recursiva(-10);

