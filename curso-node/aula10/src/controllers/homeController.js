const HomeModel = require('../models/HomeModel')


module.exports.paginaInicial = (req, res) => {
    HomeModel.find().then(dado => {
        res.send(`
        <p> ${dado} </p><br>
        <form action ="/" method="POST">
        Nome do titulo: <input type="text" name="titulo"><br>
        Nome do descricao: <input type="text" name="descricao">
        <button>Olá mundo</button>
        </form>`);
    });
}

exports.trataPost = (req, res) => {
    HomeModel.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }).then(dado => {
        console.log(req.body)
        res.send(req.body)
    }).catch(err => console.log(err))
}