const data = new Date();
console.log('Data',data.toString())
console.log('Dia',data.getDate())
console.log('Mes',data.getMonth())
console.log('Ano',data.getFullYear())
console.log('Hora',data.getHours())
console.log('Minuto',data.getMinutes())
console.log('Segundos',data.getSeconds())
console.log('Milisegundos',data.getMilliseconds())

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}

const dataBrasil = formataData(data);
console.log('Data Brasil', dataBrasil)