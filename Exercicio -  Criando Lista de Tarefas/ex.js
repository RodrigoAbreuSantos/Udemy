const inputTarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(evento){

    if (evento.keyCode === 13){
        if(!inputTarefa.value) return; //se o input não estiver vazio e for pressioando chama o criarTarefa
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = ''//aqui ele vai limpar a tarefa
    inputTarefa.focus(); //quando vc cria uma tarefa ele volta o foco para o input
}

function criaBotaoApagar(li){ // vc vai adicionar um li porque vc quer saber em que local vc vai apagar
    li.innerText += ' ' // o texto que ja esta la + um espaço
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar'); vc pode criar uma classe apagar para esse botão ou usar o setAtribute
    botaoApagar.setAttribute('class', 'apagar'); // vc passa o atributo e o valor, então aqui vai ser uma class e o nome é apagar;
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput; // aqui ele esta adicionado dentro do li la no HTML o que passar como paramentro no textoInput. Nesse caso o texto input vai receber o valor dentro do input e quando vc clica no botao Adicionar Nova Tarefa vc esta pegando o valor do input usando o cria tarefa, depois vc cria uma tag li que dentro dessa tag vai conter o valor que esta no textoInput, e o que tem dentro do textoInput é o inputTarefa,value
    tarefas.appendChild(li); // esta adicionando o li como filho da ul tarefas
    criaBotaoApagar(li); // vai pegar essa função e passar como paramtro o li que foi criado no criaLi chamado para o criaTarefa e vai fazer com que o li tenha como filho um botão
    limpaInput(); //quando vc termina de criar a tarefa vc limpa o input e cooloca o foco no input
    salvarTarefas();
}

btntarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value); // pega o valor que esta dentro do input, usei uma função chamada criaTarefa

}); // addEventListener o segundo parametro é uma função anonima é obrigatorio ter uma função como segundo parametro

document.addEventListener('click', function(evento){
    const el = evento.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove(); // do meu elemento o pai dele sera removido, então nesse caso o pai do botão com a classe apagar vai ser removido e eese elemento pai é o li
        //console.log(el.parentElement) vai ver o elemento pai desse elemento com a class apagar
        salvarTarefas(); // vamos salvar tambem as tarefas aqui 
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li'); // dentro da ul tarefas vai pegar todos os li
    let listaDeTarefas = [];

    for (let tarefa of liTarefas){ // aqui ele vai ver cada indice e valor do que estiver dentro do litarefas e o que esta dentro do liTarefas é a propria tag li, então vai ver cada indice e valor da tag li
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // ele esta substituindo a palavra apagar para nada e para não ter espaço em branco quando vc substitue usa o trim
        listaDeTarefas.push(tarefaTexto); // ele vai jogar dentro do array listaDeTarefas o tarefaTexto que vai ser o texto de todas as li
        console.log(listaDeTarefas);
    }

    const TarefasJson = JSON.stringify(listaDeTarefas); //ele quer fazer com que ele vire uma string. Então foi criado uma string do meu array convertido para Json, é uma string muito similar a um array. Com esse json vc pode salvar em algum lugar, depois vc pode puxar do lugar que vc salvar e manipular ele do jeito que vc quiser
    localStorage.setItem('tarefas', TarefasJson);// é um local no navegador onde vc pode salvar coisas. vc coloca o que vc quer salvar depois o valor. No caso vai ser tarefas. No localStorage vc só pode salvar strings, então foi bastante importante converter o array para strings com o Json
}

function adicionaTarefasSalva(){
    const tarefas = localStorage.getItem('tarefas') //vai obter as tarefas 
    const listaDeTarefas = JSON.parse(tarefas); // converteu de volta nossas tarefas para um array

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalva();