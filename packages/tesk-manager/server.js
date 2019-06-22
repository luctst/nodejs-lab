const Event = require("events");

class Server extends Event {
	constructor(client) {
		super();
		process.nextTick(() => {
			this.emit("response", "Type a command (help to see a list of commands)");
		});
		client.on("command", command => {
			switch (command) {
				case "help":
				case "add":
				case "ls":
				case "delete":
					this[command]();
				default:
					break;
			}
		});
	}

	help() {
		this.emit("reponse", "Available commandes: help, add, ls, delete");
	}

	add() {
		this.emit("response", "add..");
	}

	ls() {
		this.emit("response", "ls...");
	}

	delete() {
		this.emit("response", "delete...");
	}
}

module.exports = (client) => new Server(client);
