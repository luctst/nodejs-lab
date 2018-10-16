/**
* Import
*/

/**
* Variables
*/ 
const Express = require("express");
const app = Express();
const port = 3000;
const hbs = require("hbs"); // Template engine
hbs.registerPartials(__dirname+"/views/components"); // Allow creation of components

/**
 * Déclaration
 */
const getCurrentYear = hbs.registerHelper("currentYear", () => {
    return `${new Date().getFullYear()}, Tostée Lucas`;
});

/**
 * Middleware
 */
const myLogger = (req, res, next) => {
    console.log("Je suis une fonction middleware");
    next();
};

const getLog = (req, res, next) => {
    try {
        let infos = `${new Date()}: ${req.method}, ${req.url}`;
        console.log(infos);
        next();
    } catch (error) {
        console.log(error);
    }
}

// app.use(Express.static(__dirname + "/html")); /* Usefull for static file, this will open the ./html/index.html file when you launch your app.*/

// app.use(myLogger); // Keywords use is for call middleware function and happen everytime that a request is done to your app.

app.use(getLog);

 /**
  * Exécution
  */
app.all("/about", (req, res) => {
    res.render("about.hbs", {
        mainTitle: `This is my about page !!`
    });
});

app.all("/bad", (req, res) => {
    res.send(404, "Cette page n'existe pas");
});

app.all("/home", (req, res) => {
    // res.set({ // Modifie en-tête http, express gére ça automatiquement mais on peut le modifier si on veut
    //     "content-type": "text/html",
    //     "content-length": 125
    // });
    // res.send("hello express");
    // res.send({
    //     "name": "lucas",
    //     "secondName": "tostée"
    // });
    // res.send(200, {
    //     tab: ["lucas", "tostée"]
    // } );
    // console.log(res);
    // res.send(console.log(res));
});

app.all("/template", (req, res) => {
    res.render("index.hbs", {
        pageInfos: "About page",
        content: "Welcome on my page she's handle with handlebars which is a good template engine.",
    }); // Render method use for render file with template engine.
});

app.all("/test", (req, res) => {
    res.send(`<h1>Directory: ${__dirname}</h1>`);
});

app.listen(port);