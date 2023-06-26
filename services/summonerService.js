const axios = require("axios");
const Redis = require("ioredis");
const config = require("../config");
const fetchSummonerID = require("./tftService");

const redis = new Redis({
    port: config.redis.port,
    host: config.redis.host,
});

async function fetchSummoner (summonerName){
    const cacheKey = `summoner:${summonerName}`;
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
        console.log("Retrieved data from cache");
        return JSON.parse(cachedData);
    }
   return await fetchSummonerID.getSummonerId(summonerName);
}

module.exports = {
    fetchSummoner,
};