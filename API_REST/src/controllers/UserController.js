import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.send(id, nome, email);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;
      if (!userId) {
        return req.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const user = await User.findByPk(userId);

      if (!user) {
        return req.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.status(204).json(null);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;

      if (!userId) {
        return req.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const user = await User.findByPk(userId);

      if (!user) {
        return req.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const updatedUser = await user.update(req.body);
      const { id, nome, email } = updatedUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
