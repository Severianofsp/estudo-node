const express = require('express');
const app = express();
const routes = require('./routes');
const middleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(middleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acesse http://localhost:3000/')
    console.log('---------------------------__-')
    console.log('Servidor Executando na porta 3000')
})