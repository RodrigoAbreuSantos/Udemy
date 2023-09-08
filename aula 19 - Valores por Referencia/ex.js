//function meuEscopo(){
    //const form = document.querySelector('.form');

    //form.onsubmit = function (evento){
        //evento.preventDefault(); // vai previnir que o meu formulario  não seja enviado
        //alert(1);
        //console.log('Foi enviado');
    //};

    //let contador = 1;
    //function recebeEventoForm (evento){
        //evento.preventDefault();
        //console.log(`O formulario foi chamado ${contador}, mas não foi enviado`);
        //contador++;
        //if (contador > 2){
            //console.log('teste');
                
            
        //}
    //}

    //form.addEventListener('submit', recebeEventoForm) // form vai adicionar um escutador de evento no meu formulario
//}
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nomE = form.querySelector('#nome').value; // vai pegar o input que estiver dentro do formulario e trazer aqui
        const sobrenomE = form.querySelector('#sobre').value;
        const pesO = form.querySelector('#peso').value;
        const alturA = form.querySelector('#altura').value;

        console.log(nomE, sobrenomE, pesO, alturA);

        const info = {
            nome: nomE, // criei um objeto chamado info, que recebia a chava nome e pegava a variavel nome
            sobrenome: sobrenomE,
            peso: pesO,
            altura: alturA
        }

        pessoas.push(info);

        console.log(pessoas);

        resultado.innerHTML = `O nome é: ${nomE} </br>`,
        resultado.innerHTML += `O Sobrenome é: ${sobrenomE} </br>`,
        resultado.innerHTML += `O peso é: ${pesO} </br>`,
        resultado.innerHTML += `A altura é: ${alturA} </br>`
    }

    form.addEventListener('submit', recebeEventoForm) // form vai adicionar um escutador de evento no meu formulario
}

meuEscopo();
