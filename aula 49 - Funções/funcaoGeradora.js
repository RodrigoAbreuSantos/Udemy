// ela nunca vai te entregar todos os valores de uma vez, cada vez que vc chamar ele ele vai te entregar um valor

function* geradora1(){
    //Codigo qualquer
    yield 'Valor1';
    //Codigo qualquer
    yield 'Valor2';
    //Codigo qualquer
    yield 'Valor3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}

//console.log(g1.next().value); //para vc ver o valor da função geradora vc precisa usar o next
//console.log(g1.next().value);
//console.log(g1.next().value);


function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();


console.log(g2.next().value); 
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value); 
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); // vc delegou para a geradora3 fazer 0, 1, 2 e aqui na geradora 4 vc continua
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4){
    console.log(valor);
}

function*geradora5(){
    yield function(){
        console.log('Vim do y1');
    }

    yield function(){
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();