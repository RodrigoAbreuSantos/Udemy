const nome = 'Luiz';

function falaNome(){
    console.log(nome);
}


function usaFalaNome(){
    const p = falaNome()
    return p
}
usaFalaNome();