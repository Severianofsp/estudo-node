const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, require: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    }
    async findAll() {
        return await LoginModel.find();
    }

    async login() {
        this.valida();
        if (this.erros.length > 0) return;
        this.user = LoginModel.findOne({ email: this.body.email });

        if (!this.user) {
            this.erros.push('Usuário não existe');
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push('Senha inválida');
            this.user = null;
            return;
        }
    }

    async register() {
        this.valida();
        if (this.erros.length > 0) return;

        await this.checkUser();
        if (this.erros.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);


        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }
    async checkUser() {
        const user = await LoginModel.findOne({ email: this.body.email });
        if (user) this.erros.push('Usuário já existente');
    }
    valida() {
        this.cleanUp();

        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido');
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.erros.push('A senha deve conter entre 3 a 40 caracteres');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    };
}
module.exports = Login;