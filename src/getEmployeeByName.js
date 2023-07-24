const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const result = data.employees
    .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
  return (result === undefined) ? {} : result;
}

module.exports = getEmployeeByName;
