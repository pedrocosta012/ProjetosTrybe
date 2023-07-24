const data = require('../data/zoo_data');

const testIfError = (param) => {
  if (param === undefined) {
    throw new Error('Informações inválidas');
  }
};

const allEmployeesData = () => {
  const result = [];
  data.employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    const responsibility = data.species
      .filter(({ id: animalID }) => responsibleFor.includes(animalID));
    const objectBase = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibility.map(({ name }) => name),
      locations: responsibility.map(({ location }) => location),
    };
    result.push(objectBase);
  });
  return result;
};

function getEmployeesCoverage(employeeData) {
  // seu código aqui
  if (!employeeData) {
    return allEmployeesData();
  }
  const employee = data.employees.find(({ id, firstName, lastName }) => (
    (employeeData.id !== undefined) ? (employeeData.id === id)
      : (firstName === employeeData.name || lastName === employeeData.name)
  ));
  testIfError(employee);
  const responsibility = data.species
    .filter(({ id: animalID }) => employee.responsibleFor.includes(animalID));
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibility.map(({ name }) => name),
    locations: responsibility.map(({ location }) => location) };
}

module.exports = getEmployeesCoverage;
