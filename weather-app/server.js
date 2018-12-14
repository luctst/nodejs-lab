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
    let body;
    
    if (pathname === "/") {
        if (req.method === "POST") {
            req.on('data', chunk => {
                body += chunk.toString();
                console.log(queryString.parse(body));
                res.end(body);
            });
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