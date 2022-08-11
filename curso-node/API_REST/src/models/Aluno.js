import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
          min: {
            args: [0],
            msg: 'Idade deve ser maior que 0',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso ser precisa um número',
          },
          min: {
            args: [0],
            msg: 'Peso deve ser maior que 0',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Altura ser precisa um número',
          },
          min: {
            args: [0],
            msg: 'Altura deve ser maior que 0',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
