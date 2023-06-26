const axios = require("axios");
const Redis = require("ioredis");
const config = require("../config");

const redis = new Redis({
    port: config.redis.port,
    host: config.redis.host,
});

async function getSummonerId(summonerName) {
    let summonerID;
    try {
        const response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${config.apiKey}`);
        summonerID = response.data;
        const cacheKey = `summoner:${summonerName}`;
        await redis.set(cacheKey, JSON.stringify(response.data), "EX", 30 * 60);
        console.log("Stored data in cache");
    } catch (error) {
        console.error(error);
    }

    return summonerID.id;
}

async function fetchApiDataLOL(summonerName) {
    // Check if the data exists in the cache
    const cacheKey = `lol/summoner:${summonerName}`;
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
        console.log("Retrieved data from cache");
        return JSON.parse(cachedData);
    }

    const summonerID = await getSummonerId(summonerName);

    // Fetch data from the API if it's not in the cache
    const apiResponse = await axios.get(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=${config.apiKey}`
    );
    const responseData = apiResponse.data;

    // Store the fetched data in the cache
    await redis.set(cacheKey, JSON.stringify(responseData), "EX", 30 * 60);
    console.log("Stored data in cache");

    return responseData;
}

module.exports = {
    fetchApiDataLOL,
};
