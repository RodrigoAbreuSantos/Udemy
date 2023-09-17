import geraSenha from "./geradores"; //esta importando a classe geraSenha

const senhaGerada = document.querySelector('.senha-gerada'); // esta pegando as tags html
const qtdCarcteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenhaButton = document.querySelector('.gerar-senha');

export default () => { //ele esta exportando uma função anonima
    gerarSenhaButton.addEventListener('click', () => {
        senhaGerada.innerHTML = gera() // na tag div no seu html vai receber a função gera() que retorna a senha, que foi pega la na função geraSenha de outro arquivo  
    }) //esta pegando o evento de click do butão de gerar senha
} 

function gera(){
    const senha = geraSenha(qtdCarcteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos); // esta criando uma variavel senha que recebe a função geraSenha do arquivo geradores.js e essa função esta recebendo como parametro a qtd de caractres, mas para pegar o valor e não o inpu em sim, utilzou o value para que assim pegassemos o que o usario colocar no html, esta recebendo tambem os checkbox: chkMaiusculas, chkMinusculas, chkNumeros e chkSimbolos. So que para saber se esta checked ou não precisa passar o checked para assim se não tiver checada la na função geraSenha não vai pegar algo aleatorio do que não esta checado. maiusculas && senhaArray.push(geraMaiuscula()), por exemplo esse codigo da função geraSenha esta colocando dentro do array maisculas se for verdadeira, mas usando o checked na hora do usuario colocar se não tiver checado vai dar falso, assim não pegando algo aleatorio para aquele campo não checked

    return senha || 'Nada Selecionado'; //vai retornar a senha, se tiver em branco e ele apertar o botão de enviar vai retornar Nada Selecionado
}