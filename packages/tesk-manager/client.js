/**
 * This file will emit an event "command" to the `server.js` file that will respond.
 */

const Event = require("events");
const readLine = require("readline");

const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

const Client = new Event();
const Server = require("./server")(Client);

Server.on("response", resp => {
	process.stdout.write(resp);
	process.stdout.write(`\n\> `);
});

rl.on("line", input => {
	Client.emit("command", input);
});
