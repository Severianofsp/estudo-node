const Contato = require('../models/ContatoModel');
exports.index = (req,res) => {
    const contato = new Contato(req.body);
    contato.register();
    res.send('teste')
};