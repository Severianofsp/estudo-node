const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, require: false, default: '' },
    email: { type: String, require: true, default: '' },
    telefone: { type: String, require: true, default: '' },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    }
    async findAll() {
        return await LoginModel.find();
    }

    async register() {
        this.valida();
        if (this.erros.length > 0) return;

        try {
            this.contato = await ContatoModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }
    valida() {
        this.cleanUp();

        if (this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail inválido');
        if (!this.body.nome) this.erros.push('Nome é um campo obrigatorio');
        if (!this.body.email && !this.body.telefone) {

            this.erros.push('Pelo menos um contato precisa ser enviado');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        }
    };
}
module.exports = Contato;