document.addEventListener('click', evento => { //pegou o evento de click da pagina inteira
    const elemento = evento.target; // esta pegando as tags que esta sendo clicada
    const tag = elemento.tagName.toLowerCase(); // esta transformando as tags que estão sendo clicadas em minusculas
    if(tag === 'a'){ // se o nome da tag clicada for a vai desativar o envio dela 
        evento.preventDefault();
        carregaPagina(elemento); // vai mandar a tag clicada para a função carregaPagina
    }
});

async function carregaPagina(el){ // função que recebe a tag clicada
    try{
        const href = el.getAttribute('href') // pega o atributo da tag clicada 
        const respose = await fetch(href) // o fetch cria uma promisse do href e o await retorna a promise resolvida

        if (respose.status !== 200){
            throw new Error('ERRO 404 NOSSO') 
        }

        const html = await respose.text(); // o text cria uma promise para pegar o texto dp href e o wair retorna a promise resolvida
        carregaResultado(html); // esta mandando o texto para a função carregaResultado
    }catch(erro){
        console.log(erro) // se der erro o throw lança o erro aqui
    }
}

function carregaResultado(response){// esta recebendo como parametro o texto do href
    const resultado = document.querySelector('.resultado'); // esta pegando a div com class resultado
    resultado.innerHTML = response // esta fazendo dentro do html dessa div recber o texto do href

}

