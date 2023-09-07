const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz Quadrada:  ${Math.sqrt(numero)}</p> </br>`
texto.innerHTML += `<p>${numero} é inteiro:  ${Number.isInteger(numero)}</p> </br>`
texto.innerHTML += `<p>${numero} é NaN:  ${Number.isNaN(numero)}</p> </br>`
texto.innerHTML += `<p>${numero} pra baixo:  ${Math.floor(numero)}</p> </br>`
texto.innerHTML += `<p>${numero} pra baixo:  ${Math.ceil(numero)}</p> </br>`
texto.innerHTML += `<p>${numero} pra baixo:  ${numero.toFixed(2)}</p> </br>`
