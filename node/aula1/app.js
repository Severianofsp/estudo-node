// const mod1 = require('./mod1');
const axios = require('axios');
const {nome, sobrenome, falaNome} = require('./mod1');
console.log(falaNome());

axios('https://google.com.br')
.then(response => console.log(response))
.catch(e => console.log(e));