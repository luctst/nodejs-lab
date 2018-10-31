/**
 * Import
 */
const fetch = require("node-fetch");
const Yargv = require("yargs");

/**
 * Variables
 */
let localisation = "2487956";

 /**
  * Déclaration
  */
 const getApi = async (woeid) => {
     try {
         let data = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
         let result = await data.json();
         return result;
     } catch (error) {
         console.log(error);
     }
 };

/**
 * Execution
 */
getApi(localisation);