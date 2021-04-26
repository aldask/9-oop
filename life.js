const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js');
const Parrot = require('./js/Parrot.js');
const Eagle = require('./js/Eagle.js');
const Dragon = require('./js/Dragon.js');
const Goldfish = require('./js/Goldfish.js');
const Nemo = require('./js/Nemo.js');

const rexas = new Dog('Rexas', 'rudas');
const rainis = new Cat('Rainis', 'margas');
const keksas = new Hamster('Keksas', 'pilkas');
const cypsius = new Chicken('Cypsius', 'baltas');
const jack = new Parrot('Jack', 'raudonas');

const edis = new Eagle('Eddie', 'baltai juodas');
const draco = new Dragon('Draco', 'raudonas');
const bubble = new Goldfish('Bubble', 'auksinis');
const marlin = new Nemo('Marlin', 'melynas');

rexas.voice();
rexas.introduce();

rainis.voice();
rainis.introduce();

keksas.voice();
keksas.introduce();

cypsius.voice();
cypsius.introduce();
cypsius.flyAway();

jack.voice();
jack.introduce();
jack.flyAway();

edis.voice();
edis.introduce();
edis.flyAway();

draco.voice();
draco.introduce();
draco.flyAway();

bubble.voice();
bubble.introduce();
bubble.makeWish();

marlin.voice();
marlin.introduce();