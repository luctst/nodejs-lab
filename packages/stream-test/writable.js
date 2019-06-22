const {Writable} = require("stream");

const outStream = new Writable({
	write(chunk, encoding, callback) {
		process.stdout.write(chunk.toString());
		callback();
	}
});
