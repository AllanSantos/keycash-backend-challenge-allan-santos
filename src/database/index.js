import Sequelize from 'sequelize';

import User from '../app/models/User';
import Imoveis from '../app/models/Imoveis';

import databaseConfig from '../config/database';

const models = [User, Imoveis];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();