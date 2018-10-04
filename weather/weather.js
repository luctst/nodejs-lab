/**
 * Import
 */
const fetch = require("node-fetch");
const Yargv = require("yargs");

/**
 * Variables
 */

 /**
  * Déclaration
  */
 const getApi = async () => {
     try {
         let data = await fetch(`https://www.metaweather.com/api/location/2487956/`);
         const result =  await data.json();
         console.log(`I'm waiting for an await function`);
         console.log(result.parent);
     } catch (error) {
         console.log(error);
     }
 };

/**
 * Execution
 */
getApi();
