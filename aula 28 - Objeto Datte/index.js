//const data = new Date(); //sempre que usa a palavra new vc esta se referindo a uma função construtora

const data = new Date(2019, 3, 20, 15, 14, 27); // essa data representaria 20/03/2019 15:14:27

const data2 = new Date('2019-04-20 20:20:59')

console.log('Data',data.toString());
console.log('Data', data2.toString());
console.log('Mes', data2.getMonth() + 1);
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minutos', data2.getMinutes());
console.log('Segundos', data2.getSeconds());
console.log('Dia', data2.getDay());

// 0 - Janeiro 
// 11 - Dezembro
// 0 - Domingo
// 6 - Sabado

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const datas = new Date();
const datasBrasil = formataData(datas);
console.log(datasBrasil);