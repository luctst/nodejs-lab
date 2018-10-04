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
app.use(Express.static(__dirname+"/html"));

 /**
  * Exécution
  */
app.all("/", (req, res) => {
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

app.listen(port);