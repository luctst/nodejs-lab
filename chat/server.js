/**
 * Variables
 */
const http = require("http");
const url = require("url");
const fs = require("fs");
const io = require("socket.io");
const path = require("path");
const hostname = '127.0.0.1';
const port = 3000;

/**
 * Exécution
 */
http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    if (urlParse.pathname === "/") {
        fs.readFile(`${__dirname}/src/index.html`, "utf-8", (error, content) => {
            if (error) {
                throw error;
            } else {
                res.writeHead(200, { "content-type": "text/html" }); // Define header can be delete.
                const css = fs.readFileSync(`${__dirname}/src/style.css`, { encoding: "utf-8" });
                res.write(content);
                res.write(css);
                res.end();
            }
        });
    } else if (urlParse.pathname === "/test") {
        res.write(`
        <h1>${path.resolve(__dirname, "server.js")}</h1>
        <p>${path.dirname(__dirname+"/chat/src/index.html")}</p>
        `);
        res.end();
    }
}).listen(port, hostname);