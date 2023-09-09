//let controle = 0;

//while ( controle < 10){
//    controle++;
//   console.log(controle);
//}

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
while (rand !== 10){
    rand = random(1, 50);
    console.log(rand);
}

do { // ele sempre executa o codigo primeiro para depois ver a solução
    rand = random(1, 50);
    console.log(rand);
} while(rand !== 10);

