const lolService = require("../services/lolService");

async function getLOLsummonerName(req, res) {
    const summonerName = req.params.summonerName;

    try {
        const results = await lolService.fetchApiDataLOL(summonerName);
        if (results.length === 0) {
            throw "API returned an empty array";
        }
        res.send({
            data: results,
        });
    } catch (error) {
        console.error(error);
        res.status(404).send("Data unavailable");
    }
}

module.exports = {
    getLOLsummonerName,
};
