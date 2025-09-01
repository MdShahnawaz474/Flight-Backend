const { Router } = require("express");
const { AirplaneController } = require("../../controllers");
const {airplaneMiddlwares}= require("../../middlewares")
const router = Router();
// /api/v1/airplanes POST
router.post("/", airplaneMiddlwares.validateCreateRequest, AirplaneController.createAirplane);
// /api/v1/airplanes GET
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get("/:id",AirplaneController.getAirplane);



module.exports = router;