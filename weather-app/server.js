/**
 * Variables
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const fetch = require("node-fetch");

/**
 * Exécution
 */
http.createServer((req, res) => {
    let urlPath = url.parse(req.url).pathname;
    // console.log(url.parse(req.url));

    if (urlPath === "/") {
        fs.readFile(`${__dirname}/src/index.html`, (error, data) => {
            if (error) {
                throw error;
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (urlPath === "/app.js") {
        fs.readFile(`${__dirname}/src/app.js`, (error, data) => {
            if (error) {
                throw error;
            } else {
                res.write(data);
                res.end();
            }
        });
    }
}).listen(3000, "127.0.0.1");