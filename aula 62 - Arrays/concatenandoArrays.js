const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2); //vai concatenar o a1 com o a2, ou seja vai juntar os arrays

console.log(a3);

const a4 = a1.concat(a2, [7,8,9]);
console.log(a4);

const a5 = [...a1, ...a2]; //vc vai espalhar o array ou seja vc vai juntar eles

console.log(a5);

const a6 = [...a1, 'Luiz', ...a2, ...[7,8,9]];

console.log(a6);