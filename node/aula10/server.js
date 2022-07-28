require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        app.emit('pronto')
        console.log('conectado')
    })
    .catch(err => console.log(err));

const routes = require('./routes');
const middleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(middleware);
app.use(routes);
app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acesse http://localhost:3000/')
        console.log('---------------------------__-')
        console.log('Servidor Executando na porta 3000')
    })

})