const {cpfs } = require('./base') 
/*
^ -> começa com
$ -> Termina com
[^] negação
m - multline
*/
const cpf2 = '254.224.877-45'
console.log(cpfs.match(/^\d{3}\.\d{3}.\d{3}\-\d{2}$/gm));
console.log(cpf2.match(/^\d{3}\.\d{3}.\d{3}\-\d{2}$/g));