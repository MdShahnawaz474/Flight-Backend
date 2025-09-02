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

// /api/v1/airplanes/:id DELETE
router.delete("/:id",AirplaneController.destroyAirplane);

// /api/v1/airplanes/:id PATCH
router.patch("/:id",AirplaneController.updateAirplane)


module.exports = router;