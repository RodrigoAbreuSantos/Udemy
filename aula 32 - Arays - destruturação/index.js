const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
console.log(primeiroNumero, segundoNumero, resto);

const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ...resto2] = numeros2;

console.log(um, tres, resto2);

const numeros3 = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = numeros3;
console.log(lista3[2])