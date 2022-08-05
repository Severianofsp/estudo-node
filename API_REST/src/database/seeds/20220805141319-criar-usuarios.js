const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'John Doe',
        email: 'john@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Felipe Severiano',
        email: 'severianofsp@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Flavio Severiano',
        email: 'flaviospf@gmail.com',
        password_hash: await bcryptjs.hash('43241321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }],
      {},
    );
  },

  down() {
  },
};
