/**
 * Variables
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const fetch = require("node-fetch");
const queryString = require("querystring");
const apiId = `26e8fc76ea4289676e61e4f91583579d`;
const path = require("path");
const day = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];


/**
 * Déclaration
 */
const getData = async (query, retrieveData, response) => {
    let data;
    let dataReplace;

    try {
        query = retrieveData;
        data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiId}`);
        let json = await data.json();

        fs.readFile(path.resolve(__dirname, "src", "js", "view", "weather.html"), "utf-8", (error, content) => {
            if (error) throw error;
            dataReplace = content.replace(/\{%city%}/g, json.name);
            dataReplace = dataReplace.replace(/{%date%}/g, day[new Date().getDay() - 1]);
            dataReplace = dataReplace.replace(/{%temp%}/, json.main.temp);
            dataReplace = dataReplace.replace(/{%tempMax%}/, json.main.temp_max);
            dataReplace = dataReplace.replace(/{%tempMin%}/, json.main.temp_min);
            dataReplace = dataReplace.replace(/{%humidity%}/, json.main.humidity);
            dataReplace = dataReplace.replace(/{%speed%}/, json.wind.speed);
            response.write(dataReplace);
            response.end();
        });
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
            fs.readFile(path.resolve(__dirname, "src", "index.html"), (error, data) => {
                error ? console.log(error) : res.end(data);
            });
        }
    } else if (pathname === "/app.js") {
        fs.readFile(path.resolve(__dirname, "src", "app.js"), (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        });
    } else if (pathname === "/main.css") {
        fs.readFile(path.resolve(__dirname, "src", "main.css"), (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        });
    }
}).listen(3000);