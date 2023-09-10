const nome = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nome.splice(indice, delete, elem1, elem2, elem3) // o primeiro indice é da onde vc quer começar, o segundo é quantos elementos vc quer remover do array, o terceiro é elementos para adicionar todos separados por virgula
const removidos = nome.splice(-1, 1);
console.log(removidos);
console.log(nome);

