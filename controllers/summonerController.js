const summonerService = require("../services/summonerService");

async function getsummoner(req, res) {
    const summonerName = req.params.summonerName;

    try {
        const results = await summonerService.fetchSummoner(summonerName);
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
    getsummoner,
};
