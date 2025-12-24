const crudRepository = require("./crud-repository");
const { Flight, Airplane, Airport, } = require("../models");
const Sequelize = require("sequelize");
// class flightRepository extends crudRepository {
//   constructor() {
//     super(Flight);
//   }

// //   async getAllFlights(filter, sort) {
// //     const response = await Flight.findAll({
// //       where: filter,
// //       order: sort,
// //    include: [
// //     {
// //         model: Airplane,
// //         as: 'airplane',
// //         required: true,
// //     },
// //     {
// //         model: Airport,
// //         as: 'departureAirport',
// //         required: true,
// //         on: {
// //             col1: Sequelize.where(
// //                 Sequelize.col("Flight.departureAirportId"),
// //                 "=",
// //                 Sequelize.col("Airport.code")
// //             )
// //         }
// //     },
// //     {
// //         model: Airport,
// //         as: 'ArrivalAirport',
// //         required: true,
// //         on: {
// //             col1: Sequelize.where(
// //                 Sequelize.col("Flight.arrivalAirportId"),
// //                 "=",
// //                 Sequelize.col("ArrivalAirport.code")
// //             )
// //         }
// //     }
// // ]
// //     });
// //     return response;
// //   }

// }

class flightRepository extends crudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          as: 'airplanedetail',
          required: true,
        },
        {
          model: Airport,
          as: 'departureAirport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            )
          }
        },
        {
          model: Airport,
          as: 'arrivalAirport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            )
          }
        }
      ]
    });
    return response;
  }
}

module.exports = flightRepository;
module.exports = flightRepository;
