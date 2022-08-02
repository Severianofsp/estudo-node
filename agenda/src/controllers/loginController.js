const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.send('Você está na página de login')
}

exports.login = async (req, res) => {

    try {
        const login = new Login(req.body);
        await login.login();

        if (login.erros.length > 0) {
            req.session.save();
            return;
        }

        req.session.user = login.user;

    } catch (e) {
        console.log(e);
        return 'Error';

    }
}

exports.register = async (req, res) => {

    try {
        const login = new Login(req.body);
        await login.register();
        console.log('resultado', login)
        res.send('Você está na página de login');
    } catch (e) {
        res.send(e)
    }
}

exports.findAll = async (req, res) => {
    const login = new Login(req.body);
    const allLogin = await login.findAll();
    console.log(allLogin);
    res.send(allLogin);
}

exports.logout = function(req, res){
    req.session.destroy();
}