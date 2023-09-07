const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]);

alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';
console.log(alunos);

alunos.push('Otavio'); //coloca o elemento no final do array

console.log(alunos);

alunos.unshift('Marta');
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

console.log(alunos.slice(0,3));

delete alunos[1];
console.log(alunos[1]);
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);

