const {Router} = require('express');
const {AirportController}= require("../../controllers");
const { AirportMiddleware, airplaneMiddlwares } = require('../../middlewares');
const router = Router();

// /api/v1/airport POST
router.post("/",AirportMiddleware.validateCreateRequest, AirportController.createAirport);

// /api/v1/airports GET
router.get("/",AirportController.getAirports);

// /api/v1/airports/:id GET
router.get("/",AirportController.getAirport)

// /api/v1/airports/:id DELETE
router.delete("/",AirportController.destroyAirport)

// /api/v1/airports/:id PATCH
router.patch("/:id",AirportController.updateAirport)

module.exports = router;