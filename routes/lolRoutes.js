const express = require("express");
const router = express.Router();
const lolController = require("../controllers/lolController");

router.get("/summoner/:summonerName", lolController.getLOLsummonerName);

module.exports = router;
