const tftService = require("../services/tftService");

async function getTFTsummonerName(req, res) {
    const summonerName = req.params.summonerName;

    try {
        const results = await tftService.fetchApiDataTFT(summonerName);
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
    getTFTsummonerName,
};
