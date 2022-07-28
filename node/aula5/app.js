const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./module/escrever');
const ler = require('./module/ler');

const pessoas = [
    { nome: 'Felipe' },
    { nome: 'Flavio' },
    { nome: 'Igor' },
    { nome: 'Jeff' },
    { nome: 'Marcos' },
]

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminhoArquivo);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);

