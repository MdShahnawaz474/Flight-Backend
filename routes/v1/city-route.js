
const Router = require("express");
const { CityController } = require("../../controllers");
const router= Router();

// /api/v1/city POST
router.post("/", CityController.createCity)

module.exports = router;
