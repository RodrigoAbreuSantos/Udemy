//XMLHttpRequest ==> vai fazer o Ajax. Pode fazer requisição de qualquer tipo de dado

// Essa função request vai buscar as paginas do HTML
const request = obj => { // vai receber um objeto e vai jogar no corpo da nossa função
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //vamos chamar o constructor dessa função para criarmos uma instancia
        xhr.open(obj.method, obj.url, true); //vamos mandar o metodo que vai ser o GET, a url e se é assincrono = true e sincrono = false
        xhr.send();

        xhr.addEventListener('load', () => {
            // quando estrarmos aqui dentro ja vamos ter recebido a resposta do servidor se foi sucesso ou erro
            if (xhr.status >= 200 && xhr.status < 300){ // se o status estiver entre isso vai aceitar como sucesso e retornar um calback
                resolve(xhr.responseText); //o que a gente buscar vamos mandar para a nossa função de sucesso

            } 
            else{
                reject({
                    code: xhr.status, // vai mostrar p codigo do erro
                    msg: xhr.statusText // vai mostrar a msg de erro
                })
            }// Feito esse if e else, ja podemos fazer requisições
        });
    });
    
}

document.addEventListener('click', evento => { // esta adicionado um evento no documento todo
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();//ele quer pegar o nome da tag do elemento que esta sendo clicado e esta convertendo ela para lowercase

    if(tag === 'a'){//ele vai checar o evento que esta sendo clicado se for um link ele executa a ação de carregar a pagina
        evento.preventDefault();
        carregaPagina(elemento); // ele vai receber o link que esta sendo clicado

    }
});

async function carregaPagina(el){
    const href = el.getAttribute('href') //aqui vamos ter o link que esta sendo clicado, tendo o link ele pode carregar a pagina via AJAX

    const objConfig = {
        method: 'GET',
        url: href,
    }
    try{
        const response = await request(objConfig); // vai carregar a resposta de forma sincrona
        carregaResultado(response)
    }catch(erro){// se der erro vai pegar o status e o codigo do erro la no reject
        console.log(erro);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response

}