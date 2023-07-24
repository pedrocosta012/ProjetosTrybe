const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .filter((item) => item.name === animal)[0].residents
    .every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
