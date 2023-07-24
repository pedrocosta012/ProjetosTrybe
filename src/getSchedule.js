const data = require('../data/zoo_data');

const daysAtWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const verifyAvailability = (day) => ((data.hours[day].open === 0 && data.hours[day].close === 0)
  ? ({
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  })
  : ({
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: [],
  }));

const createAnAnimalSchedule = (chosenAnimal) => data.species
  .find(({ name }) => name === chosenAnimal).availability;

const createADaySchedule = (chosenDay) => {
  const result = {};
  result[chosenDay] = verifyAvailability(chosenDay);
  data.species.forEach(({ name, availability }) => {
    if (availability.includes(chosenDay)) {
      result[chosenDay].exhibition.push(name);
    }
  });
  return result;
};

const createFullSchedule = () => {
  const result = {};
  daysAtWeek.forEach((day) => {
    const { officeHour, exhibition } = verifyAvailability(day);
    result[day] = { officeHour, exhibition };
    data.species.forEach(({ name, availability }) => {
      if (availability.includes(day)) {
        result[day].exhibition.push(name);
      }
    });
  });
  return result;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animalSpecies = data.species.map(({ name }) => name);
  if (animalSpecies.includes(scheduleTarget)) {
    return createAnAnimalSchedule(scheduleTarget);
  }

  if (daysAtWeek.includes(scheduleTarget)) {
    return createADaySchedule(scheduleTarget);
  }

  return createFullSchedule();
}

module.exports = getSchedule;
