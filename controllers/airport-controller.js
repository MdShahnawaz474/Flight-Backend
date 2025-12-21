const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const airport = require("../models/airport");

/**
 * POST :/airports
 * req-body {name:IGI,
      code :"DEL",
      address:"",
      cityId:5,
      }
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airport;
    SuccessResponse.message = "Successfully created an Airports";

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
 * GET :/airports/
 * req-body {}
 */
async function getAirports() {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET :/airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
  try {
    const id = req.params.id;
    const airports = await AirportService.getAirport(id);
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyAirport(req, res) {
  try {
    const id = req.params.id;
    const response = await AirportService.destroyAirport(id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
     ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirport(req,res) {
    try {
        const id = req.params.id;
        const data = req.body
        const airport = await AirportService.updateAirport(id,data);
        SuccessResponse.data= airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
          ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports ={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport
}


