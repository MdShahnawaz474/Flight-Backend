const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST : /flight
 * req.body = {
 *   flightNumber: "DEL123",
 *   airplaneId: 1,
 *   departureAirportId: 5,
 *   arrivalAirportId: 8,
 *   departureTime: "2025-01-10T10:30:00Z",
 *   arrivalTime: "2025-01-10T12:30:00Z",
 *   price: 5500,
 *   boardingGate: "A12",
 *   totalSeat: 180
 * }
 */
async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeat: req.body.totalSeat,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a flight",
      data: flight,
      error: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: error.message,
        data: {},
        error: error.explanation || error.message,
      });
  }
}

async function getAllFlights(req, res) {
  try {
    
    const flights = await FlightService.getAllFlights(req.query);
    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createFlight,
  getAllFlights
};
