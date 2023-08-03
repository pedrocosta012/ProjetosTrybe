function moreThenThreeRepetitions(numbersArray) {
  for (const num of numbersArray) {
    if (numbersArray.filter((num2) => num === num2).length === 3) {
      return true;
    }
  }
}

function isInvalidPhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const tooManyRepetitions = moreThenThreeRepetitions(arrayPhoneNumber);
  if (!arrayPhoneNumber.every((num) => num <= 9 && num >= 0) || tooManyRepetitions) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

const mountPhoneNumber = (numbersArray) => numbersArray
  .map((num, i) => {
    if (i === 0) return ['(', num];
    if (i === 1) return [num, ')', ' '];
    if (i === 6) return [num, '-'];
    return num;
  }).flat().join('');

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  const invalidPhoneNumber = isInvalidPhoneNumber(arrayPhoneNumber);
  if (invalidPhoneNumber) {
    return invalidPhoneNumber;
  }
  return mountPhoneNumber(arrayPhoneNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineC + lineB) > lineA) && (Math.abs(lineC - lineB) < lineA);
}

// Desafio 13
function hydrate(beers) {
  const beersNum = beers.match(/\d+/g);

  if (beersNum.length === 1 && beersNum[0] === '1') {
    return `${beersNum[0]} copo de água`;
  }
  let water = 0;
  for (let num of beersNum) {
    water += Number.parseInt(num, 10);
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
