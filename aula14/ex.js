let num1 = 1;
let num2 = 2.565777677676;

console.log(num1.toString() + num2);
console.log(typeof num1);
//num1 = num1.toString();
//num1 = num1.toFixed(2);

console.log(Number.isInteger(num2));
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;

console.log(num3);


num3 += num4;
num3 += num4;
num3 += num4;

num3 = Number(num3.toFixed(2))

console.log(num3);
