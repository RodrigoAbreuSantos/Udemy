function calculoImc(){
    const form = document.querySelector('.form');
    const calculo = document.querySelector('#calculo');
    function recebeDados(evento){
        evento.preventDefault();
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;
        const result = peso / (altura*altura);

        if (result < 18.5){
            calculo.innerHTML = `Seu IMC é de ${result} (Abaixo do peso)`;
        }
        else if (result >= 18.5 && result <= 24.9){
            calculo.innerHTML = `Seu IMC é de ${result} (Peso Normal)`;
        }
        else if (result >= 25 && result <= 29.9){
            calculo.innerHTML = `Seu IMC é de ${result} (Sobrepeso)`;
        }
        else if (result >= 30 && result <= 34.9){
            calculo.innerHTML = `Seu IMC é de ${result} (Obesidade Grau I)`;
        }
        else if (result >= 35 && result <= 39.9){
            calculo.innerHTML = `Seu IMC é de ${result} (Obesidade Grau III)`;
        }
        else{
            calculo.innerHTML = `Seu IMC é de ${result} (Obesidade Grau III)`;
        }
    }

    form.addEventListener('submit', recebeDados);

}

calculoImc();