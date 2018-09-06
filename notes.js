console.log("starting notes.js file");

module.exports.age = 23; // Dés que l'on va utiliser un require pour appeler ce fichier un object avec le nom indiqué sera crée et aura comme propriété ce qui est exporté avec module.

module.exports.addNote = () => {
    console.log("addNote");
    return "New note";
};

module.exports.addNumber = (a,b) => {
    return a + b;
};