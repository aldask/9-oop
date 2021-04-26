const Pet = require('./Pet.js');

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Nom nom';
        this.canEatTillDeath = true;
    }
}

module.exports = Hamster;