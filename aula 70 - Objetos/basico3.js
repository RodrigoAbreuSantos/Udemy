//factory functions

function criaPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto(){ // um metodo que vai fingir ser uma propriedade
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

