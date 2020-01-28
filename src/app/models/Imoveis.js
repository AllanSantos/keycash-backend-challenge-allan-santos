import Sequelize, { Model } from 'sequelize';

class Imovel extends Model {
  static init(sequelize) {
    super.init(
      {
        endereco: Sequelize.STRING,
        bairro: Sequelize.STRING,
        metragem: Sequelize.DECIMAL,
        quartos: Sequelize.INTEGER,
        vagas: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Imovel;
