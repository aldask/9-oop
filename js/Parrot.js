const Bird = require('./Bird.js');

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'I am a captain ' + name;
        this.wingsCount = 2;
        this.canFly = true;
    }
}

module.exports = Parrot;