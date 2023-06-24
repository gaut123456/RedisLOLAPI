const express = require("express");
const router = express.Router();
const lolRoutes = require("./lolRoutes");
const tftRoutes = require("./tftRoutes");

router.use("/lol", lolRoutes);
router.use("/tft", tftRoutes);

module.exports = router;
