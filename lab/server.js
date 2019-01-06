const { Person } = require("./Class");
const { EventEmitter } = require("events");
const stream = require("stream");
console.log(stream);
const Lucas = new Person("Soccer", "Lucas", "Tostée", 23);
class foo extends EventEmitter {
    constructor(word) {
        super();
        this.word = word;
    }
};
const fooEmit = new foo("internet");
stream.on("hi", function () {
    return console.log(`Salut les nazes !!`);
});
fooEmit.on("bonjour", function(){
    console.log(`bonjour ${this.word}`);
    return console.log(this);
})
fooEmit.emit("bonjour");
stream.emit("hi");