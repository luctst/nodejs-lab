/**
 * Variables
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require("querystring");

/**
 * Exécution
 */
http.createServer((req, res) => {
    let { pathname } = url.parse(req.url);

    if (req.method === "POST") {
        req.on("data", chunk => {
            console.log(chunk);
        });
    }
    if (pathname === "/") {
    fs.readFile(`${__dirname}/src/index.html`, (error, data) => {
        if (error) {
            throw error;
        } else {
            res.write(data);
            res.end();
        }
    });
    } else if (pathname === "/app.js") {
        fs.readFile(`${__dirname}/src/app.js`, (error, data) => {
            if (error) {
                throw error;
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (pathname === "/test") {
        req.on("data", chunk => console.log(`Data is arrived: ${chunk}`));
        res.write("Test page");
        res.end();
    }
}).listen(3000, "127.0.0.1");