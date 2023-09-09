/*
try{
    // executa quando não ha erros
}catch(erros){
    // executada quando ha erros
} finally{
    // executada sempre
}
*/

/*
try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
}catch(erro){
    console.log('Trtando erro');
}finally{
    console.log('Eu sempre sou executado')
}
*/

/*
try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');

    try{
        console.log(a);
    }catch{
        console.log('Deu erro');
    }finally{
        console.log('Tambem sou finally');
    }
}catch(erro){
    console.log('Tratando erro');
}finally{
    console.log('Eu sempre sou executado')
}
*/


function retornaHora(data){
    if (data && !(data instanceof Date)){ // se a data for enviada e a data não é uma instancia de date
        throw new TypeError('Esperando instancia de Date');
    }
    if (!data){ // se a data não foi enviada vai gerar uma data
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digits',
        hour12: false
    });
}

try{
    const data = new Date ('01-01-1980 12:40:12');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    console.log(e)
}finally{
    console.log('Tenha um bom dia');
}
