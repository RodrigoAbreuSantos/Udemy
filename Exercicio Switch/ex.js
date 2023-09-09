function switcHDia(dataDial){
    switch (dataDial){
        case 0:
            diaSemanaLetra = 'Domingo';
            return diaSemanaLetra;
        case 1:
            diaSemanaLetra = 'Segunda-feira';
            return diaSemanaLetra;
        case 2:
            diaSemanaLetra = 'Terça-feira';
            return diaSemanaLetra;
        case 3:
            diaSemanaLetra = 'Quarta-feira';
            return diaSemanaLetra;
        case 4:
            diaSemanaLetra = 'Quinta-feira';
            return diaSemanaLetra;
        case 5:
            diaSemanaLetra = 'Sexta-feira';
            return diaSemanaLetra;
        case 6:
            diaSemanaLetra = 'Sabado';
            return diaSemanaLetra;
        default:
            diaSemanaLetra = 'Invalido';
            return diaSemanaLetra;
    }
}

function switcHAno(dataAno){
    switch (dataAno){
        case 0:
            ano = 'Janeiro';
            return ano;
        case 1:
            ano = 'Fevereiro';
            return ano;
        case 2:
            ano = 'Março';
            return ano;
        case 3:
            ano = 'Abril';
            return ano;
        case 4:
            ano = 'Maio';
            return ano;
        case 5:
            ano = 'Junho';
            return ano;
        case 6:
            ano = 'Julho';
            return ano;
        case 7:
            ano = 'Agosto';
            return ano;
        case 8:
            ano = 'Setembro';
            return ano;
        case 9:
            ano = 'Outubro';
            return ano;
        case 10:
            ano = 'Novembro';
            return ano;
        case 11:
            ano = 'Dezembro';
            return ano;
        default:
            ano = 'Invalido'
            return ano;
    }
}

function formatarData(data){
    const diaL = switcHDia(data.getDay());
    const diaN = data.getDate();
    const mes = switcHAno(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();




    return `${diaL}, ${diaN} de ${mes} de ${ano} ${hora}:${min}`
}

const datas = new Date();
const datasBrasil = formatarData(datas);
console.log(datasBrasil);

const element = document.querySelector(".resultado");
const text = document.createTextNode(datasBrasil);
element.appendChild(text);