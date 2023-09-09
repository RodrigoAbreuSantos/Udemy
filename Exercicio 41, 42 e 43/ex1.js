function maiorValor(menor, maior){
    return Math.max(menor, maior);
}

const maior = maiorValor(1,4);
console.log(maior)

const max2 = (menor, maior) => {
    return Math.max(menor, maior);
}
const maior2 = max2(8, 32);
console.log(maior2)

const max3 = (menor, maior) => Math.max(menor, maior);

const maior3 = max3(16, 40);
console.log(maior3)
