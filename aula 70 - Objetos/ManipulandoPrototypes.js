// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ = Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__ = objA. Para isso vc tem que fazer um Object.setPrototypeOf()
};

Object.setPrototypeOf(objB, objA); // Nesse caso mesmo vc não tendo a chave a no b, vc pode acessar ela pelo b

// Então o __proto__ do objeto b é o objeto a e o __proto__ do objeto a é o Object.prototype

console.log(objB.chaveA);

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB); // Nesse caso o objeto c passa pelo objeto b que passa pelo objeto a
// Então o __proto__ do objC é o objB e o __proto__ do objB é o objA e o __proto__ do objA é o Object.prototype


//Object.setPrototypeOf(objC, objA);//Nesse caso passaria pelo objA mas não pelo objB, então não vai funcionar se vc fizer um oblC.chaveB, mas funciona se vc fizer um objC.chaveA

console.log(objC.chaveB);

