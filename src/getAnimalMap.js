const { species } = require('../data/zoo_data');

const allZones = () => species.reduce((acc, { location }) => {
  if (!acc.includes(location)) {
    acc.push(location);
  }
  return acc;
}, []);

const createInitialObject = () => {
  const resultObject = {};
  const array = allZones();
  array.forEach((zone) => {
    resultObject[zone] = [];
  });
  return resultObject;
};

const animalsFromZone = (selectedZone) => species
  .filter(({ location }) => location === selectedZone);

const getAnimalSpecies = (currZone) => animalsFromZone(currZone).map(({ name }) => name);

const animalsByName = (currZone) => {
  const animals = animalsFromZone(currZone);
  const resultArray = [];
  animals.forEach(({ name: specieName, residents }) => {
    const object = {};
    object[specieName] = residents.map(({ name }) => name);
    resultArray.push(object);
  });
  return resultArray;
};

const createDefaultResult = (result) => {
  const intermediate = result;
  Object.keys(intermediate).forEach((zone) => {
    intermediate[zone] = getAnimalSpecies(zone);
  });
  return intermediate;
};

const animalsByNameAndSex = (currZone, sex) => {
  const result = [];
  const intermediate = animalsFromZone(currZone);
  intermediate.forEach(({ name, residents }) => {
    const object = {};
    object[name] = residents.filter(({ sex: animalSex }) => animalSex === sex)
      .map(({ name: animalName }) => animalName);
    result.push(object);
  });
  return result;
};

const sortResult = (object) => {
  Object.values(object).forEach((animalList) => animalList
    .forEach((animal) => Object.values(animal)[0].sort()));
};

const nameAndSexAllZones = (object, sex) => {
  const result = object;
  Object.keys(result).forEach((zone) => {
    result[zone] = animalsByNameAndSex(zone, sex);
  });
  return result;
};

function getAnimalMap(options = { includeNames: undefined, sex: undefined, sorted: undefined }) {
  const { includeNames, sex, sorted } = options;
  let result = createInitialObject();
  if (includeNames === undefined) {
    createDefaultResult(result);
  } else if (!['male', 'female'].includes(sex)) {
    Object.keys(result).forEach((zone) => {
      result[zone] = animalsByName(zone);
    });
  } else {
    result = nameAndSexAllZones(result, sex);
  }
  if (includeNames && sorted) {
    sortResult(result);
  }
  return result;
}

module.exports = getAnimalMap;
