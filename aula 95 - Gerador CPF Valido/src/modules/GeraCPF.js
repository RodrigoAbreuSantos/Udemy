import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf){ //cria uma função para formatar o cpf
        return(
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11) 
        );
    }
    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito) //o metodo é estatico, então vc não precisa instanciar sua classe para usar esse metodo
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2
        return this.formatado(novoCpf) // vai levar o novoCpf para a função formatar e vai retornar ele formatado
    }
}