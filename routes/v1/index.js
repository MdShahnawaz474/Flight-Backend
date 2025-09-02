const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

const airplaneRoutes = require("./airplaneRoute")
const cityRoutes = require("./city-route")
router.use("/airplanes", airplaneRoutes);

router.use("/cities", cityRoutes)

router.get('/info', InfoController.info);


module.exports = router;