module.exports.paginaInicial = (req, res) => {
    res.send(`<form action ="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>`);
}

exports.trataPost = (req,res) =>{
    console.log(req.body)
    res.send(req.body.nome)
}