const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const reductionRule = (acc, { managers }) => (!(acc.includes(...managers))
    ? (acc.concat(managers))
    : (acc));
  const result = data.employees.reduce(reductionRule, []);
  return result.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return data
      .employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
