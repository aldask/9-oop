const Animals = require('./Animals.js');

class Pet extends Animals {
    constructor(name, color) {
        super(name, color);
        this.sound = 'pet';
    }
}

module.exports = Pet;