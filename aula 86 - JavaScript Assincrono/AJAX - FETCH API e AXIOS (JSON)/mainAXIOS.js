// Vimos como fazer requisições ajax com XML, FETCH e AXIOS


axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)) //fazendo isso vc pode mandar direto pra função, vc não precisa usar outro then, porque o .data não retorna uma nova promise assim como o .json()

function carregaElementosNaPagina(json){
    const table = document.createElement('table') 
    for (let pessoa of json){
        const tr = document.createElement('tr') 

        const td1 = document.createElement('td') 
        td1.innerHTML = pessoa.nome; 
        tr.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3)

        table.appendChild(tr); 
    }

    const resultado = document.querySelector('.resultado') 

    resultado.appendChild(table) 

}