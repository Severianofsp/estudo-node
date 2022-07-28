const nome = 'Felipe';
const sobrenome = 'Severiano';

const falaAi = () =>`${nome} ${sobrenome}`;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaAi;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaAi;
this.qualquerCoisa = 'Qualquer coisa';