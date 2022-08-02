const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js');
const contatoController = require('./src/controllers/contatoController.js');
const { loginRequired } = require('./src/middlewares/middleware')


route.get('/', homeController.index);

// ROTA DE LOGIN
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.get('/login/findall', loginController.findAll);
route.post('/login/login', loginController.login);
route.post('/login/logout', loginController.logout);

//Rota de Contato
route.get('/contato', loginRequired, contatoController.index);
module.exports = route;