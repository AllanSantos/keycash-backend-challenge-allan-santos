import * as Yup from 'yup';
import Imovel from '../models/Imoveis';

class ImovelController {
  async store(req, res) {
    const schema = Yup.object().shape({
      endereco: Yup.string().required(),
      bairro: Yup.string().required(),
      metragem: Yup.number().required(),
      quartos: Yup.number().integer().required(),
      vagas: Yup.number().integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const { id, endereco, bairro, metragem, quartos, vagas } = await Imovel.create(
      req.body
    );
    
    return res.json({
      id,
      endereco,
      bairro,
      metragem,
      quartos,
      vagas,
    });
  }

  async update(req, res) {
    const { userId } = req.params;

    const schema = Yup.object().shape({
      endereco: Yup.string(),
      bairro: Yup.string(),
      metragem: Yup.number(),
      quartos: Yup.number().integer(),
      vagas: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const imovel = await Imovel.findByPk(userId);

    if (!imovel) {
      return res.status(400).json({ error: 'User do not found' });
    }

    const { id, endereco, bairro, metragem, quartos, vagas } = await Imovel.update(
      req.body
    );

    return res.json({ id, endereco, bairro, metragem, quartos, vagas });
  }
  
  async index(req, res) {
    const imoveis = await Imovel.findAll({
      attributes: ['id', 'endereco', 'bairro', 'metragem', 'quartos', 'vagas'],
    });

    return res.json(imoveis);
  }
}

export default new ImovelController();