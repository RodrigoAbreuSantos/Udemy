try{ //tente fazer caso de erro vai pro catch
    console.log(naoExisto)    
} catch(erro){ // vai mostrar o erro para o usuario
    console.log('Não exite essa variavel')
}


function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        //throw('x e y precisam ser numeros'); // o throw lança um erro, é um erro que vc pode criar
        throw new ReferenceError('x e y precisam ser numeros');
    }
    return x + y;
}
try{
    console.log(soma(1,3));
    console.log(soma('1',3));
}catch(erro){
    console.log(erro); // aqui vai retornar o erro que vc criou com throw
    console.log('Alguma coisa mais amigavel')
}
