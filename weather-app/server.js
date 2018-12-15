/**
 * Variables
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const fetch = require("node-fetch");
const queryString = require("querystring");
const apiId = `26e8fc76ea4289676e61e4f91583579d`;


/**
 * Déclaration
 */
const getData = async (query, retrieveData, response) => {
    let data;
    try {
        query = retrieveData;
        data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiId}`);
        let json = await data.json();
        json = JSON.stringify(json);
        response.write(json);
        response.end();
    } catch (error) {
        throw error;
    }
}

/**
 * Exécution
 */
http.createServer((req, res) => {
    let { pathname } = url.parse(req.url);
    let bodyParsed;
    let query = "";
    
    if (pathname === "/") {
        if (req.method === "POST") {
            req.on('data', chunk => {
                bodyParsed = queryString.parse(chunk.toString());
            }).on("end", () => {
                getData(query, bodyParsed.city, res);
            })
        } else {
            fs.readFile(`${__dirname}/src/index.html`, (error, data) => {
                error ? console.log(error) : res.end(data);
            });
        }
    } else if (pathname === "/app.js") {
        fs.readFile(`${__dirname}/src/app.js`, (error, data) => {
            error ? console.log(error) : res.end(data);
        });
    }
}).listen(3000);