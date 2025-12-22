const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/appError");
const { Airport } = require("../models");
const { compareTime } = require("../utils/helpers/dateTime");
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    //  Check departure airport
    const departureAirport = await Airport.findOne({
      where: { code: data.departureAirportId },
    });
    if (!departureAirport) {
      throw new AppError(
        "Departure airport does not exist",
        StatusCodes.BAD_REQUEST
      );
    }
    //  Check arrival airport
    const arrivalAirport = await Airport.findOne({
      where: { code: data.arrivalAirportId },
    });
    if (!arrivalAirport) {
      throw new AppError(
        "Arrival airport does not exist",
        StatusCodes.BAD_REQUEST
      );
    }

    // Check arrival time is greater than departure time
    const isValidTime = compareTime(data.arrivalTime, data.departureTime);
    if (!isValidTime) {
      throw new AppError(
        "Arrival time must be greater than departure time",
        StatusCodes.BAD_REQUEST
      );
    }

    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) {
      throw error;
    }

    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  //trips
  const endingTripTime = "23:59:00";
  let customFilter = {};
  let sortFilter = [];
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    //todo : add a check they are not same
    if (arrivalAirportId === departureAirportId) {
      throw new AppError(
        "Arrival airport and departure airport cannot be same", // Fixed typo
        StatusCodes.BAD_REQUEST
      );
    }
  }
  if (query.tripDate) {
  const startDate = `${query.tripDate} 00:00:00`;
  const endDate = `${query.tripDate} ${endingTripTime}`;

  customFilter.departureTime = {
    [Op.between]: [startDate, endDate]
  };
}

  if(query.sort){
  const params = query.sort.split(",");
  const sortFilters = params.map((param)=>param.split("_"));
  sortFilter=sortFilters
  }
  if(query.price){
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]:[minPrice,((maxPrice===undefined)?200000:maxPrice)]
    }

  }
  if (query.travellers){
    customFilter.totalSeat={
      [Op.gte]:query.travellers
    }
  }
  console.log("Custom Filter", customFilter);
  console.log("Sort Filter", sortFilter);
  try {
    const flights = flightRepository.getAllFlights(customFilter,sortFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createFlight,
  getAllFlights,
};
