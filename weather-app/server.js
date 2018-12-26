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
const localhost = "127.0.0.1";
const mustache = require("mustache");


/**
 * Déclaration
 */
const getData = async (query, retrieveData, response) => {
    let data;
    try {
        query = retrieveData;
        data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiId}`);
        let json = await data.json();
        fs.readFile(path.resolve(__dirname, "src", "js", "view", "weather.html"), "utf-8", (error, content) => {
            if (error) throw error;
            const dataMustache = {
                city: json.name,
                date: day[new Date().getDay() - 1],
                day: new Date().getDate(),
                temp: json.main.temp,
                tempMax: json.main.temp_max,
                tempMin: json.main.temp_min,
                humidity: json.main.humidity,
                speed: json.wind.speed
            };
            response.write(mustache.render(content, dataMustache));
            return response.end();
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
            res.writeHead(301, { location: path.resolve(__dirname, "/message") });
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
    } else if (pathname === "/message") {
        req.on('data', chunk => {
            bodyParsed = queryString.parse(chunk.toString());
        }).on("end", () => {
            getData(query, bodyParsed.city, res);
        });
    } else {
        fs.readFile(path.resolve(__dirname, "404.html"), (error, content) => {
            if (error) throw error;
            res.write(content);
            res.end();
        });
    }
}).listen(3000, () => {
    console.log(`Your app is available on http://${localhost}:3000`);
});