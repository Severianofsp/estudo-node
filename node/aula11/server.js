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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const middleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

const sessionOptions = session({
    secret: 'hfsakjhfsajkas',
    store: MongoStore.create({mongoUrl: process.env.CONNECTION_STRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.use(middleware);
app.use(routes);
app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acesse http://localhost:3000/')
        console.log('---------------------------__-')
        console.log('Servidor Executando na porta 3000')
    })

})