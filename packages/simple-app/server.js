/**
 * Variables
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;
const hostName = "127.0.0.1";
const json = fs.readFileSync(`${__dirname}/data/data.json`, { encoding: "utf-8" });
const laptopData = JSON.parse(json);

/**
 * Déclaration
 */
const renderTemplate = (html, laptopData) => {
    let data = html.replace(/{%productName%}/g, laptopData.productName);
    data = data.replace(/{%cpu%}/g, laptopData.cpu);
    data = data.replace(/{%ram%}/g, laptopData.ram);
    data = data.replace(/{%storage%}/g, laptopData.storage);
    data = data.replace(/{%screen%}/g, laptopData.screen);
    data = data.replace(/{%price%}/g, laptopData.price);
    data = data.replace(/{%description%}/g, laptopData.description);
    data = data.replace(/{%id%}/g, laptopData.id);
    return data;
}

/**
 * Exécution
 */
http.createServer((req, res) => {
    let adr = url.parse(req.url, true);
    let query = url.parse(req.url, true).query;

    if (adr.pathname === "/") {
        fs.readFile(`${__dirname}/index.html`, { encoding: "utf-8" }, (error, content) => {
            fs.readFile(`${__dirname}/view/card.html`, { encoding: "utf-8" }, (error, data) => {
                let cardsFull = laptopData.map(el => renderTemplate(data, el));
                res.write(content.replace(/{%cards%}/, cardsFull));
                res.end();
            });
        });
    } else if (adr.pathname === "/data") {
        res.write(`${json}`);
        res.end();
    } else if (adr.pathname === "/laptop" && query.id < laptopData.length) {
        fs.readFile(`${__dirname}/view/laptop.html`, { encoding: "utf-8" }, (error, content) => {
            if (error) {
                throw error;
            } else {
                res.write(renderTemplate(content, laptopData[query.id]));
                res.end();
            }
        });
    } else if (/.*css/.test(adr.pathname)) {
        fs.readFile(`${__dirname}/style.css`, (error, data) => {
            if (error) {
                throw error;
            } else {
                res.writeHead(200, {"content-type": "text/css"});
                res.write(data);
                res.end();
            }
        });
    } else {
        fs.readFile(`${__dirname}/404.html`, { encoding: "utf-8" }, (error, content) => {
            if (error) {
                throw error;
            } else {
                res.writeHead(404, "text/html");
                res.write(content);
                res.end();
            }
        });

    }
}).listen(port, hostName);