/**
* Import
*/

/**
* Variables
*/ 
const Express = require("express");
const app = Express();
const port = 3000;

/**
 * Déclaration
 */
// app.use(Express.static(__dirname+"/html"));

 /**
  * Exécution
  */
app.all("/index", (req, res) => {
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
    res.send();
});

app.all("/bad", (req, res) => {
    res.send(404, "Cette page n'existe pas");
});

app.all("/", (req, res) => {
    res.render("index.hbs", {
        pageInfos: "About page",
        content: "Welcome on my page she's handle with handlebars which is a good template engine.",
        currentYear: `${new Date().getFullYear()} Tostée Lucas.`, 
    }); // Render method use for render file with template engine.
});

app.listen(port);