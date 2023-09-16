document.addEventListener('click', evento => { 
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();
    if(tag === 'a'){
        evento.preventDefault();
        carregaPagina(elemento); 

    }
});

function carregaPagina(el){
    const href = el.getAttribute('href') 

    fetch(href) // a gente vai buscar o href da pagina
        .then(response => {//vamos retornar o valor resolvido da promise criada pelo fetch, que é o href e vamos converter o que ta vindo do href para texto
            if (response.status !== 200){
                throw new Error('ERRO 404 NOSSO') //assim que convertido para text foi criada uma nova promise, então vamos usar de novo o then
            }
            return response.text(); //precisa retornar o valor para usar no then, senão fizer isso vai dar undefined
            
            //Então ele carregou o link, pegou a resposta, retornou uma outra promise que vai converter a resposta = href para texto
        })
        .then(html => {
            carregaResultado(html)
        })
        .catch(erro => {
            console.log(erro);
        })

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response

}

