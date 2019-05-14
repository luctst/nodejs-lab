/**
 * Athlete Class
 */
class Athlete {
    constructor(sport) {
        this.sport = sport;
    }
    getSport() {
        return console.log(`${this.name} practice ${this.sport}`);
    }
}

/**
 * Person Class
 */
class Person extends Athlete {
    constructor(sport, name, surname, age) {
        super(sport);
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

/**
 * Export
 */
module.exports = {
    Person,
}