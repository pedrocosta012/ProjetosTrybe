const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    } else if (age >= 18 && age < 50) {
      acc.adult += 1;
    } else if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || !Array.isArray(entrants) || entrants.length === 0) {
    return 0;
  }
  const totalPeople = countEntrants(entrants);
  const priceTable = data.prices;
  return totalPeople.child * priceTable.child
   + totalPeople.adult * priceTable.adult
    + totalPeople.senior * priceTable.senior;
}

module.exports = { calculateEntry, countEntrants };
