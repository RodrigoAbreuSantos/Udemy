const a = {
    nome: 'Nayara', 
    sobrenome: 'Abreu'
};

let b = a;

a.nome = 'Rodrigo';

console.log(a, b);

const c = {
    nome: 'Nayara', 
    sobrenome: 'Abreu'
};

let d = {...c};

c.nome = 'Rodrigo';

console.log(c,d);