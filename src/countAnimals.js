const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { specie = undefined, sex = undefined } = Object(animal);
  if (specie !== undefined && sex === undefined) {
    return data.species
      .find(({ name }) => name === specie).residents.length;
  }
  if (specie !== undefined && sex !== undefined) {
    return data.species
      .find(({ name }) => name === animal.specie).residents
      .filter(({ sex: animalSex }) => animalSex === sex).length;
  }
  const object = {};
  return data.species.map(({ name, residents }) => {
    object[name] = residents.length;
    return object;
  })[0];
}

module.exports = countAnimals;
