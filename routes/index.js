const express = require("express");
const router = express.Router();
const lolRoutes = require("./lolRoutes");
const tftRoutes = require("./tftRoutes");
const summonerRoutes = require("./summonerRoutes");

router.use("/lol", lolRoutes);
router.use("/tft", tftRoutes);
router.use("/summoner", summonerRoutes);

module.exports = router;
