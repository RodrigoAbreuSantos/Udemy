import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){// função que se auto inicia
    const gera = new GeraCPF(); //esta instanciando a classe GeraCPf, para poder usar seus metodos aqui
    const cpfGerado = document.querySelector('.resultado') //vai colocar o novo cpf gerado na classe GeraCPF aqui
    cpfGerado.innerHTML = gera.geraNovoCpf(); // a div no seu html vai receber o novo cpf gerado, que esta sendo trazido para ca, porque instanciamos a classe GeraCPF e com isso podemos usar seus recursos
})(); 

