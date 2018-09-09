// console.log("starting notes.js file");

// module.exports.age = 23; // Dés que l'on va utiliser un require pour appeler ce fichier un object avec le nom indiqué sera crée et aura comme propriété ce qui est exporté avec module.

// module.exports.addNote = () => { // Pareille pour les fonctions
//     console.log("addNote");
//     return "New note";
// };

// module.exports.addNumber = (a,b) => {
//     return a + b;
// };

const AddNote = (title, body) => {
    console.log("Adding a new note:", title, body);
};

const ListAllNote = () => {
    console.log("Get all notes");
};

const ReadNote = (title) => {
    console.log(`Content of the note with the title '${title}':`);
};

module.exports = {
    AddNote, // ES6 feature when property = name you can write like this.
    ListAllNote,
    ReadNote,
}