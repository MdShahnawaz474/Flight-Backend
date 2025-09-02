const express = require("express");
const router = express.Router();  

const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

// /api/v1/city POST
router.post("/", CityMiddlewares.validateCreateRequest, CityController.createCity);
// /api/v1/city Delete
router.delete("/:id", CityController.deleteCity );

// /api/v1/city Patch
router.patch("/:id", CityController.updateCity );



module.exports = router;
