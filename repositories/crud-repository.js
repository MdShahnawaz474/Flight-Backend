const logger = require("../config/logger-config");

class crudRepository {
  constructor(model) {
    if (!model) {
      throw new Error("Model is required to instantiate CrudRepository");
    }
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      // logger.error("something went wrong in the crud repo :create", { error });
      console.log(error.message);

      throw error;
    }
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });

    return response;
  }

  async get(data) {
   
      const response = await this.model.findByPk(data);
      return response;
   
  }

  async getAll(data) {
    
      const response = await this.model.findAll(data);
      return response;
    
  }

  async update(id, data) {
    
      const response = await this.model.update({
        data,
        where: {
          id: id,
        },
      });
      return response;
  }
}

module.exports = crudRepository;
