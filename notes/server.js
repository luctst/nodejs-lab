/**
* Import 
*/
const Yargs = require("yargs"); // Import nodeJs module search in node_modules project folder if not found search in nodeJs system folder.
const Note = require("./notes.js"); // import local file by using relative path.

/**
 * Variables
 */
const command = process.argv[2]; // Array who contains arguments lists passed by the command line.
const YargsArgv = Yargs.argv;

/**
 * Execution
 */
console.log("argv property in command object in global node object:", process.argv);
console.log(`Yargs object:`,YargsArgv);
console.log(`Vous avez lancé la commande: '${command}'.`);
switch (command) {
    case "add":
        Note.AddNote(YargsArgv.title, YargsArgv.body);
        break;
    case "list":
        Note.FetchNotes();
        break;
    case "read":
        Note.ReadNote(YargsArgv.title);
        break;
    case "delete":
        Note.RemoveNote(command);
        break;
    default:
        console.log("Command not recognize");
        break;
}