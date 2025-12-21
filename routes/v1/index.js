const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

const airplaneRoutes = require("./airplaneRoute")
const cityRoutes = require("./city-route")
const airportRoutes = require("./airport-route")
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);

router.get('/info', InfoController.info);


module.exports = router;