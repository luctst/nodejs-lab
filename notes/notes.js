/**
 * Variables
 */
const Fs = require("fs");

/**
 * Déclaration
 */
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

/**
 * export
 */
module.exports = {
    AddNote, // ES6 feature when property = name you can write like this.
    FetchNotes,
    ReadNote,
    RemoveNote,
};
/* To export module in nodeJs you have many way, the first one is by exporting each functions, variables, object individually:

module.exports.age = 23;
module.exports.foo = () => {};
module.exports.obj = {};

By this way when you will import this file you will have access to the variable age, foo function, obj object.

The second way is by creating an object with the name of the properties that you want export like the example above.
*/