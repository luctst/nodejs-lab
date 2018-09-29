/**
 * Import
 */
const fetch = require("node-fetch");

/**
 * Execution
 */
const getApi = async () => {
    let crossOrigin = "https://crossorigin.me/";
    try {
        let data = await fetch(`${crossOrigin}https://www.metaweather.com/api/location/2487956/`);
        const result = await data.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

const test = async () => {
    console.log(`bonjour`);
};

getApi();
