/**
* Node modules 
*/
const Fs = require("fs");
const _ = require("lodash"); // With require NodeJs first look in your core application if you have module named lodash if not nodeJs look in the node_modules folder and if still not node look in the nodeJs folder install on your system.
const Yargs = require("yargs");

/**
 * Own modules
 */
const Note = require("./notes/notes.js"); // Retrieve the data passed with module.exports in an object Note, and if there is some code outside module.exports launch the code.

/**
 * Variables
 */
const Name = "Lucas";
const Process = process.argv[2]; // Array who contains arguments lists passed by the command line.
const YargsArgv = Yargs.argv;
// let res = Note.addNote;

/**
 * Execution
 */
// console.log(_.isString(false));
// console.log(`Hello mon nom est ${Name} et j'ai ${Note.age} ans`);
// console.log(res());
// console.log(`the result is ${Note.addNumber(2,2)}`); // You can directly call your method of your object because remember module.exports export the data in an object here Note.

// Fs.appendFile("greeting.txt", `Hello ${user.username}`, error => { // function allows to create file
//     if (error) {
//         console.log("unable to write in this file there is an error");
//     }
// });

 /**
  * Notes project execution
  */
// console.log("argv property in Process object in global node object:", process.argv);
// console.log(`Yargs object:`,YargsArgv);
console.log(`Vous avez lancé la commande: '${Process}'.`);
switch (Process) {
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
        Note.RemoveNote(Process);
        break;
    default:
        console.log("Command not recognize");
        break;
}