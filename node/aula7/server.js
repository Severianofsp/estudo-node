const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<form action ="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>`)
})

// express params
app.get('/testes/:idUsuario?', (req, res) => {
    console.log(req.params)
    res.send(req.params.idUsuario);
});

// express query
app.get('/query/', (req, res) => {
    console.log(req.query)
    res.send(req.query);
});

// express body
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body.nome);
});

app.listen(3000, () => {
    console.log('Acesse http://localhost:8080/')
    console.log('---------------------------__-')
    console.log('Servidor Executando na porta 3000')
})