const { StatusCodes } = require("http-status-codes");
const { Cityrepository } = require("../repositories");
const AppError = require("../utils/errors/appError");

const cityRepository = new Cityrepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    
    if (error.name === "SequelizeValidationError" || error.name =="SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new city object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity (id){
  try {
  const city = cityRepository.destroy(id);
  return city;
  } catch (error) {
     if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
     if(error.statusCode===StatusCodes.NOT_FOUND){
      throw new AppError("The City you requested to delete is not present",error.statusCode)
    }
    throw new AppError(
      "Cannot delete a city ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity (id,data){
  try {
  const city = cityRepository.update(id,data);
  return city;
  } catch (error) {
     if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
     if(error.statusCode===StatusCodes.NOT_FOUND){
      throw new AppError("The City you requested to update is not present",error.statusCode)
    }
    throw new AppError(
      "Can not update a city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  
  }

}

async function  getAllCity() {
  try {
  const city = await cityRepository.getAll();
  return city;
  } catch (error) {
     if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
     if(error.statusCode===StatusCodes.NOT_FOUND){
      throw new AppError("The City you requested to update is not present",error.statusCode)
    }
    throw new AppError(
      "Can not update a city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  
  }

}

module.exports = {
  createCity,
  deleteCity,
  updateCity,
  getAllCity
};
