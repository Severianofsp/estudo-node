import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      await Aluno.create(req.body);
      return res.status(201).json(null);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Id não enviado'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Id não enviado'],
        });
      }

      const aluno = await Aluno.findOne({ where: { id } });

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      await aluno.destroy();
      return res.status(204).json(null);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Id não enviado'],
        });
      }

      const aluno = await Aluno.findOne({ where: { id } });

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
