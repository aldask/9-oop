const Fish = require('./Fish.js');

class Nemo extends Fish {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Im Nemo';
        this.canSwim = true;

    }

}

module.exports = Nemo;