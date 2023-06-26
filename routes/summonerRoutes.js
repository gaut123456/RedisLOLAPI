const express = require("express");
const router = express.Router();
const summonerController = require("../controllers/summonerController");

router.get("/:summonerName", summonerController.getsummoner);

module.exports = router;
