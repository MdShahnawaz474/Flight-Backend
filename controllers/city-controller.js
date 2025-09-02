const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function deleteCity(req, res) {
  try {
    const { id } = req.params;
    const city = await CityService.deleteCity(id);
    SuccessResponse.data = city;
    return res
      .status(StatusCodes.OK)
      .json({ message: SuccessResponse, data: city });
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateCity(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    const city = await CityService.updateCity(id,body);
    SuccessResponse.data = city;
    SuccessResponse.message = "Successfully the City";

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createCity,
  deleteCity,
  updateCity
};
