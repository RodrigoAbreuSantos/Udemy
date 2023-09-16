// AXIOS ==> É muito similar ao FETCH API, ela tambem retorna promises. E é até mais simples de utilizar, porque tem um passo a menos, porque na hora que te entrega os dados ele não te entrega uma promise para que vc tenha que converter novamente os dados e pegar o resultado


fetch('pessoas.json') //vai pegar pessoas.json e criar uma promise
    .then(resposta => resposta.json())  // aqui ta retornado o resultado ou seja esta capturando os dados, e depois esta retornando uma nova promise com .json()
    .then(json => carregaElementosNaPagina(json)); //aqui vc esta pegando o valor convertido e resolvido da promise e jogando para uma função


function carregaElementosNaPagina(json){
    const table = document.createElement('table') // esta criando uma tabela
    for (let pessoa of json){ //esse array de pessoa vai retornar um objeto de pessoa por volta do laço
        const tr = document.createElement('tr') // vai criar um tr para a tabela

        const td1 = document.createElement('td') //vai criar um td para cada chave
        td1.innerHTML = pessoa.nome; //vamos pegar o html da pessoa.nome
        tr.appendChild(td1) // vamos adicionar o nome na tr

        const td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3)

        table.appendChild(tr); // vamos adicionar tr que dentro tem um td com os valores dentro da tabela
    }

    const resultado = document.querySelector('.resultado') //pegando a div com class resultado

    resultado.appendChild(table) //colocando a tabela dentro da div

}

//Usamos o fetch para pegar os dados do pessoas.json, com o primeiro then pegamos a resposta que veio da promise criada pelo fetch e convertemos para json, só o .json() criou uma nova promise, então no segundo then pegamos o valor convertido e levamos para a função carregaElementosNaPagina. Depois criamos a tabela na função carregaElementosNaPagina e para cada objeto dentro do array json, fizemos uma iteração criamos uma linha na tabela que é o tr e criamos um td para cada coluna e inserimos a td dentro do tr, assim ficando com uma linha e 3 colunas para cada pessoa, e depois colocamos o tr dentro da table