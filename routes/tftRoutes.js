const express = require("express");
const router = express.Router();
const tftController = require("../controllers/tftController");

router.get("/summoner/:summonerName", tftController.getTFTsummonerName);

module.exports = router;
