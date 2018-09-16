// console.log("starting notes.js file");
const Fs = require("fs");

// module.exports.age = 23; // Dés que l'on va utiliser un require pour appeler ce fichier un object avec le nom indiqué sera crée et aura comme propriété ce qui est exporté avec module.

// module.exports.addNote = () => { // Pareille pour les fonctions
//     console.log("addNote");
//     return "New note";
// };

// module.exports.addNumber = (a,b) => {
//     return a + b;
// };

const AddNote = (title, body) => {
    const NotesList = []; // Contains all the notes
    const NewNote = { // Represent one note 
        title,
        body,
    };

    let duplicatesNotes = NotesList.find(el => el.title === title);

    if (!duplicatesNotes) {
        NotesList.push(NewNote);
        Fs.writeFileSync("./data/notes/notes.json", JSON.stringify(NotesList));
        console.log(`A note with the "${title}" was created`);
    } else {
        console.log("A note with this title already exists");
    }
};

const FetchNotes = () => {
    try {
        const NoteData = Fs.readFileSync("./data/notes/notes.json", "UTF-8");
        const NotesArray = JSON.parse(NoteData);
        return NotesArray;
    } catch (error) {
        
    }
};

const ReadNote = title => {
    const Notes = FetchNotes();
    const Note = Notes.filter(el => el.title === title);
    console.log(Note);
};

const RemoveNote = title => {
    const Notes = FetchNotes();
    let noteRemoved = Notes.filter(el => el.title !== title);
    let message = noteRemoved ? `Note removed` : `Note not found`;
    console.log(message);
    console.log(noteRemoved);
};

module.exports = {
    AddNote, // ES6 feature when property = name you can write like this.
    FetchNotes,
    ReadNote,
    RemoveNote,
};