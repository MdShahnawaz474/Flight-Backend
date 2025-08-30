const { Router } = require("express");
const { AirplaneController } = require("../../controllers");
const {airplaneMiddlwares}= require("../../middlewares")
const router = Router();
// /api/v1/airplanes POST
router.post("/", airplaneMiddlwares.validateCreateRequest, AirplaneController.createAirplane);

module.exports = router;