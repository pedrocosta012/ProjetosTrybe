const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstIdSpecieOfColaborador = data.employees
    .find(({ id: employee }) => employee === id).responsibleFor[0];
  const membersOfSpecie = data.species
    .find(({ id: checking }) => checking === firstIdSpecieOfColaborador).residents;
  let result = { age: Number.NEGATIVE_INFINITY };
  membersOfSpecie.forEach((member) => {
    if (result.age < member.age) {
      result = member;
    }
  });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
