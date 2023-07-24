// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  
  if (arrayPhoneNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let erroNum of arrayPhoneNumber) {
    if (erroNum < 0 || erroNum > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let repete1 of arrayPhoneNumber) {
    let count = 0;
    for (let repete2 of arrayPhoneNumber) {
      if (repete1 === repete2) {
        count++;
      }
      if (count === 3) {
      return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }

  let phoneNumber = '';

  for (let i = 0; i < 11; i++) {
    switch (i) {
      case 0:
        phoneNumber += '(';
        break;
      case 2:
        phoneNumber += ') ';
        break;
      case 7:
        phoneNumber += '-';
        break;
    }
    phoneNumber += arrayPhoneNumber[i];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (((lineA + lineB) > lineC) && (Math.abs(lineA - lineB) < lineC)) {
    return true;
  } else if (lineA + lineC > lineB && Math.abs(lineA - lineC) < lineB) {
    return true;
  } else if ((lineC + lineB) > (lineA) && (Math.abs(lineC - lineB)) < (lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(biritas) {
  let num = biritas.match(/\d+/g);
  
  if (num == 1) {
    return num + ' copo de água';
  } else {

    let agua = 0;
  
    for (let a of num) {
      agua += Number.parseInt(a);
    }
    return agua + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
